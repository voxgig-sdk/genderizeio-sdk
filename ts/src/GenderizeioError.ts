
import { Context } from './Context'


class GenderizeioError extends Error {

  isGenderizeioError = true

  sdk = 'Genderizeio'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GenderizeioError
}

