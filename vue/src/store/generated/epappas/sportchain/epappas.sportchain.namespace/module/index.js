// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgBuyName: (data) => ({ typeUrl: "/epappas.sportchain.namespace.MsgBuyName", value: data }),
        msgDeleteName: (data) => ({ typeUrl: "/epappas.sportchain.namespace.MsgDeleteName", value: data }),
        msgSetName: (data) => ({ typeUrl: "/epappas.sportchain.namespace.MsgSetName", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
