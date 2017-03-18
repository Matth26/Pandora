'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux'
//import ImmutableListView from '../view/ImmutableListView'
import * as SceneConst from '../scene/Const'
import { Actions } from 'react-native-router-flux'
import Style from '../view/Style'
import * as box from './BoxActions'

import colors from 'HSColors'

import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Box 1',
    icon: 'av-timer',
    isOpenable: true,
  },
  {
    title: 'Box 2',
    icon: 'av-timer',
    isOpenable: true,
  },
  {
    title: 'Box 3',
    icon: 'av-timer',
    isOpenable: false,
  },
  {
    title: 'Box 4',
    icon: 'av-timer',
    isOpenable: true,
  },

]

const ListBoxes = (props) => {
  
  return (
    <ScrollView>
      <List>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              titleStyle={{fontSize: 25}}
              chevronColor={colors.grey2}
              leftIcon={{name: item.icon, color: item.isOpenable ? colors.openBox : colors.closeBox, size:25}}
              rightIcon={{size:25}}
              onPress={() => props.onPress(item.title)}
              //rightIcon={{name: 'vpn-key', color: item.isOpenable ? colors.openBox : colors.closeBox }}
            />
          ))
        }
      </List>
    </ScrollView>
  )
}

ListBoxes.propTypes = {
  onPress: PropTypes.func.isRequired,
}

var styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    overflow: 'hidden'
  }
});

export default ListBoxes
