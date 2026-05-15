<?php
declare(strict_types=1);

// Genderizeio SDK utility: result_headers

class GenderizeioResultHeaders
{
    public static function call(GenderizeioContext $ctx): ?GenderizeioResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
