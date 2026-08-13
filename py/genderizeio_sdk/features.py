# Genderizeio SDK feature factory

from genderizeio_sdk.feature.base_feature import GenderizeioBaseFeature
from genderizeio_sdk.feature.test_feature import GenderizeioTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GenderizeioBaseFeature(),
        "test": lambda: GenderizeioTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
