import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { CaretRight, Heart, IconProps, Smiley, SmileySad, Warning } from 'phosphor-react-native';
import { Button2 } from '../../components/Button2';
import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';

const allOptions = [
  {
    label: 'Novidades',
    description: 'Tudo sobre o Nubank e nossos produtos.'
  },
  {
    label: 'Conta',
    description: 'Conheça tudo sobre a sua conta digital.'
  },
  {
    label: 'Pagar fatura',
    description: 'Descubra como e onde pagar a sua fatura.'
  }
];

export function Help() {
  const [options, setOptions] = useState(allOptions);
  const [searchText, setSearchText] = useState('');

  function handleSearch() {
    setOptions(prev => {
      if (!searchText.trim()) {
        return allOptions;
      }

      return allOptions.filter(opt => opt.label.toLowerCase().includes(searchText.toLowerCase().trim()));
    });
  }

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ gap: 20, padding: 20, paddingBottom: 0 }}>
        <SearchBar onChangeText={setSearchText} />
        
        <Text style={{ fontWeight: '500', fontSize: 16 }}>Como você avalia o Me Ajuda?</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            label='Péssimo'
            showOnlyBorder
            tintColor='#810ad0'
            labelPosition='outside-bottom'
            icon={(props) => <Warning {...props} />}
          />
          <Button
            label='Ruim'
            showOnlyBorder
            tintColor='#810ad0'
            labelPosition='outside-bottom'
            icon={(props) => <SmileySad {...props} />}
          />
          <Button
            label='Bom'
            showOnlyBorder
            tintColor='#810ad0'
            labelPosition='outside-bottom'
            icon={(props) => <Smiley {...props} />}
          />
          <Button
            label='Perfeito'
            showOnlyBorder
            tintColor='#810ad0'
            labelPosition='outside-bottom'
            icon={(props) => <Heart {...props} />}
          />
        </View>

        <View style={styles.section}>
          {
            options.map((item, index) => (
              <Button2
                key={index}
                label={item.label}
                description={item.description}
                buttonRight={() => <CaretRight color='#999' size={18} />}
                showBorderBottom
              />
            ))
          }
        </View>

        <View style={styles.footer}>
          <View style={styles.hr} />
          <Text style={{ flex: 1, textAlign: 'center', color: '#810ad0', paddingVertical: 10 }}>E-MAIL</Text>
          <View style={styles.vr} />
          <Text style={{ flex: 1, textAlign: 'center', color: '#810ad0', paddingVertical: 10 }}>CHAT</Text>
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
    gap: 10,
    paddingVertical: 10
  },
  label: {
    fontWeight: '500'
  },
  footer: {
    flexDirection: 'row',
  },
  vr: {
    width: 0.5,
    backgroundColor: '#3334'
  },
  hr: {
    height: 0.5,
    backgroundColor: '#3337',
    position: 'absolute',
    top: 0,
    left: -20,
    right: -20
  }
});
