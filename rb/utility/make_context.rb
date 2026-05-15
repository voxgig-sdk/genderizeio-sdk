# Genderizeio SDK utility: make_context
require_relative '../core/context'
module GenderizeioUtilities
  MakeContext = ->(ctxmap, basectx) {
    GenderizeioContext.new(ctxmap, basectx)
  }
end
