import React, { Component } from "react"
import { View, Button, StyleSheet } from 'react-native'
import { Input, Checkbox } from "react-native-elements" 
import * as SecureStore from 'expo-secure-store'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      remember: false
    }
  }

  static navigationOptions = {
    title: "Login"
  }

  handleLogin(){
    console.log(JSON.stringify(this.state))
    if(this.state.remember) {
      SecureStore.setItemAsync("userinfo", JSON.stringify(
        {username: this.state.username, password: this.state.password}
      ))
    }
  }

  render(){
    <View style={styles.container}>
      <Input
        placeholder="Username"
        leftIcon={{type: "font-awesome", name: 'user-o'}}
        onChangeText={username => this.setState({username})}
        value={this.state.username}
        containerStyle={styles.formInput}
        leftIconContainerStyle={styles.formIcon}
      />
      <Input
        placeholder="Username"
        leftIcon={{type: "font-awesome", name: 'key'}}
        onChangeText={password => this.setState({password})}
        value={this.state.password}
        containerStyle={styles.formInput}
        leftIconContainerStyle={styles.formIcon}
      />
      <Checkbox
        title="Remember Me"
        center
        checked={this.state.number}
        onPress={() => this.setState({remember: !this.state.remember})}
        container={styles.formCheckbox}
      />
      <View style={styles.formButton}>
        <Button
          onPress={() => this.handleLogin()}
          title="Login"
          color="#5637DD"
        />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 20
  },
  formIcon: {
    marginRight: 10
  },
  formInput: {
    padding: 10
  },
  formCheckbox: {
    margin: 10,
    backgroundColor: null
  },
  formButton: {
    margin: 40
  }
})

export default Login