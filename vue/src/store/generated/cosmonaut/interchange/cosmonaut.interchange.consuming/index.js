import { txClient, queryClient, MissingWalletError } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { GoldPriceCallData } from "./module/types/consuming/gold_price";
import { GoldPriceResult } from "./module/types/consuming/gold_price";
import { ConsumingPacketData } from "./module/types/consuming/packet";
import { NoData } from "./module/types/consuming/packet";
export { GoldPriceCallData, GoldPriceResult, ConsumingPacketData, NoData };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        GoldPriceResult: {},
        LastGoldPriceId: {},
        _Structure: {
            GoldPriceCallData: getStructure(GoldPriceCallData.fromPartial({})),
            GoldPriceResult: getStructure(GoldPriceResult.fromPartial({})),
            ConsumingPacketData: getStructure(ConsumingPacketData.fromPartial({})),
            NoData: getStructure(NoData.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getGoldPriceResult: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GoldPriceResult[JSON.stringify(params)] ?? {};
        },
        getLastGoldPriceId: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.LastGoldPriceId[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: cosmonaut.interchange.consuming initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    await dispatch(subscription.action, subscription.payload);
                }
                catch (e) {
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryGoldPriceResult({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryGoldPriceResult(key.request_id)).data;
                commit('QUERY', { query: 'GoldPriceResult', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGoldPriceResult', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGoldPriceResult']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryGoldPriceResult', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryLastGoldPriceId({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryLastGoldPriceId()).data;
                commit('QUERY', { query: 'LastGoldPriceId', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryLastGoldPriceId', payload: { options: { all }, params: { ...key }, query } });
                return getters['getLastGoldPriceId']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryLastGoldPriceId', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgGoldPriceData({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgGoldPriceData(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgGoldPriceData:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgGoldPriceData:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgGoldPriceData({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgGoldPriceData(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgGoldPriceData:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgGoldPriceData:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
