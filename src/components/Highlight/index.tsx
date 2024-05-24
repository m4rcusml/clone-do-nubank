import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  bannerColor: string;
  mainImage?: string;
  logoImage?: string;
  subtitle: string;
  title: string;
  off: number;
}

export function Highlight({
  bannerColor,
  mainImage,
  logoImage,
  title,
  subtitle,
  off
}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.98} style={styles.container}>
      <Image
        source={{ uri: mainImage ?? 'https://github.com/m4rcusml.png' }}
        style={styles.image}
      />
      <View style={[styles.banner, { backgroundColor: bannerColor }]}>
        <View style={[styles.outOfBanner, { backgroundColor: bannerColor, width: 48, height: 48, left: 20 }]}>
          <Image
            source={{ uri: logoImage ?? 'https://github.com/m4rcusml.png' }}
            style={[styles.logo, { backgroundColor: bannerColor }]}
          />
        </View>

        <View style={[styles.offContainer]}>
          <Text style={{ color: '#810ad0', fontWeight: '500' }}>{off ?? 0}% OFF</Text>
        </View>

        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    height: 340,
    width: 265,
  },
  banner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    gap: 5,
    height: 112,
    padding: 15,
    justifyContent: 'flex-end'
  },
  image: {
    width: '100%',
    aspectRatio: 0.8
  },
  title: {
    fontWeight: '500',
    color: 'white',
    fontSize: 18,
  },
  subtitle: {
    textTransform: 'uppercase',
    color: '#999',
  },
  outOfBanner: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '-30%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    tintColor: 'white'
  },
  offContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '-20%',
    right: 20,
    padding: 10,
    paddingVertical: 8,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'white'
  }
});