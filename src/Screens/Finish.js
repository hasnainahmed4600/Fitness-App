
import React, { Component } from 'react';
import { Image, StyleSheet, Text,View, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import R from '../res/R';

class FinishScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#F8FEFD', justifyContent:'space-around'}} >        
        <View style={styles.middle}>            
          <Text style={{fontSize:14, fontWeight:'bold', color:'#55D3CB', paddingTop:hp('8.4%')}}>Время тренировки</Text>
          <Text style={{fontSize:28, fontWeight:'bold', color:'#55D3CB'}}>14 минут</Text>
          <Text style={{fontSize:14, fontWeight:'bold', color:'#55D3CB', paddingTop:hp('6.4%')}}>Потрачено сегодня</Text>
          <Text style={{fontSize:28, fontWeight:'bold', color:'#55D3CB', paddingBottom:hp('6.4%')}}>120 ккал</Text>
          <Image
            source={R.images.illustration}
            style={{flex:1}}
            resizeMode="cover"
          />          
        </View>
        <View style={styles.bottom}>          
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Confirm')}>
            <Image
              source={R.images.rocate}              
            />
          </TouchableOpacity>          
        </View>
      </View>         
    );
  }
}
const styles = StyleSheet.create({  
  middle: {
   alignItems:'center',
   justifyContent:'flex-start',
   flex:1,
  },
  bottom: {
   height: hp('18.4%'),   
   justifyContent:'center',
   alignItems:'center',  
  },
});
export default FinishScreen;