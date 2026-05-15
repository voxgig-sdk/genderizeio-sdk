<?php
declare(strict_types=1);

// Genderizeio SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GenderizeioMakeContext
{
    public static function call(array $ctxmap, ?GenderizeioContext $basectx): GenderizeioContext
    {
        return new GenderizeioContext($ctxmap, $basectx);
    }
}
