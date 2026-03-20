import { Pressable, Text, View } from 'react-native';
import styles from './styles';
export default function App(){
  return(
 <View style={styles.container}>
      <Text>a11yListPlayground</Text>
      <Pressable style={styles.Pressable}
      onPress={onPress}
      accessibilityRole='button'
      accessibilityLabel='Add new item to the List'>
      <Text style={styles.press}>+</Text>
      </Pressable>
 
    </View>

  );
  function onPress() {
    console.log("pressed");
  }
  
}