/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { GoldPriceResult } from '../consuming/gold_price'

export const protobufPackage = 'cosmonaut.interchange.consuming'

export interface QueryGoldPriceRequest {
  requestId: number
}

export interface QueryGoldPriceResponse {
  result: GoldPriceResult | undefined
}

export interface QueryLastGoldPriceIdRequest {}

export interface QueryLastGoldPriceIdResponse {
  requestId: number
}

const baseQueryGoldPriceRequest: object = { requestId: 0 }

export const QueryGoldPriceRequest = {
  encode(message: QueryGoldPriceRequest, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGoldPriceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGoldPriceRequest } as QueryGoldPriceRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGoldPriceRequest {
    const message = { ...baseQueryGoldPriceRequest } as QueryGoldPriceRequest
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId)
    } else {
      message.requestId = 0
    }
    return message
  },

  toJSON(message: QueryGoldPriceRequest): unknown {
    const obj: any = {}
    message.requestId !== undefined && (obj.requestId = message.requestId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGoldPriceRequest>): QueryGoldPriceRequest {
    const message = { ...baseQueryGoldPriceRequest } as QueryGoldPriceRequest
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId
    } else {
      message.requestId = 0
    }
    return message
  }
}

const baseQueryGoldPriceResponse: object = {}

export const QueryGoldPriceResponse = {
  encode(message: QueryGoldPriceResponse, writer: Writer = Writer.create()): Writer {
    if (message.result !== undefined) {
      GoldPriceResult.encode(message.result, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGoldPriceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGoldPriceResponse } as QueryGoldPriceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.result = GoldPriceResult.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGoldPriceResponse {
    const message = { ...baseQueryGoldPriceResponse } as QueryGoldPriceResponse
    if (object.result !== undefined && object.result !== null) {
      message.result = GoldPriceResult.fromJSON(object.result)
    } else {
      message.result = undefined
    }
    return message
  },

  toJSON(message: QueryGoldPriceResponse): unknown {
    const obj: any = {}
    message.result !== undefined && (obj.result = message.result ? GoldPriceResult.toJSON(message.result) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGoldPriceResponse>): QueryGoldPriceResponse {
    const message = { ...baseQueryGoldPriceResponse } as QueryGoldPriceResponse
    if (object.result !== undefined && object.result !== null) {
      message.result = GoldPriceResult.fromPartial(object.result)
    } else {
      message.result = undefined
    }
    return message
  }
}

const baseQueryLastGoldPriceIdRequest: object = {}

export const QueryLastGoldPriceIdRequest = {
  encode(_: QueryLastGoldPriceIdRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLastGoldPriceIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryLastGoldPriceIdRequest } as QueryLastGoldPriceIdRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryLastGoldPriceIdRequest {
    const message = { ...baseQueryLastGoldPriceIdRequest } as QueryLastGoldPriceIdRequest
    return message
  },

  toJSON(_: QueryLastGoldPriceIdRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryLastGoldPriceIdRequest>): QueryLastGoldPriceIdRequest {
    const message = { ...baseQueryLastGoldPriceIdRequest } as QueryLastGoldPriceIdRequest
    return message
  }
}

const baseQueryLastGoldPriceIdResponse: object = { requestId: 0 }

export const QueryLastGoldPriceIdResponse = {
  encode(message: QueryLastGoldPriceIdResponse, writer: Writer = Writer.create()): Writer {
    if (message.requestId !== 0) {
      writer.uint32(8).int64(message.requestId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLastGoldPriceIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryLastGoldPriceIdResponse } as QueryLastGoldPriceIdResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requestId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryLastGoldPriceIdResponse {
    const message = { ...baseQueryLastGoldPriceIdResponse } as QueryLastGoldPriceIdResponse
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = Number(object.requestId)
    } else {
      message.requestId = 0
    }
    return message
  },

  toJSON(message: QueryLastGoldPriceIdResponse): unknown {
    const obj: any = {}
    message.requestId !== undefined && (obj.requestId = message.requestId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryLastGoldPriceIdResponse>): QueryLastGoldPriceIdResponse {
    const message = { ...baseQueryLastGoldPriceIdResponse } as QueryLastGoldPriceIdResponse
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId
    } else {
      message.requestId = 0
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** GoldPriceResult defines a rpc handler method for MsgGoldPriceData. */
  GoldPriceResult(request: QueryGoldPriceRequest): Promise<QueryGoldPriceResponse>
  /** LastGoldPriceId query the last GoldPrice result id */
  LastGoldPriceId(request: QueryLastGoldPriceIdRequest): Promise<QueryLastGoldPriceIdResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  GoldPriceResult(request: QueryGoldPriceRequest): Promise<QueryGoldPriceResponse> {
    const data = QueryGoldPriceRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.interchange.consuming.Query', 'GoldPriceResult', data)
    return promise.then((data) => QueryGoldPriceResponse.decode(new Reader(data)))
  }

  LastGoldPriceId(request: QueryLastGoldPriceIdRequest): Promise<QueryLastGoldPriceIdResponse> {
    const data = QueryLastGoldPriceIdRequest.encode(request).finish()
    const promise = this.rpc.request('cosmonaut.interchange.consuming.Query', 'LastGoldPriceId', data)
    return promise.then((data) => QueryLastGoldPriceIdResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
