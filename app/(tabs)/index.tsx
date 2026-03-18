import { Button, Text, View } from 'react-native';
import styles from './styles';
export default function App(){
  return(
 <View style={styles.container}>
      <Text>a11yListPlayground</Text>
      <Button
      title="add item"
      accessibilityLabel='Add a new item to the list'
      />
    </View>

  );
  
}