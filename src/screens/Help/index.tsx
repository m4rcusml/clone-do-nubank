import { StyleSheet, Text, View } from 'react-native';

export function Help() {
  return (
    <View style={styles.container}>
      <Text>Help me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
