import { Context } from './Context';
declare class GenderizeioError extends Error {
    isGenderizeioError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { GenderizeioError };
