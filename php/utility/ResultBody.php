<?php
declare(strict_types=1);

// Genderizeio SDK utility: result_body

class GenderizeioResultBody
{
    public static function call(GenderizeioContext $ctx): ?GenderizeioResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
