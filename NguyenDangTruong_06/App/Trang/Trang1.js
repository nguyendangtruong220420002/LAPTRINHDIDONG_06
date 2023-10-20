import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


import React,{ useState, useEffect }  from 'react';

const Trang1 = () => {
     const navigation = useNavigation();
     const handleChoose = () => {
    navigation.navigate("Trangmau", { color },{ name });
  };
 
    
    return ( 
        <View style = { styles.container } >
               <Image style={styles.IMGlon}
               
                    source={require("./../../../NguyenDangTruong_06/App/Anh/xanh.png")}>

               </Image>  
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
               <Pressable style={styles.pb}
                         onPress={() => handleChoose()}
                    ><Text style={styles.textpd}>4 MÀU-CHỌN MÀU</Text>
               
               </Pressable>
               <Pressable style={styles.pb1}
                    ><Text style={styles.textpd1}
                    onPress={() => alert('Xác nhận mua thành công!!!')}>CHỌN MUA</Text>
               </Pressable>
         
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
   },
   pb:{
     borderRadius: 10,
     borderWidth :1,
     width:350,
     height:38,
     left:20,
     top:10
   },
   textpd:{
    top:9,
    left:105,
    fontWeight:'bold'
   },
   pb1:{
     borderRadius: 10,
     backgroundColor:'red',
     borderWidth :1,
     width:350,
     height:50,
     left:20,
     top:50
   },
   textpd1:{
    top:9,
    fontSize:20,
    left:115,
    fontWeight:'bold',
    color:'#F9F2F2'
   }
});
export default Trang1;