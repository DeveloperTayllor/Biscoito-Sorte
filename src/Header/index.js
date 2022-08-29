import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';   

import styles from './style'

import grade from '../img/sinal-de-mais.png';
import notificacao from '../img/like.png';
import messenger from '../img/messenger.png'

export default function Header(){
  return(
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../img/logo.png')}/>
      </TouchableOpacity>

      <View style={styles.componenteHeader}>
        <TouchableOpacity>
          <Image  style={styles.send}source={grade}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image  style={styles.send}source={notificacao}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image  style={styles.send}source={messenger}/>
        </TouchableOpacity>
      </View>
     
    </View>
  )
}