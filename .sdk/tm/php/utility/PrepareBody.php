<?php
declare(strict_types=1);

// Genderizeio SDK utility: prepare_body

class GenderizeioPrepareBody
{
    public static function call(GenderizeioContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
