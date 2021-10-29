import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "cosmonaut.interchange.consuming";
export interface GoldPriceCallData {
    symbols: string[];
    multiplier: number;
}
export interface GoldPriceResult {
    rates: number[];
}
export declare const GoldPriceCallData: {
    encode(message: GoldPriceCallData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GoldPriceCallData;
    fromJSON(object: any): GoldPriceCallData;
    toJSON(message: GoldPriceCallData): unknown;
    fromPartial(object: DeepPartial<GoldPriceCallData>): GoldPriceCallData;
};
export declare const GoldPriceResult: {
    encode(message: GoldPriceResult, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GoldPriceResult;
    fromJSON(object: any): GoldPriceResult;
    toJSON(message: GoldPriceResult): unknown;
    fromPartial(object: DeepPartial<GoldPriceResult>): GoldPriceResult;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
