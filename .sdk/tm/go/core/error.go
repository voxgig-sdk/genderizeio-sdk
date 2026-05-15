package core

type GenderizeioError struct {
	IsGenderizeioError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGenderizeioError(code string, msg string, ctx *Context) *GenderizeioError {
	return &GenderizeioError{
		IsGenderizeioError: true,
		Sdk:              "Genderizeio",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GenderizeioError) Error() string {
	return e.Msg
}
