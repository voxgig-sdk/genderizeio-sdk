# ProjectName SDK exists test

import pytest
from genderizeio_sdk import GenderizeioSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GenderizeioSDK.test(None, None)
        assert testsdk is not None
