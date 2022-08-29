import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
viewPerfil: {
  flexDirection: "row",
  flex: 1, 
  alignItems: "center",
  padding: 8,
},
fotoPerfil: {
  width: 50,
  height: 50,
  borderRadius: 25,
},
nomeUsuario: {
  paddingLeft: 5,
  fontSize: 22,
  color: "#000",
},
fotoPublicacao: {
  height: 350,
  alignItems: 'center'
},
areaBtn: {
  flexDirection: 'row',
  padding: 5,
  justifyContent: 'space-between'
},
iconeLike: {
  width: 25,
  height: 25,
  margin: 2,
},
btnSend: {
  paddingLeft: 5,
},
likes: {
  fontWeight: 'bold',
  marginLeft: 5, 
},
nomeUsuario: {
  fontSize: 18, 
  fontWeight: 'bold',
  paddingLeft: 5,
}, 
descImg: {
  paddingLeft: 5,
  paddingBottom: 15,
  fontSize: 15,
}
})


export default styles