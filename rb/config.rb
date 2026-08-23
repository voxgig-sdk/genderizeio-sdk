# Genderizeio SDK configuration

module GenderizeioConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Genderizeio",
        "slug" => "genderizeio",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.genderize.io",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_gender" => {},
        },
      },
      "entity" => {
        "get_gender" => {
          "fields" => [
            {
              "name" => "count",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "gender",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "probability",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "get_gender",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "apikey",
                        "orig" => "apikey",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "US",
                        "kind" => "query",
                        "name" => "country_id",
                        "orig" => "country_id",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "peter",
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {
                    "exist" => [
                      "apikey",
                      "country_id",
                      "name",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    GenderizeioFeatures.make_feature(name)
  end
end
