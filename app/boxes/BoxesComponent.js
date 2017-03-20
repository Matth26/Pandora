'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import * as SceneConst from '../scene/Const'
import { Actions } from 'react-native-router-flux'
import Style from '../view/Style'
import * as boxes from './BoxesActions'

import {
  Text,
  Button,
} from 'react-native-elements'

import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ListBoxes from './ListBoxes';
import ListDiscoveredBoxes from './ListDiscoveredBoxes';

const list2 = [
  {
      title: 'qld34dsdf4',
      icon: 'polymer',
      isOpenable: true,
  }
]

const list1 = [
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

class BoxesComponent extends Component {

  render() {
    return (
      <View style={Style.component}>
        <View style={styles.container}>

          <View style={styles.headerContainer}>
            <Icon color='white' name='card-giftcard' size={62} />
            <Text style={styles.title}>MY BOXES</Text>
          </View>
          <View style={styles.body}>
            <ListBoxes
              onPress={this.props.openBox}
              list={list1}></ListBoxes>
            <ListDiscoveredBoxes
              onPress={this.props.openBox}
              list={list2}></ListDiscoveredBoxes>
            <Button
              raised
              buttonStyle={styles.buttonStyle}
              backgroundColor={colors.primary1}
              onPress={() => list2.push()}
              icon={{name: 'cached'}}
              title='Search for proximity box' />
          </View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: colors.primary1
  },
  title: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 30,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonStyle: {
    marginBottom: 20,
    marginTop: 20,
  }
});

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
  return {
    openBox: (name) => {
      Actions[SceneConst.SELECTED_BOX_SCENE]();
      dispatch(boxes.clickOnBox(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxesComponent)
