module wmtoto.core {
    'use strict';

    export interface ICoreModel {
        id: number;
    }

    export class CoreModel implements ICoreModel {
        constructor(public id: number) {}
    }
}