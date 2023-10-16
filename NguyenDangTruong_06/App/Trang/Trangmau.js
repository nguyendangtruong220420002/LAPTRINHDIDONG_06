import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import React, { useState } from "react";
import { StarsRating } from 'react-simple-star-rating'


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
   
});
export default Trang1;