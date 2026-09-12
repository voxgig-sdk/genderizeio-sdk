import { GenderizeioEntityBase } from '../GenderizeioEntityBase';
import type { GenderizeioSDK } from '../GenderizeioSDK';
import type { Control } from '../types';
import type { GetGender, GetGenderLoadMatch } from '../GenderizeioTypes';
declare class GetGenderEntity extends GenderizeioEntityBase<GetGender> {
    constructor(client: GenderizeioSDK, entopts: any);
    make(this: GetGenderEntity): GetGenderEntity;
    load(this: any, reqmatch?: GetGenderLoadMatch, ctrl?: Control): Promise<GetGenderEntity>;
}
export { GetGenderEntity };
