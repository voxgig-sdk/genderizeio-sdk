package = "voxgig-sdk-genderizeio"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/genderizeio-sdk.git"
}
description = {
  summary = "Genderizeio SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["genderizeio_sdk"] = "genderizeio_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
