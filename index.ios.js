/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

//greet 组件
class greet extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
    // 每1000毫秒对showText状态做一次取反操作
    setInterval( ()=> {
      this.setState(previousState => {
      return {showText: !previousState.showText};
    });
  }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class AwesomeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {text : ''};
  }

  render() {
    let pic = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return(
      // <ScrollView style={[styles.container,{padding:10}] }>
      <View style={[styles.container,{padding:10}] }>

      {/* <FlatList
        data={[
          {key:'A'},
          {key:'B'},
          {key:'C'},
          {key:'D'},
          {key:'E'},
        ]
        }
        renderItem = {({item}) => <Text style = {styles.item}>{item.key}</Text>}
      /> */}


      <SectionList
        
          sections={[
            {key:'D',title: 'D', data: ['Devin']},
            {key:'',title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor = {this._extraUniqueKey} 
        />

        <TextInput
          style={{height:40}}
          placeholder='tap here translate!'
          onChangeText = {(text) => this.setState({text})}
          />
          <Text style={{padding:10,fontSize:20}}>
          {this.state.text.split(' ').map((word) => word && '🎂').join(' ')}
       </Text>

        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <Image source={pic} style={{width: 193, height: 110}} />

            <Blink text = 'Yes BLINKING is so great' />     

            <Text style={[styles.red,styles.bigblue]}>
          Hello World!
        </Text>
      </View>
      // </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    flex: 1,
    paddingTop:22,
  },

  sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:10,
    fontWeight:'bold',
    backgroundColor:'rgba(247,247,247,1.0)',
  },

  item:{
    padding:10,
    fontSize:20,
    height:44,
  },

  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },

  red: {
    color: 'red',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
