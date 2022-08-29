import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native'

import styles from './style'


export default function List(props){

  function carregaIcone(likeada){
    return likeada ? require('../img/likeada.png'):
    require('../img/like.png')
  }

  function mostraLikes (likers){
    if(likers == 0) {
      return;
    } else {
      return(
        <Text style={styles.likes}>{likers} {likers > 1 ? 'Curtidas' : 'curtida'}</Text>
      )
    }
  }

  return(
    <View>
      <View style={styles.viewPerfil}>
        <Image source={{uri: props.data.imgperfil}} style={styles.fotoPerfil}/>
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>

      <Image source={{uri: props.data.imgPublicacao}} style={styles.fotoPublicacao}/>

      <View style={styles.areaBtn}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image style={styles.iconeLike} source={carregaIcone(props.data.likeada)}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image style={styles.iconeLike} source={require('../img/comment.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image style={styles.iconeLike} source={require('../img/send.png')}/>
        </TouchableOpacity>
        </View>
       
        <View>
          <TouchableOpacity style={styles.btnSend}>
            <Image style={styles.iconeLike} source={require('../img/salvar-instagram.png')}/>
          </TouchableOpacity>
        </View>
      </View>

      {mostraLikes(props.data.likers)}
      <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      <Text style={styles.descImg}>{props.data.descricao}</Text>
    </View>
  )
}