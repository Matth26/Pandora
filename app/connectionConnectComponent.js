'use strict';

import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import * as SceneConst from '../scene/Const'
import { Actions } from 'react-native-router-flux'
import Style from '../view/Style'

import {
  Text,
  Button,
  Grid,
  Col,
  Row
} from 'react-native-elements'

import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

class MenuComponent extends Component {

  _onClickPlayButton() {
      Actions[SceneConst.GAME_SCENE]();
  }

  render() {
    return (
      <View style={Style.component}>
        <View style={styles.buttonContainer}>
          <Button
          backgroundColor={socialColors.facebook}
          onPress={this._onClickPlayButton.bind(this)}
          title='PLAY'
          buttonStyle={styles.button} />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  buttonContainer: {
    flex:1,
    maxHeight: 100,
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
});

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
