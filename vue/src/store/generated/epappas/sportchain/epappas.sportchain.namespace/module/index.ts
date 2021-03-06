// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuyName } from "./types/namespace/tx";
import { MsgDeleteName } from "./types/namespace/tx";
import { MsgSetName } from "./types/namespace/tx";


const types = [
  ["/epappas.sportchain.namespace.MsgBuyName", MsgBuyName],
  ["/epappas.sportchain.namespace.MsgDeleteName", MsgDeleteName],
  ["/epappas.sportchain.namespace.MsgSetName", MsgSetName],
  
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
    msgBuyName: (data: MsgBuyName): EncodeObject => ({ typeUrl: "/epappas.sportchain.namespace.MsgBuyName", value: data }),
    msgDeleteName: (data: MsgDeleteName): EncodeObject => ({ typeUrl: "/epappas.sportchain.namespace.MsgDeleteName", value: data }),
    msgSetName: (data: MsgSetName): EncodeObject => ({ typeUrl: "/epappas.sportchain.namespace.MsgSetName", value: data }),
    
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
