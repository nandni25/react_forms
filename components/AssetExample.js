import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';
export default class AssetExample extends Component {
constructor(props){
  super(props)
  this.state={
    posts:[]
  }
}
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      this.setState({
        posts:response.data
      })
      console.log(response.data)
    })
  }
  render() {
    const {posts}=this.state
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
        {        posts.map(post => <div key={post.id}>{posts.title}</div>)
}
        <Image style={styles.logo} source={require("../assets/expo.symbol.white.png")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
