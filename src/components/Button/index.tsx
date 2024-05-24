import { IconProps } from 'phosphor-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  label: string;
  showOnlyBorder?: boolean;
  buttonRight?(): React.ReactNode;
  icon(props: IconProps): React.ReactNode;
  labelPosition?: 'inside-right' | 'outside-bottom';
  tintColor?: string;
}

export function Button({
  label,
  icon,
  buttonRight,
  showOnlyBorder,
  tintColor = 'black',
  labelPosition = 'inside-right',
}: Props) {
  return (
    <View style={[
      styles.superContainer,
      labelPosition === 'outside-bottom' && { alignItems: 'center' },
    ]}>
      <TouchableOpacity activeOpacity={0.6} style={[
        styles.container,
        { borderRadius: labelPosition === 'outside-bottom' ? 100 : 20 },
        { justifyContent: labelPosition === 'outside-bottom' ? 'center' : 'flex-start' },
        showOnlyBorder && { backgroundColor: 'transparent' }
      ]}>
        {icon && icon({ size: 28, color: tintColor })}

        {labelPosition === 'inside-right' && (
          <Text style={[styles.label, { flex: 1, color: tintColor }]} numberOfLines={2}>
            {label}
          </Text>
        )}

        {labelPosition === 'inside-right' && (
          buttonRight && buttonRight()
        )}
      </TouchableOpacity>

      {labelPosition === 'outside-bottom' && (
        <Text style={[styles.label, { maxWidth: 90, textAlign: 'center', color: tintColor }]} numberOfLines={2}>
          {label}
        </Text>
      )}
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
  }
});