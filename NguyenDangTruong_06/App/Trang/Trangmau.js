
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import React from "react";
import {useNavigation, useRotue} from '@react-navigation/native';
import phoneList from '../Data/data';
const Trangmau =() => {
  const navigation = useNavigation();
  const rotue = useRotue();
  const handleColor = () => {
      navigation.navigate({
        name:"Home",
        params : { color: rotue.params.color },
        merge : true,
      });
  };
    
    return ( 
        <View style = { styles.container } >
              <View>
              <Image style={styles.IMG} 
                    source={require("./../../../NguyenDangTruong_06/App/Anh/$ {(rotue.params.color")}>
              </Image>
              <Text style={styles.text1}>{rotue.params.name}</Text>
            <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 Hàng chính hãng   </Text>
              </View>
            
            <Text style={styles.text2}>Chọn một màu bên dưới: </Text>
            <Pressable style={styles.pb1}
                    onPress={()=> navigation.setParams(
                      ((rotue.params.color = phoneList[0].imageLocal)),
                      ((rotue.params.name = phoneList[0].name))
                    )
                    }
                    key="silver"
                    >
            </Pressable>
            <Pressable style={styles.pb2}
                    onPress={()=> navigation.setParams(
                      ((rotue.params.color = phoneList[1].imageLocal)),
                      ((rotue.params.name = phoneList[1].name))
                    )
                    }>
            </Pressable>
            <Pressable style={styles.pb3}
                    onPress={()=> navigation.setParams(
                      ((rotue.params.color = phoneList[2].imageLocal)),
                      ((rotue.params.name = phoneList[2].name))
                    )
                    }>
            </Pressable>
            <Pressable style={styles.pb4}
                    onPress={()=> navigation.setParams(
                      ((rotue.params.color = phoneList[3].imageLocal)),
                      ((rotue.params.name = phoneList[3].name))
                    )
                    }>
            </Pressable>
            <Pressable style={styles.pbXong}
            onPress={()=> navigation.goBack()}
                    ><Text style={styles.textpd1}>XONG</Text>
               </Pressable>
               
      
            </View>
    );
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#C4C4C4'
  
  },
  text1:{
    backgroundColor:'white',
    height:150
    
},
  text2:{
    fontSize:20,
    fontWeight:'bold'
  },
  pb1:{
    backgroundColor:'#C5F1FB',
    width:70,
    height:70,
    left:150,
    marginTop:10
  },
  pb2:{
    backgroundColor:'#F30D0D',
    width:70,
    height:70,
    left:150,
    marginTop:20
  },
  pb3:{
    backgroundColor:'black',
    width:70,
    height:70,
    left:150,
    marginTop:20
  },
  pb4:{
    backgroundColor:'#234896',
    width:70,
    height:70,
    left:150,
    marginTop:20
  },
  
  pbXong:{
    borderRadius: 10,
    backgroundColor:'#1952E294',
    borderWidth :1,
    width:350,
    height:60,
    left:20,
    top:30
  },
  textpd1:{
   top:10,
   fontSize:25,
   left:135,
   fontWeight:'bold',
   color:'#F9F2F2'
  }
   
});
export default Trangmau;