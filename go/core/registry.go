package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetGenderEntityFunc func(client *GenderizeioSDK, entopts map[string]any) GenderizeioEntity

