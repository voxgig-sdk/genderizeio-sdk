<?php
declare(strict_types=1);

// Genderizeio SDK configuration

class GenderizeioConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Genderizeio",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.genderize.io",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_gender" => [],
                ],
            ],
            "entity" => [
        'get_gender' => [
          'fields' => [
            [
              'name' => 'count',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'gender',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'probability',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 3,
            ],
          ],
          'name' => 'get_gender',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'apikey',
                        'orig' => 'apikey',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'US',
                        'kind' => 'query',
                        'name' => 'country_id',
                        'orig' => 'country_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'peter',
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/',
                  'select' => [
                    'exist' => [
                      'apikey',
                      'country_id',
                      'name',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'parts' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GenderizeioFeatures::make_feature($name);
    }
}
