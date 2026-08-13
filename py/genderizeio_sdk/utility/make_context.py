# Genderizeio SDK utility: make_context

from genderizeio_sdk.core.context import GenderizeioContext


def make_context_util(ctxmap, basectx):
    return GenderizeioContext(ctxmap, basectx)
