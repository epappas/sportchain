// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import EpappasSportchainEpappasSportchainNamespace from './epappas/sportchain/epappas.sportchain.namespace';
import EpappasSportchainEpappasSportchainSportchain from './epappas/sportchain/epappas.sportchain.sportchain';
export default {
    EpappasSportchainEpappasSportchainNamespace: load(EpappasSportchainEpappasSportchainNamespace, 'epappas.sportchain.namespace'),
    EpappasSportchainEpappasSportchainSportchain: load(EpappasSportchainEpappasSportchainSportchain, 'epappas.sportchain.sportchain'),
};
function load(mod, fullns) {
    return function init(store) {
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: ' + fullns);
        }
        else {
            store.registerModule([fullns], mod);
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns + '/init', null, {
                        root: true
                    });
                }
            });
        }
    };
}
