'use strict';

import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

let borderColor = '#a2001d'

const CatalogueView = ({characteristicsCount, isPrimary, uuid, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.background}>

        <View style={{backgroundColor: borderColor, height: 1}}/>

      </View>
    </TouchableOpacity>
  )
}

CatalogueView.propTypes = {
  characteristicsCount: PropTypes.number,
  isPrimary: PropTypes.bool.isRequired,
  uuid: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

var styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: borderColor,
    borderWidth: 2,
    overflow: 'hidden'
  }
});

export default CatalogueView
