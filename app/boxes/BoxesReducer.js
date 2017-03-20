'use strict';

import { Map, fromJS } from 'immutable'
import * as boxes from './BoxesActions'

const defaultState = fromJS({
  boxSelectedName: undefined,

});

export default function (state = defaultState, action) {
    switch(action.type) {
        case boxes.CLICK_ON_BOX:
          return state.set('boxSelectedName', action.name);
        default:
          return state;
    }
    return state;
}
