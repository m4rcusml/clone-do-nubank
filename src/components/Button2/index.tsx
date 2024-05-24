import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  label: string;
  buttonRight?(): React.ReactNode;
  icon(): React.ReactNode;
}

export function Button2({
  label,
  icon,
  buttonRight,
}: Props) {
  return (
    <View style={[
      styles.superContainer,
    ]}>
      <TouchableOpacity activeOpacity={0.6} style={[
        styles.container,
      ]}>
        {icon && icon()}

        <Text style={[styles.label, { flex: 1 }]}>
          {label}
        </Text>

        {buttonRight && buttonRight()}
      </TouchableOpacity>
      <View style={styles.borderBottom} />
    </View>
  )
};

const styles = StyleSheet.create({
  superContainer: {
    gap: 10,
  },
  container: {
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    gap: 20,
  },
  label: {
    fontWeight: '500',
  },
  borderBottom: {
    height: 0.8,
    backgroundColor: '#ddd',
  }
});