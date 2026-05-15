<?php
declare(strict_types=1);

// Genderizeio SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GenderizeioFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GenderizeioBaseFeature();
            case "test":
                return new GenderizeioTestFeature();
            default:
                return new GenderizeioBaseFeature();
        }
    }
}
