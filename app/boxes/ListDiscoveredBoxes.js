'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import colors from 'HSColors'

import { List, ListItem } from 'react-native-elements'

const ListBoxes = (props) => {
  if (props.list.length == 0) {
    return null;
  }
  else {
    return (
      <View>
        <Text>Proximity boxes:</Text>
        <ScrollView contentContainerStyle={{paddingBottom: 50}}>
          <List>
            {
              props.list.map((item, i) => (
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
      </View>
    )
  }
}
ListBoxes.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default ListBoxes
