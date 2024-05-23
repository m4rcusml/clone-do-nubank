import { CaretRight, CreditCard, GridFour } from 'phosphor-react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Olá, Gabriela
        </Text>
      </View>

      <View style={styles.cashContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Text style={[styles.title, { color: 'black' }]}>Conta</Text>
          <CaretRight color='#666' size={18} />
        </View>
        <Text style={[styles.title, { color: 'black' }]}>
          R$ 1.409,00
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
      >
        <Button
          label='Pix'
          labelPosition='outside-bottom'
          icon={() => <GridFour style={{ transform: [{ rotate: '45deg' }] }} />}
        />
      </ScrollView>

      <View>
        <Button
          label='Meus cartões'
          icon={() => <CreditCard />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    gap: 20
  },
  header: {
    backgroundColor: '#810ad0',
    marginHorizontal: -20,
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white'
  },
  text: {
    fontSize: 16
  },
  cashContainer: {
    paddingVertical: 20,
    gap: 10
  }
});
