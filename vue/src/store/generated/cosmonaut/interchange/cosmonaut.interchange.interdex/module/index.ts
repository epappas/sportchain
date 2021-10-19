// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendBuyOrder } from "./types/interdex/tx";
import { MsgSendCreatePair } from "./types/interdex/tx";
import { MsgCancelBuyOrder } from "./types/interdex/tx";
import { MsgSendSellOrder } from "./types/interdex/tx";
import { MsgCancelSellOrder } from "./types/interdex/tx";


const types = [
  ["/cosmonaut.interchange.interdex.MsgSendBuyOrder", MsgSendBuyOrder],
  ["/cosmonaut.interchange.interdex.MsgSendCreatePair", MsgSendCreatePair],
  ["/cosmonaut.interchange.interdex.MsgCancelBuyOrder", MsgCancelBuyOrder],
  ["/cosmonaut.interchange.interdex.MsgSendSellOrder", MsgSendSellOrder],
  ["/cosmonaut.interchange.interdex.MsgCancelSellOrder", MsgCancelSellOrder],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgSendBuyOrder: (data: MsgSendBuyOrder): EncodeObject => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgSendBuyOrder", value: data }),
    msgSendCreatePair: (data: MsgSendCreatePair): EncodeObject => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgSendCreatePair", value: data }),
    msgCancelBuyOrder: (data: MsgCancelBuyOrder): EncodeObject => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgCancelBuyOrder", value: data }),
    msgSendSellOrder: (data: MsgSendSellOrder): EncodeObject => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgSendSellOrder", value: data }),
    msgCancelSellOrder: (data: MsgCancelSellOrder): EncodeObject => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgCancelSellOrder", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
