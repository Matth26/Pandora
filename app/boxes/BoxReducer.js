'use strict';

import { Map, fromJS } from 'immutable'
import * as boxes from './BoxActions'

const defaultState = fromJS({
  boxSelectedName: undefined,

});

export default function (state = defaultState, action) {
    switch(action.type) {
        case boxes.CLICK_ON_BOX:
          let newState = state.set('boxSelectedName', action.name);
          return newState;
        default:
          return state;
    }
    return state;
}
