<?php
declare(strict_types=1);

// Genderizeio SDK base feature

class GenderizeioBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GenderizeioContext $ctx, array $options): void {}
    public function PostConstruct(GenderizeioContext $ctx): void {}
    public function PostConstructEntity(GenderizeioContext $ctx): void {}
    public function SetData(GenderizeioContext $ctx): void {}
    public function GetData(GenderizeioContext $ctx): void {}
    public function GetMatch(GenderizeioContext $ctx): void {}
    public function SetMatch(GenderizeioContext $ctx): void {}
    public function PrePoint(GenderizeioContext $ctx): void {}
    public function PreSpec(GenderizeioContext $ctx): void {}
    public function PreRequest(GenderizeioContext $ctx): void {}
    public function PreResponse(GenderizeioContext $ctx): void {}
    public function PreResult(GenderizeioContext $ctx): void {}
    public function PreDone(GenderizeioContext $ctx): void {}
    public function PreUnexpected(GenderizeioContext $ctx): void {}
}
