'use strict';

import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import * as SceneConst from '../scene/Const'
import { Actions } from 'react-native-router-flux'
import Style from '../view/Style'

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

class ConnectComponent extends Component {

  _onClickPlayButton() {
      Actions[SceneConst.MY_BOXES_SCENE]();
  }

  render() {
    return (
      <View style={Style.component}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Icon color={colors.primary} name='lock-open' size={62} />
            <Text style={styles.logo}>Pandora</Text>
          </View>
          <View style={styles.formulaire}>
            <View style={styles.formsContainer}>
              <FormLabel color='white' style={styles.formLabel}>EMAIL</FormLabel>
              <FormInput onChangeText={()=>null}/>
              <FormLabel>PASSWORD</FormLabel>
              <FormInput onChangeText={()=>null}/>
            </View>
            <Button
              iconRight
              icon={{name: 'login', type: 'material-community'}}
              onPress={this._onClickPlayButton.bind(this)}
              backgroundColor={colors.primary1}
              title='LOGIN' />
          </View>
        </View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 250,
    //backgroundColor: colors.primary
  },
  logo: {
    //color: '#ffffff',
    color: colors.primary,
    fontSize: 35,
  },
  container: {
    //backgroundColor: colors.primary,
    /*marginTop: -50,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#000000',*/
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formulaire:
  {
    //backgroundColor: colors.secondary2,
    width: 350
  },
  formLabel:
  {
  },
  formsContainer:
  {
    backgroundColor: 'white',
    marginLeft: -10,
    paddingBottom: 35
  }
});

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectComponent)
