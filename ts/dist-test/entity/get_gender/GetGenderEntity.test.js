"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GetGenderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GENDERIZEIO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GENDERIZEIO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GenderizeioSDK.test();
        const ent = testsdk.GetGender();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GENDERIZEIO_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'get_gender.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "count", "req": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "gender", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "probability", "req": false, "type": "`$NUMBER`", "index$": 3 }], "name": "get_gender", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "apikey", "orig": "apikey", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "US", "kind": "query", "name": "country_id", "orig": "country_id", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "peter", "kind": "query", "name": "name", "orig": "name", "reqd": true, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /", "json": "{\"operationId\":\"getGender\",\"parameters\":[{\"description\":\"First name to predict gender for. Can be provided multiple times for batch requests (e.g., name=peter&name=lois). Supports diacritics and non-latin alphabets.\",\"example\":\"peter\",\"in\":\"query\",\"name\":\"name\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"ISO 3166-1 alpha-2 country code to localize the prediction (e.g., US, GB, FR). Improves accuracy by scoping to specific cultural naming conventions.\",\"example\":\"US\",\"in\":\"query\",\"name\":\"country_id\",\"required\":false,\"schema\":{\"pattern\":\"^[A-Z]{2}$\",\"type\":\"string\"}},{\"description\":\"API key for authenticated requests. Required for requests exceeding the free tier limit of 100 names per day.\",\"in\":\"query\",\"name\":\"apikey\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"multipleNames\":{\"summary\":\"Batch prediction for multiple names\",\"value\":[{\"count\":796799,\"gender\":\"male\",\"name\":\"peter\",\"probability\":0.99},{\"count\":52819,\"gender\":\"female\",\"name\":\"lois\",\"probability\":0.98}]},\"singleName\":{\"summary\":\"Single name prediction\",\"value\":{\"count\":796799,\"gender\":\"male\",\"name\":\"peter\",\"probability\":0.99}},\"withCountry\":{\"summary\":\"Prediction with country localization\",\"value\":{\"count\":12456,\"country_id\":\"US\",\"gender\":\"female\",\"name\":\"kim\",\"probability\":0.73}}},\"schema\":{\"oneOf\":[{\"description\":\"Gender prediction response for a single name\",\"properties\":{\"count\":{\"description\":\"Number of data records used to determine the gender prediction\",\"example\":796799,\"minimum\":0,\"type\":\"integer\"},\"country_id\":{\"description\":\"ISO 3166-1 alpha-2 country code if country localization was requested\",\"example\":\"US\",\"pattern\":\"^[A-Z]{2}$\",\"type\":\"string\"},\"gender\":{\"description\":\"Predicted gender for the name. Can be 'male', 'female', or null if insufficient data\",\"enum\":[\"male\",\"female\",null],\"example\":\"male\",\"type\":\"string\"},\"name\":{\"description\":\"The first name that was analyzed\",\"example\":\"peter\",\"type\":\"string\"},\"probability\":{\"description\":\"Confidence score of the prediction (0.0 to 1.0). Values closer to 0.5 indicate unisex names\",\"example\":0.99,\"format\":\"float\",\"maximum\":1,\"minimum\":0,\"type\":\"number\"}},\"required\":[\"name\",\"gender\",\"probability\",\"count\"],\"type\":\"object\"},{\"items\":{\"description\":\"Gender prediction response for a single name\",\"properties\":{\"count\":{\"description\":\"Number of data records used to determine the gender prediction\",\"example\":796799,\"minimum\":0,\"type\":\"integer\"},\"country_id\":{\"description\":\"ISO 3166-1 alpha-2 country code if country localization was requested\",\"example\":\"US\",\"pattern\":\"^[A-Z]{2}$\",\"type\":\"string\"},\"gender\":{\"description\":\"Predicted gender for the name. Can be 'male', 'female', or null if insufficient data\",\"enum\":[\"male\",\"female\",null],\"example\":\"male\",\"type\":\"string\"},\"name\":{\"description\":\"The first name that was analyzed\",\"example\":\"peter\",\"type\":\"string\"},\"probability\":{\"description\":\"Confidence score of the prediction (0.0 to 1.0). Values closer to 0.5 indicate unisex names\",\"example\":0.99,\"format\":\"float\",\"maximum\":1,\"minimum\":0,\"type\":\"number\"}},\"required\":[\"name\",\"gender\",\"probability\",\"count\"],\"type\":\"object\"},\"type\":\"array\"}]}}},\"description\":\"Successful gender prediction response\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Invalid parameter format\"},\"schema\":{\"description\":\"Error response object\",\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"example\":\"Invalid API key\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"401\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Invalid API key\"},\"schema\":{\"description\":\"Error response object\",\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"example\":\"Invalid API key\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unauthorized - Invalid or missing API key\"},\"422\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Missing name parameter\"},\"schema\":{\"description\":\"Error response object\",\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"example\":\"Invalid API key\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Unprocessable Entity - Missing required name parameter\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Request limit reached\"},\"schema\":{\"description\":\"Error response object\",\"properties\":{\"error\":{\"description\":\"Error message describing what went wrong\",\"example\":\"Invalid API key\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Too Many Requests - Rate limit exceeded\"}},\"security\":[{},{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authenticated requests. Required for usage beyond the free tier of 100 requests per day. Obtain your API key by registering at https://genderize.io/\",\"in\":\"query\",\"name\":\"apikey\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/", "segments": [], "select": { "exist": ["apikey", "country_id", "name"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "get_gender", "name__orig": "get_gender", "Name": "GetGender", "name_": "get_gender", "name-": "get-gender", "NAME": "GET_GENDER", "index$": 0 }, { "active": true, "entity": "get_gender", "key$": "BasicGetGenderFlow", "kind": "basic", "name": "BasicGetGenderFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "get_gender_ref01", "srcdatavar": "get_gender_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-get_gender_ref01" } }], "index$": 0 }] }, 'GetGender');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let get_gender_ref01_data = Object.values(setup.data.existing.get_gender)[0];
        // LOAD
        const get_gender_ref01_ent = client.GetGender();
        const get_gender_ref01_match_dt0 = {};
        const get_gender_ref01_data_dt0 = (await get_gender_ref01_ent.load(get_gender_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != get_gender_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/get_gender/GetGenderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GenderizeioSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['get_gender01', 'get_gender02', 'get_gender03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GENDERIZEIO_TEST_GET_GENDER_ENTID': idmap,
        'GENDERIZEIO_TEST_LIVE': 'FALSE',
        'GENDERIZEIO_TEST_EXPLAIN': 'FALSE',
        'GENDERIZEIO_APIKEY': '',
    });
    idmap = env['GENDERIZEIO_TEST_GET_GENDER_ENTID'];
    const live = 'TRUE' === env.GENDERIZEIO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GENDERIZEIO_TEST_GET_GENDER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.GenderizeioSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.GENDERIZEIO_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.GENDERIZEIO_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GetGenderEntity.test.js.map