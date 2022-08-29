import React from "react";
import {View, Image, TouchableOpacity} from 'react-native';

import styles from './style'

export default function Footer(){
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Image style={styles.componentesFooter} source={require('../img/casa.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.componentesFooter} source={require('../img/lupa.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.componentesFooter} source={require('../img/video.png')}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.componentesFooter} source={require('../img/sacola-de-compras.png')}/>
      </TouchableOpacity>
    </View>
  )
}