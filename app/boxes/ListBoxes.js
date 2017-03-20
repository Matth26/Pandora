'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

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

export default ListBoxes
