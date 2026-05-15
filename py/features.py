# Genderizeio SDK feature factory

from feature.base_feature import GenderizeioBaseFeature
from feature.test_feature import GenderizeioTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GenderizeioBaseFeature(),
        "test": lambda: GenderizeioTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
