-- Typed models for the Genderizeio SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetGender
---@field count? number
---@field gender? string
---@field name? string
---@field probability? number

---@class GetGenderLoadMatch
---@field count? number
---@field gender? string
---@field name? string
---@field probability? number

local M = {}

return M
