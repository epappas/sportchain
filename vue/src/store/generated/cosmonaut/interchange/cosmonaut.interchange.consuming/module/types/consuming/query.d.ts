import { Reader, Writer } from 'protobufjs/minimal';
import { GoldPriceResult } from '../consuming/gold_price';
export declare const protobufPackage = "cosmonaut.interchange.consuming";
export interface QueryGoldPriceRequest {
    requestId: number;
}
export interface QueryGoldPriceResponse {
    result: GoldPriceResult | undefined;
}
export interface QueryLastGoldPriceIdRequest {
}
export interface QueryLastGoldPriceIdResponse {
    requestId: number;
}
export declare const QueryGoldPriceRequest: {
    encode(message: QueryGoldPriceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGoldPriceRequest;
    fromJSON(object: any): QueryGoldPriceRequest;
    toJSON(message: QueryGoldPriceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGoldPriceRequest>): QueryGoldPriceRequest;
};
export declare const QueryGoldPriceResponse: {
    encode(message: QueryGoldPriceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGoldPriceResponse;
    fromJSON(object: any): QueryGoldPriceResponse;
    toJSON(message: QueryGoldPriceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGoldPriceResponse>): QueryGoldPriceResponse;
};
export declare const QueryLastGoldPriceIdRequest: {
    encode(_: QueryLastGoldPriceIdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastGoldPriceIdRequest;
    fromJSON(_: any): QueryLastGoldPriceIdRequest;
    toJSON(_: QueryLastGoldPriceIdRequest): unknown;
    fromPartial(_: DeepPartial<QueryLastGoldPriceIdRequest>): QueryLastGoldPriceIdRequest;
};
export declare const QueryLastGoldPriceIdResponse: {
    encode(message: QueryLastGoldPriceIdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLastGoldPriceIdResponse;
    fromJSON(object: any): QueryLastGoldPriceIdResponse;
    toJSON(message: QueryLastGoldPriceIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastGoldPriceIdResponse>): QueryLastGoldPriceIdResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** GoldPriceResult defines a rpc handler method for MsgGoldPriceData. */
    GoldPriceResult(request: QueryGoldPriceRequest): Promise<QueryGoldPriceResponse>;
    /** LastGoldPriceId query the last GoldPrice result id */
    LastGoldPriceId(request: QueryLastGoldPriceIdRequest): Promise<QueryLastGoldPriceIdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    GoldPriceResult(request: QueryGoldPriceRequest): Promise<QueryGoldPriceResponse>;
    LastGoldPriceId(request: QueryLastGoldPriceIdRequest): Promise<QueryLastGoldPriceIdResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
