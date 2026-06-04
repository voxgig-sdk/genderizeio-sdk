# Genderizeio SDK

Predict the likely gender of a person from their first name, with a probability score

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Genderize.io

[Genderize.io](https://genderize.io) is a name-to-gender prediction service operated by Demografix ApS, alongside its sister APIs [Agify.io](https://agify.io) (age estimation) and [Nationalize.io](https://nationalize.io) (nationality prediction). All three are backed by the same underlying name dataset.

The service works by looking a first name up in a corpus of more than 1 billion people and returning the proportion of that name observed as male or female. A returned probability of 0.92 for `female` means 92% of the people with that name in the dataset are female.

What you get from the API:
- A single `GET` endpoint at `https://api.genderize.io` taking a `name` query parameter.
- A predicted `gender` (`male` or `female`), a `probability` score, and a `count` of how many entries in the dataset matched the name.
- Optional country-specific scoping — useful because, for example, "Kim" skews male in Denmark but female in the United States.

The free tier permits 2,500 names per month without a credit card; higher volumes require a paid plan and API key. Keys are shared across the Demografix family of APIs.

## Try it

**TypeScript**
```bash
npm install genderizeio
```

**Python**
```bash
pip install genderizeio-sdk
```

**PHP**
```bash
composer require voxgig/genderizeio-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/genderizeio-sdk/go
```

**Ruby**
```bash
gem install genderizeio-sdk
```

**Lua**
```bash
luarocks install genderizeio-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { GenderizeioSDK } from 'genderizeio'

const client = new GenderizeioSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o genderizeio-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "genderizeio": {
      "command": "/abs/path/to/genderizeio-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetGender** | Gender prediction for a first name, served by `GET https://api.genderize.io?name={name}`, returning `gender`, `probability`, and `count` fields. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from genderizeio_sdk import GenderizeioSDK

client = GenderizeioSDK({})


# Load a specific getgender
getgender, err = client.GetGender(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'genderizeio_sdk.php';

$client = new GenderizeioSDK([]);


// Load a specific getgender
[$getgender, $err] = $client->GetGender(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/genderizeio-sdk/go"

client := sdk.NewGenderizeioSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Genderizeio_sdk"

client = GenderizeioSDK.new({})


# Load a specific getgender
getgender, err = client.GetGender(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("genderizeio_sdk")

local client = sdk.new({})


-- Load a specific getgender
local getgender, err = client:GetGender(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = GenderizeioSDK.test()
const result = await client.GetGender().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = GenderizeioSDK.test(None, None)
result, err = client.GetGender(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = GenderizeioSDK::test(null, null);
[$result, $err] = $client->GetGender(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetGender(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = GenderizeioSDK.test(nil, nil)
result, err = client.GetGender(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetGender(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Genderize.io

- Upstream: [https://genderize.io](https://genderize.io)

- Free tier of 2,500 names/month, no credit card required.
- Paid plans start at $20/month for higher request volumes.
- An API key is shared across the Demografix family (Genderize, Agify, Nationalize).
- Consult the official site for current terms of service.

---

Generated from the Genderize.io OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
