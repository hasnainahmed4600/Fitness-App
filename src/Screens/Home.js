import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Icon, ListItem } from 'react-native-elements';
import R from '../res/R';
import { FlatList } from 'react-native-gesture-handler';
import { Dialog, } from "react-native-simple-dialogs";
//import AlertScreen from './alert';



class HomeScreen extends Component {
  state = {
    list: [
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 1
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 2
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 3
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 4
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 5
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 6
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 7
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 8
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 9
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 10
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 11
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 12
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 13
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 14
      },
    ]
  }
  static navigationOptions = {
    header: null,
  };
  openDialog = (show) => {
    this.setState({ showDialog: show });
  }

  constructor(props){
    super(props);
   
  }

  goPush(){
    
    this.setState({showDialog: false});
    this.props.navigation.navigate('Play');
  }


  renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => this.openDialog(true)}>
        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
          <View style={{ height: 40, width: 53, paddingLeft: 10, alignItems: 'center', justifyContent: 'center', }}>
            <Image source={item.avatar_url} />
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text style={{color: '#55D3CB'}}>{item.name}</Text>
            <Text style={{color: '#55D3CB'}}>{item.subtitle}</Text>
          </View>
          <View style={{ right: 20, position: 'absolute' }}>
            <Image source={R.images.activebutton} />
          </View>
        </View>
      </TouchableOpacity>
    );

  }

  render() {

    return (
      <ImageBackground source={R.images.background} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>

          <View style={styles.top} >
            <View style={{ height: hp('4%'), }}></View>
            <Text style={styles.title}>День 6</Text>
            <View style={{ height: hp('2%') }}></View>
            <View style={styles.time}>
              <TouchableOpacity activeOpacity={0.5} >
                <View style={styles.count}>
                  <Icon name='reorder' size={hp('3%')} color='#F8FEFD' />
                  <Text style={{ paddingLeft: 10, color: '#F8FEFD' }}>20 упражнений</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} >
                <View style={styles.timer}>
                  <Icon name='schedule' size={24} color='#F8FEFD' />
                  <Text style={{ paddingLeft: 10, color: '#F8FEFD' }}>14 минут</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            style={{ backgroundColor: '#F8FEFD', paddingTop: hp('3.6%'), paddingLeft: 20 }}
            data={this.state.list}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
          />

          <View style={styles.bottom}>
            <View style={{ height: 2, backgroundColor: 'rgba(85, 211, 203, 0.2)' }}></View>
            <View style={{ height: hp('3%') }}></View>
            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', }}>
              <View style={{ width: hp('4%') }}></View>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.openDialog(true)}>
                <Image source={R.images.play} />
              </TouchableOpacity >
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Calender')}>
                <Image source={R.images.threedots} />
              </TouchableOpacity>
            </View>
          </View>
          <Dialog
            
            animationType="fade"
            dialogStyle={{
              backgroundColor:'#F8FEFD',                  
            }}
            
            contentStyle={{
              paddingBottom:0,
              paddingLeft:0,
              paddingRight:0
            }}

            onTouchOutside={() => this.openDialog(false)}
            visible={this.state.showDialog}
            >
            
            <View style={{ alignItems: "center", justifyContent: "center", paddingLeft:20, paddingRight:20, paddingBottom:hp('3.6%') }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#55D3CB' }}>Растяжка мышц поясницы</Text>
              <Text style={{ fontSize: 18, }}>      </Text>
              <Text style={{ fontSize: 14, color: '#97BBBB' }}>Сядьте на пол, правую ногу переведите вперёд, левую — назад. </Text>
              <Text style={{ fontSize: 4, }}></Text>
              <Text style={{ fontSize: 14, color: '#97BBBB' }}>Согните ноги в коленях под углом 90 градусов или чуть больше. Правую руку положите на пол, левую поднимите над головой.</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', paddingBottom:hp('3.6%')}}>
            <Image
              source={
                R.images.image3
              }
              
            />
            </View>
            
            <View style={{ height: 2, backgroundColor: 'rgba(85, 211, 203, 0.2)', alignItems:'stretch', }}></View>
            <View style={{ height:hp('7.3%'), justifyContent:'center', alignItems:'center', }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.goPush()}>
                <Text style={{ fontSize: 14, color: '#55D3CB' }}>Закрыть</Text>
              </TouchableOpacity>
            </View>
          </Dialog>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',

  },
  top: {
    height: hp('19%'),
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    color: '#F8FEFD',
  },
  time: {
    flexDirection: 'row',
    height: hp('3%'),
    alignItems: 'stretch',
    justifyContent: 'space-between',
    //paddingBottom: 20
  },
  count: {
    flexDirection: 'row',
    width: wp('40%'),
    height: hp('3%'),
    paddingLeft: 32,
  },
  timer: {
    flexDirection: 'row',
    width: wp('38%'),
    height: hp('3%'),
    paddingRight: 32,
  },
  bottom: {
    height: hp('15%'),
    backgroundColor: '#F8FEFD',
  }
});

export default HomeScreen;