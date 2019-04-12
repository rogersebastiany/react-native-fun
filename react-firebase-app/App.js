import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { f, auth, database } from "./config/config";

export default class App extends React.Component {
  constructor(props) {
    f.auth().onAuthStateChanged(function(user) {
      if (user) {
        //Logged in
        console.log("Logged in", user);
      } else {
        //Logged out
        console.log("Logged out");
      }
    });
    return super();
  }

  async logInWithFacebook(){
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '285645422333928',
      { permissions: ['email', 'public_profile'] }
    );

    if (type === 'success'){
      const credentials = f.auth().FacebookAuthProvider.credential(token);
      console.log('test');
      console.log(credentials);
      async => f.auth().signInWithCredential(credentials).catch((error) => {
        console.log('Error...', error);
      });
    }
  }

  registerUser = ( email, password ) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((user) => console.log(email, password, user))
    .catch((error) => console.log('error loggin in', error));
  }

  logOut = () => {
    console.log('test');
    auth.signOut()
    .then(() => {
      console.log('Logged out...');
    }).catch((error) => {
      console.log('Error logging out...', error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableHighlight
          onPress={() => this.logInWithFacebook()}
          style={{backgroundColor:'green'}}>
          <Text style={{color:'white'}}>Login with Facebook</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.logOut()}
          style={{backgroundColor:'green'}}>
          <Text style={{color:'white'}}>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
