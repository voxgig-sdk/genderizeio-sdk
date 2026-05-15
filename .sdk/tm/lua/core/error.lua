-- Genderizeio SDK error

local GenderizeioError = {}
GenderizeioError.__index = GenderizeioError


function GenderizeioError.new(code, msg, ctx)
  local self = setmetatable({}, GenderizeioError)
  self.is_sdk_error = true
  self.sdk = "Genderizeio"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GenderizeioError:error()
  return self.msg
end


function GenderizeioError:__tostring()
  return self.msg
end


return GenderizeioError
