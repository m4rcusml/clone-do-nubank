import { IconProps } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  icon(props?: IconProps): React.ReactNode;
  labelPosition?: 'inside-right' | 'outside-bottom';
}

export function Button({
  label,
  icon,
  labelPosition = 'inside-right',
}: Props) {
  return (
    <View style={[
      styles.superContainer,
      { alignItems: labelPosition === 'outside-bottom' ? 'center' : 'stretch' }
    ]}>
      <View style={[
        styles.container,
        { borderRadius: labelPosition === 'outside-bottom' ? 100 : 20 }
      ]}>
        {icon && icon()}
        {labelPosition === 'inside-right' && <Text style={styles.label}>{label}</Text>}
      </View>
      {labelPosition === 'outside-bottom' && <Text style={styles.label}>{label}</Text>}
    </View>
  )
};

const styles = StyleSheet.create({
  superContainer: {
    gap: 10,
  },
  container: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 20
  },
  label: {
    fontWeight: '500',
    fontSize: 18
  }
});