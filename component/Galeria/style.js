import { StyleSheet, Dimensions  } from 'react-native';

const IMAGE_SIZE = Dimensions.get('window').width / 3;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: '#18191A',
  },
  image: {
    width: IMAGE_SIZE - 4,
    height: IMAGE_SIZE - 4,
    margin: 2,
    borderRadius: 4,
  },
});

export default styles;