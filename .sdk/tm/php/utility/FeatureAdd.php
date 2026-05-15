<?php
declare(strict_types=1);

// Genderizeio SDK utility: feature_add

class GenderizeioFeatureAdd
{
    public static function call(GenderizeioContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
