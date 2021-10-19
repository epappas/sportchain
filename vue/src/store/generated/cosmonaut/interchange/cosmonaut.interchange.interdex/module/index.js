// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
        msgSendBuyOrder: (data) => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgSendBuyOrder", value: data }),
        msgSendCreatePair: (data) => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgSendCreatePair", value: data }),
        msgCancelBuyOrder: (data) => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgCancelBuyOrder", value: data }),
        msgSendSellOrder: (data) => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgSendSellOrder", value: data }),
        msgCancelSellOrder: (data) => ({ typeUrl: "/cosmonaut.interchange.interdex.MsgCancelSellOrder", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
