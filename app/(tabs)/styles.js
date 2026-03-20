import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  backgroundColor: 'white',
  borderWidth: 10,
  borderColor: 'yellow',
},
Pressable:{
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    top: 20
},
press: {
    //backgroundColor: 'blue',
    color: 'white',
    //width: 20,
    //height: 20,
    fontSize: 30,
    //textAlign: 'center'
    marginTop: -10
}
});

export default styles;