// Typed models for the Genderizeio SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetGender {
  count?: number
  gender?: string
  name?: string
  probability?: number
}

export interface GetGenderLoadMatch {
  count?: number
  gender?: string
  name?: string
  probability?: number
}

