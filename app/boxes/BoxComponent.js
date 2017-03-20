'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import Style from '../view/Style'

import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

class BoxComponent extends Component {

  render() {
    return (
      <View style={Style.component}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Icon color='white' name='card-giftcard' size={62} />
            <Text style={styles.title}>{this.props.boxName}</Text>
          </View>
        </View>

      </View>
    )
  }
}

BoxComponent.propTypes = {
  boxName: React.PropTypes.string.isRequired
};

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

// Container component:
const mapStateToProps = (state) => ({
  boxName : state.getIn(['boxes', 'boxSelectedName']),
})

const mapDispatchToProps = (dispatch) => {
  /*return {
    setDemo: (demo) => {
      dispatch(catalogue.setDemo(demo))
    }
  }*/

return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxComponent)
