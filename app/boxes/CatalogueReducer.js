'use strict';

import { Map } from 'immutable'
import * as catalogue from './CatalogueActions.js'

const defaultState = Map({
    'demo' : null
})

export default function (state = defaultState, action) {
    switch(action.type) {
        case catalogue.SET_DEMO:
            return state.set('demo', action.demo);
    }
    return state;
}
