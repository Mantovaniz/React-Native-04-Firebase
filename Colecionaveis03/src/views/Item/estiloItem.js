import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#92afd7',     
   },
   header: {   
      height: '50',
      backgroundColor: '#14417b',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between',
      padding: 5,
   },
   formularioContainer:{
       flex: 1,
       justifyContent: 'center',
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
   },
   campoContainer:{
       flexDirection:'row',
       padding:5,
       paddingLeft:50,
       paddingRight:50,
       margin:5,
       marginRight:50,
       alignItems:'center',
   },
   campoContainerDescricao:{
       flexDirection:'row',
       padding:5,
       paddingLeft:45,
       paddingRight:40,
       margin:5,
   },
   campo:{
       width:'100%',
       fontSize:18,
       color:'#FFFFFF',
       backgroundColor:'#4c669f',
       marginLeft: 15,
       padding:10,
       borderWidth: 1,
       borderColor:'#192f6a',
       borderRadius: 5,
   },
   campoDescricao: {
       width:'90%',
       height: 100,
       fontSize: 18,
       color:'#FFFFFF',
       backgroundColor:'#4c669f',
       marginLeft: 15,
       padding:10,
       borderWidth:1,
       borderColor:'#192f6a',
       borderRadius: 5,
       textAlignVertical:'top',
   },
   campoDescricaoScroll:{
       width:'100%',
   },
   botoesContainer: {
      flexDirection:'row',
      justifyContent:'flex-end',
      paddingRight:50,
   },
   botaoContainer: {
      alignItems:'center',
      padding:5,
   },
   botao: {
      width:50,
      height:50,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      padding:10,
   },
});

export default estiloItem;