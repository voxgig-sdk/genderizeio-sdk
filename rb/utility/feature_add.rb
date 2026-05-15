# Genderizeio SDK utility: feature_add
module GenderizeioUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
