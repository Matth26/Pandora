'use strict';

// Actions:
export const CLICK_ON_BOX = 'CLICK_ON_BOX'

// Action creators:
export const clickOnBox = (name) => ({
  type: 'CLICK_ON_BOX',
  name,
});
