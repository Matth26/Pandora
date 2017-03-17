'use strict';

// Actions:
export const SET_DEMO = 'SET_DEMO'

// Action creators:
export function setDemo(demo) {
  console.log("Set demo ")
  console.log(demo)
  return {
    type: SET_DEMO,
    demo: demo
  }
}
