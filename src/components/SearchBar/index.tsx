import { MagnifyingGlass } from 'phosphor-react-native';
import { StyleSheet, TextInput, View } from 'react-native';

export function SearchBar({ onChangeText }: { onChangeText?(text: string): void }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Qual é a sua dúvida?'
        placeholderTextColor='#999'
        cursorColor='#810ad0'
        style={styles.input}
        onChangeText={onChangeText}
        textContentType='none'
        enterKeyHint='search'
        keyboardType='web-search'
      />
      <MagnifyingGlass color='#810ad0' />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 15,
    gap: 10,
    flexDirection: 'row',
  },
  input: {
    flex: 1
  }
});