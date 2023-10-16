import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import React, { useState } from "react";
import { StarsRating } from 'react-simple-star-rating';

const Trang1 = () => {

    /*const[sao, setSao] = useState(0);
    <View>
         <StarsRating style={styles.rang}
          value={sao}
          onChange={value =>{setSao}}
          />
         </View>*/
    
    return ( 
        <View style = { styles.container } >
          <Image style={styles.IMGlon}
          source={require("./../../../NguyenDangTruong_06/App/Anh/xanh.png")}></Image>
          <Text style={ styles.text }>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={styles.DG}>
            <Text style={styles.text }>(Xem 828 đánh giá)</Text>
          </View>
          <View style={styles.gia }>
          <Text style={styles.textp}>1.790.000 đ</Text>
          <Text style={styles.textl}>1.790.000 đ</Text>
          </View>
            <View style={styles.gia2}>
                <Text style={styles.text2}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image style={styles.hoi}
                source={require("./../../../NguyenDangTruong_06/App/Anh/dauhoi.jpg")}
                ></Image>
            </View>
         
            </View>
    );
}
const styles = StyleSheet.create({
   IMGlon: {
        width: 301,
        height:361,
        resizeMode:'contain',
        marginTop:15,
        marginLeft:40
   }, 
   text:{
        fontSize:18,
        marginLeft:20,
        color:'black'
   },
   DG:{
    left:180,
    top:5
   },
   textl:{
    fontSize:15,
    textDecorationLine:'line-through',
    left:50,
   },
   textp:{
    fontSize:25,
    fontWeight:'bold',
    left:20
   },
   gia:{
    margin:10,
    flexDirection:'row',
    alignItems:'center'
   },
   hoi:{
    width:30,
    height:30,
    left:25
   },
   gia2:{
    flexDirection:'row',
    alignItems:'center'
   },
   text2:{
    fontSize:15,
    fontWeight:'bold',
    color:'red',
    left:20
   }
});
export default Trang1;