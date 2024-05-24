import { Barcode, CaretRight, ChartLine, CreditCard, GridFour, HandCoins, Money } from 'phosphor-react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Eai, fi
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
          contentContainerStyle={{ gap: 18, paddingHorizontal: 20 }}
          style={{ flexGrow: 0, marginHorizontal: -20 }}
        >
          <Button
            label='Pix'
            labelPosition='outside-bottom'
            icon={(props) => <GridFour style={{ transform: [{ rotate: '45deg' }] }} {...props} />}
          />
          <Button
            label='Pagar'
            labelPosition='outside-bottom'
            icon={(props) => <Barcode {...props} />}
          />
          <Button
            label='Pegar empréstimo'
            labelPosition='outside-bottom'
            icon={(props) => <HandCoins {...props} />}
          />
          <Button
            label='Transferir'
            labelPosition='outside-bottom'
            icon={(props) => <Money {...props} />}
          />
          <Button
            label='Investir'
            labelPosition='outside-bottom'
            icon={(props) => <ChartLine {...props} />}
          />
        </ScrollView>

        <View>
          <Button
            label='Meus cartões'
            icon={() => <CreditCard />}
          />
        </View>

        <View style={styles.generico}>
          <Text style={[styles.text, { fontSize: 14 }]}>
            <Text style={{ color: '#810ad0', fontWeight: '500' }}>Novidade!</Text> Conheça a ferramenta de Controle de Gastos do Nubank.
          </Text>
        </View>

        <View style={styles.generico}>
          <Text style={[styles.text, { fontSize: 14 }]}>
            Finje que tem o resto da página aqui...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollArea: {
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
    fontWeight: '600',
    color: 'white'
  },
  text: {
    fontSize: 16
  },
  cashContainer: {
    paddingVertical: 20,
    gap: 10
  },
  generico: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 25
  }
});
