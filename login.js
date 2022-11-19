import React from 'react';
import { View, StyleSheet, Text, TextInput, Image, Button} from 'react-native';

const Login = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.mainpage}>
       <Image style={styles.logo}
            source={require('./assets/logo.png')}
          />
      <View style={styles.signin}>
        <Text style={styles.heading}>Sign In</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          keyboardType="numeric"
        />
        <Text style={styles.fpassword}> Forgot Password? </Text>

        <View style={styles.icon}>
          <Image style={styles.imagefb}
            source={require('./assets/facebook.png')}
          />
          <Image style={styles.imagego}
            source={require('./assets/google4.png')}
          />
        </View>
        <View style={styles.check}>
        <View style={styles.box}></View>
        <Text style={styles.check1}>I accept MindChamps</Text>
        <Text style={styles.check2}>Privacy policy and Terms</Text>
        </View>
     <View style={styles.button}>
      <Text style={styles.but}>Sign In</Text>
     </View>
     <View style={styles.sep}>
      
      <Text>------------------------------------- </Text>
      <Text>OR</Text>
      <Text> -------------------------------------</Text>
     </View>
     <View style={styles.button}>
      <Text style={styles.but}>Register New</Text>
     </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  mainpage: {
    height: "100%",
    //paddingHorizontal: 30,
    paddingTop: 100,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "#56565A"
  },
  signin: {
    marginTop: 85,
    paddingHorizontal: 15
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    padding: 10,
    borderRadius: 20
  },
  heading: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#56565A',
  },
  fpassword: {
    color: '#6174f9',
    textDecorationLine: 'underline',
    marginLeft: 250
  },
  imagego: {
    width: 45,
    height: 45,
    marginLeft: 50,
    marginTop: 12
  },
  imagefb: {
    width: 65,
    height: 65,
    marginLeft: 100
  },
  icon: {
    flexDirection: 'row',
    marginTop: 20
  },
  check:{
    flexDirection: 'row',
    marginLeft: 38,
    marginTop: 15
  },
  check1:{
    fontWeight: 'bold'
  },
  check2:{
    color: "#6174f9",
    marginLeft:5
  },
  button:{
   backgroundColor: "#EFEFF1",
   width: 200,
   borderRadius: 20,
   height: 40,
   marginLeft:90,
   marginTop: 30
  },
  but:{
    fontWeight: 'bold',
    marginLeft: 70,
    marginTop: 10,
    color: "#56565A"
  },
  sep:{
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20
  },
  box:{
    borderWidth: 2,
    width: 15,
    height: 15,
    marginRight: 5,
    marginTop: 3
  },
  logo:{
    width:150,
    height: 150,
    marginLeft: 120
  }



})

export default Login;
