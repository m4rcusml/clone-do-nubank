import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Highlight } from '../../components/Highlight';

const PLAYSTATION_BANNER = 'https://cdn1.epicgames.com/offer/24cc2629b0594bf29340f6acf9816af8/EGS_HorizonForbiddenWestCompleteEdition_GuerrillaGamesNixxesSoftware_S2_1200x1600-6eeadae1c58ebaaa74b109bd26d96645'
const NIKE_BANNER = 'https://i.pinimg.com/736x/e9/57/19/e95719b54a910cec5edc648dc8710be4.jpg'

export function Shop() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        <View style={styles.section}>
          <Text style={styles.title}>Destaques</Text>
          <ScrollView
            horizontal
            style={{ marginHorizontal: -20 }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 20 }}
          >
            <Highlight
              off={15}
              bannerColor='#222'
              mainImage={NIKE_BANNER}
              subtitle='Novidade no Nubank'
              title='Lançamento dos tops esportivos da Nike'
              logoImage='https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png'
            />
            <Highlight
              off={18}
              bannerColor='#01459e'
              mainImage={PLAYSTATION_BANNER}
              subtitle='Só nesse fim de semana'
              title='Toda a loja Playstation em desconto'
              logoImage='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png'
            />
          </ScrollView>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.title}>Tem de tudo</Text>
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