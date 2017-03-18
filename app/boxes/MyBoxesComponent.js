'use strict';

import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import * as SceneConst from '../scene/Const'
import { Actions } from 'react-native-router-flux'
import Style from '../view/Style'
import * as boxes from './BoxActions'

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
import ListBoxes from './ListBoxes';

class MyBoxesComponent extends Component {

  _onClickPlayButton() {

  }

  render() {
    return (
      <View style={Style.component}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Icon color='white' name='card-giftcard' size={62} />
            <Text style={styles.title}>MY BOXES</Text>
          </View>
          <ListBoxes onPress={this.props.openBox}></ListBoxes>
        </View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: colors.primary1
  },
  container: {
    //backgroundColor: colors.primary,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title:
  {
    color: 'white',
    paddingLeft: 20,
    fontSize: 30,
  },
});

const mapStateToProps = (state) => ({ boxName : state.get('boxName'),
})

const mapDispatchToProps = (dispatch) => {
  return {
    openBox: (name) => {
      Actions[SceneConst.SELECTED_BOX_SCENE]();
      dispatch(boxes.clickOnBox(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBoxesComponent)
