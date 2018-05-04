import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import R from '../res/R';
import { FlatList } from 'react-native-gesture-handler';




class CheckScreen extends Component {
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
          <FlatList
            style={{ backgroundColor: '#F8FEFD', paddingTop: hp('6.15%'), paddingLeft: 20 }}
            data={this.state.list}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
          />

          <View style={styles.bottom}>
            <View style={{ height: 2, backgroundColor: 'rgba(85, 211, 203, 0.2)' }}></View>            
            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', flex:1 }}>
              <View style={{ width: 32 }}></View>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.popToTop()} >
                <Image source={R.images.confirm} />
              </TouchableOpacity >
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Calender')} >
                <Image source={R.images.threedots} />
              </TouchableOpacity>
            </View>
          </View>
         
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
  
  bottom: {
    height:  hp('15%'),
    backgroundColor: '#F8FEFD',
    justifyContent:'flex-start'
  }
});

export default CheckScreen;