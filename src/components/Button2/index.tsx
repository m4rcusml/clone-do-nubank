import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  label: string;
  description: string;
  showBorderBottom?: boolean;
  buttonLeft?(): React.ReactNode;
  buttonRight?(): React.ReactNode;
}

export function Button2({
  label,
  description,
  buttonLeft,
  buttonRight,
  showBorderBottom = false
}: Props) {
  return (
    <View style={[
      styles.superContainer,
    ]}>
      <TouchableOpacity activeOpacity={0.6} style={[
        styles.container,
      ]}>
        {buttonLeft && buttonLeft()}

        <View style={{ flex: 1 }}>
          <Text style={styles.label}>
            {label}
          </Text>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>

        {buttonRight && buttonRight()}
      </TouchableOpacity>
      {showBorderBottom && <View style={styles.borderBottom} />}
    </View>
  )
};

const styles = StyleSheet.create({
  superContainer: {
    gap: 10,
  },
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 5,
    gap: 15,
  },
  label: {
    fontWeight: '500',
  },
  description: {
    color: '#777'
  },
  borderBottom: {
    height: 0.8,
    backgroundColor: '#ddd',
  }
});