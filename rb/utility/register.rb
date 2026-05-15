# Genderizeio SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GenderizeioUtility.registrar = ->(u) {
  u.clean = GenderizeioUtilities::Clean
  u.done = GenderizeioUtilities::Done
  u.make_error = GenderizeioUtilities::MakeError
  u.feature_add = GenderizeioUtilities::FeatureAdd
  u.feature_hook = GenderizeioUtilities::FeatureHook
  u.feature_init = GenderizeioUtilities::FeatureInit
  u.fetcher = GenderizeioUtilities::Fetcher
  u.make_fetch_def = GenderizeioUtilities::MakeFetchDef
  u.make_context = GenderizeioUtilities::MakeContext
  u.make_options = GenderizeioUtilities::MakeOptions
  u.make_request = GenderizeioUtilities::MakeRequest
  u.make_response = GenderizeioUtilities::MakeResponse
  u.make_result = GenderizeioUtilities::MakeResult
  u.make_point = GenderizeioUtilities::MakePoint
  u.make_spec = GenderizeioUtilities::MakeSpec
  u.make_url = GenderizeioUtilities::MakeUrl
  u.param = GenderizeioUtilities::Param
  u.prepare_auth = GenderizeioUtilities::PrepareAuth
  u.prepare_body = GenderizeioUtilities::PrepareBody
  u.prepare_headers = GenderizeioUtilities::PrepareHeaders
  u.prepare_method = GenderizeioUtilities::PrepareMethod
  u.prepare_params = GenderizeioUtilities::PrepareParams
  u.prepare_path = GenderizeioUtilities::PreparePath
  u.prepare_query = GenderizeioUtilities::PrepareQuery
  u.result_basic = GenderizeioUtilities::ResultBasic
  u.result_body = GenderizeioUtilities::ResultBody
  u.result_headers = GenderizeioUtilities::ResultHeaders
  u.transform_request = GenderizeioUtilities::TransformRequest
  u.transform_response = GenderizeioUtilities::TransformResponse
}
