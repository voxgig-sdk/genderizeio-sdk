# Genderizeio SDK utility: make_context

from core.context import GenderizeioContext


def make_context_util(ctxmap, basectx):
    return GenderizeioContext(ctxmap, basectx)
