<?php
declare(strict_types=1);

// Genderizeio SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GenderizeioUtility::setRegistrar(function (GenderizeioUtility $u): void {
    $u->clean = [GenderizeioClean::class, 'call'];
    $u->done = [GenderizeioDone::class, 'call'];
    $u->make_error = [GenderizeioMakeError::class, 'call'];
    $u->feature_add = [GenderizeioFeatureAdd::class, 'call'];
    $u->feature_hook = [GenderizeioFeatureHook::class, 'call'];
    $u->feature_init = [GenderizeioFeatureInit::class, 'call'];
    $u->fetcher = [GenderizeioFetcher::class, 'call'];
    $u->make_fetch_def = [GenderizeioMakeFetchDef::class, 'call'];
    $u->make_context = [GenderizeioMakeContext::class, 'call'];
    $u->make_options = [GenderizeioMakeOptions::class, 'call'];
    $u->make_request = [GenderizeioMakeRequest::class, 'call'];
    $u->make_response = [GenderizeioMakeResponse::class, 'call'];
    $u->make_result = [GenderizeioMakeResult::class, 'call'];
    $u->make_point = [GenderizeioMakePoint::class, 'call'];
    $u->make_spec = [GenderizeioMakeSpec::class, 'call'];
    $u->make_url = [GenderizeioMakeUrl::class, 'call'];
    $u->param = [GenderizeioParam::class, 'call'];
    $u->prepare_auth = [GenderizeioPrepareAuth::class, 'call'];
    $u->prepare_body = [GenderizeioPrepareBody::class, 'call'];
    $u->prepare_headers = [GenderizeioPrepareHeaders::class, 'call'];
    $u->prepare_method = [GenderizeioPrepareMethod::class, 'call'];
    $u->prepare_params = [GenderizeioPrepareParams::class, 'call'];
    $u->prepare_path = [GenderizeioPreparePath::class, 'call'];
    $u->prepare_query = [GenderizeioPrepareQuery::class, 'call'];
    $u->result_basic = [GenderizeioResultBasic::class, 'call'];
    $u->result_body = [GenderizeioResultBody::class, 'call'];
    $u->result_headers = [GenderizeioResultHeaders::class, 'call'];
    $u->transform_request = [GenderizeioTransformRequest::class, 'call'];
    $u->transform_response = [GenderizeioTransformResponse::class, 'call'];
});
