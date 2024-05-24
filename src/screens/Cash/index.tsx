import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { ChartBar, CubeTransparent, DeviceMobileCamera, HeartStraight, Vault } from 'phosphor-react-native';

export function Cash() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        <View style={styles.section}>
          <Text style={styles.title}>Acompanhe seu dinheiro</Text>
          <Button
            label='Caixinhas'
            labelPosition='inside-right'
            icon={(props) => <Vault {...props} />}
            buttonRight={() => <Text style={styles.label}>R$ 128,26</Text>}
          />
          <Button
            label='Investimentos'
            labelPosition='inside-right'
            icon={(props) => <ChartBar {...props} />}
            buttonRight={() => <Text style={styles.label}>R$ 264,54</Text>}
          />
          <Button
            label='Cripto'
            labelPosition='inside-right'
            icon={(props) => <CubeTransparent style={{ transform: [{ rotate: '45deg' }] }} {...props} />}
            buttonRight={() => <Text style={styles.label}>R$ 512,10</Text>}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Seguros</Text>
          <Button
            label='Seguro de vida'
            labelPosition='inside-right'
            icon={(props) => <HeartStraight {...props} />}
          />
          <Button
            label='Seguro de celular'
            labelPosition='inside-right'
            icon={(props) => <DeviceMobileCamera style={{ transform: [{ rotate: '180deg' }] }} {...props} />}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    gap: 20,
    paddingVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  label: {
    fontWeight: '500'
  }
});
