<?php
declare(strict_types=1);

// Genderizeio SDK exists test

require_once __DIR__ . '/../genderizeio_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = GenderizeioSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
