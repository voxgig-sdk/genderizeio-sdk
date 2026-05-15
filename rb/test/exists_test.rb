# Genderizeio SDK exists test

require "minitest/autorun"
require_relative "../Genderizeio_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = GenderizeioSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
