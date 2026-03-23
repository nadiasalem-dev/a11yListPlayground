import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
export default function App() {
  const [items, setItems] = useState([]);
  return (

    <View style={styles.container}>
      <Text
        accessibilityRole='header'
        accessibilityLabel='accessibility list playground'>a11yListPlayground</Text>
      <Pressable style={styles.Pressable}
        onPress={onPress}
        accessibilityRole='button'
        accessibilityLabel='Add new item to the list'>
        <Text style={styles.press}>+</Text>
 
      </Pressable>
      { items.length === 0 &&
        <Text>No items yet. {'\n'}
          Press the Add button to create one.</Text>}
    </View>

  );
  function onPress() {
    console.log("pressed");
  }

}