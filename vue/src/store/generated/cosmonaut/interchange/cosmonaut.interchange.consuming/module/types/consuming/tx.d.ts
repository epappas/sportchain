import { Reader, Writer } from 'protobufjs/minimal';
import { GoldPriceCallData } from '../consuming/gold_price';
import { Coin } from '../cosmos/base/v1beta1/coin';
export declare const protobufPackage = "cosmonaut.interchange.consuming";
export interface MsgGoldPriceData {
    creator: string;
    oracleScriptId: number;
    sourceChannel: string;
    calldata: GoldPriceCallData | undefined;
    askCount: number;
    minCount: number;
    feeLimit: Coin[];
    requestKey: string;
    prepareGas: number;
    executeGas: number;
    clientId: string;
}
export interface MsgGoldPriceDataResponse {
}
export declare const MsgGoldPriceData: {
    encode(message: MsgGoldPriceData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgGoldPriceData;
    fromJSON(object: any): MsgGoldPriceData;
    toJSON(message: MsgGoldPriceData): unknown;
    fromPartial(object: DeepPartial<MsgGoldPriceData>): MsgGoldPriceData;
};
export declare const MsgGoldPriceDataResponse: {
    encode(_: MsgGoldPriceDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgGoldPriceDataResponse;
    fromJSON(_: any): MsgGoldPriceDataResponse;
    toJSON(_: MsgGoldPriceDataResponse): unknown;
    fromPartial(_: DeepPartial<MsgGoldPriceDataResponse>): MsgGoldPriceDataResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    GoldPriceData(request: MsgGoldPriceData): Promise<MsgGoldPriceDataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    GoldPriceData(request: MsgGoldPriceData): Promise<MsgGoldPriceDataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
