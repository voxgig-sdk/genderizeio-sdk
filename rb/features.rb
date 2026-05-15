# Genderizeio SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GenderizeioFeatures
  def self.make_feature(name)
    case name
    when "base"
      GenderizeioBaseFeature.new
    when "test"
      GenderizeioTestFeature.new
    else
      GenderizeioBaseFeature.new
    end
  end
end
