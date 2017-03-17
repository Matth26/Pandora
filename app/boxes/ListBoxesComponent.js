'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import CatalogueView from './CatalogueView'
//import ImmutableListView from '../view/ImmutableListView'
import * as SceneConst from '../scene/Const'
import { Actions } from 'react-native-router-flux'
import Style from '../view/Style'
import Box from './Box';
import * as catalogue from './CatalogueActions'

import colors from 'HSColors'

import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Box 1',
    icon: 'av-timer'
  },
  {
    title: 'Box 2',
    icon: 'flight-takeoff'
  },
  {
    title: 'Box 3',
    icon: 'av-timer'
  },
  {
    title: 'Box 4',
    icon: 'flight-takeoff'
  },

]

class ListBoxesComponent extends Component {

  render() {
    return (
      <View style={Style.component}>
        <ScrollView>
          <List>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon, color: colors.primary2}}
                />
              ))
            }
          </List>
        </ScrollView>
      </View>
    )
  }
}
//{() => this.props.setDemo('bnp')}/>
var styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    overflow: 'hidden'
  }
});

// Container component:
const mapStateToProps = (state) => ({ demo : state.get('demo'),
})

const mapDispatchToProps = (dispatch) => {
  return {
    setDemo: (demo) => {
      dispatch(catalogue.setDemo(demo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBoxesComponent)

/*export default connect(
  state => ({
    demo : state.get('demo'),
  }),
  {
    setDemo: catalogue.setDemo,
  })
(CatalogueComponent)*/
