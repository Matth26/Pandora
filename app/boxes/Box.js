'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import * as SceneConst from '../scene/Const';

import {
  SocialIcon,
  Text,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'

import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]

const Box = ({name, onClick, activated}) => {
  let setDemo = () => {

  }

  return (
    <List>
      {
        list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{name: item.icon}}
          />
        ))
      }
    </List>
  )
}

Box.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}


var styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    overflow: 'hidden'
  },
  button:
  {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default Box
