# Genderizeio SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GenderizeioFeatures
  def self.make_feature(name)
    case name
    when "base"
      GenderizeioBaseFeature.new
    when "ratelimit"
      GenderizeioRatelimitFeature.new
    when "retry"
      GenderizeioRetryFeature.new
    when "test"
      GenderizeioTestFeature.new
    when "timeout"
      GenderizeioTimeoutFeature.new
    else
      GenderizeioBaseFeature.new
    end
  end
end
