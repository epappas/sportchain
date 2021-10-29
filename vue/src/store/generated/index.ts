// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import CosmonautInterchangeCosmonautInterchangeConsuming from './cryptodata/interchange/cosmonaut.interchange.consuming'
import CosmonautInterchangeCosmonautInterchangeInterdex from './cryptodata/interchange/cosmonaut.interchange.interdex'


export default {
  CosmonautInterchangeCosmonautInterchangeConsuming: load(CosmonautInterchangeCosmonautInterchangeConsuming, 'cosmonaut.interchange.consuming'),
  CosmonautInterchangeCosmonautInterchangeInterdex: load(CosmonautInterchangeCosmonautInterchangeInterdex, 'cosmonaut.interchange.interdex'),

}


function load(mod, fullns) {
    return function init(store) {
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
