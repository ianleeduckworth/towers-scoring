import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  View,
  Text,
} from 'react-native';
import { defaults } from '../../styles/global';

interface InputProps {
    type?: 'text' | 'numeric',
    label: string;
    placeholder?: string;
    onChangeText?: ((text: string) => void) | undefined;
    value?: string;
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
    errorText?: string;
}

export const Input = ({
  type = 'text',
  label,
  placeholder,
  onChangeText,
  value,
  onBlur,
  errorText,
}: InputProps) => (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                keyboardType={type === 'numeric' ? 'number-pad' : 'default'}
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                onBlur={onBlur}
            />
            <Text style={styles.errorText}>{errorText}</Text>
        </View>
);

const styles = StyleSheet.create({
  container: {
    minWidth: 360,
  },
  errorText: {
    color: defaults.red,
    fontSize: defaults.normalTextSize,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
  },
  input: {
    borderColor: defaults.mediumGray,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: defaults.normalTextSize,
    padding: 10,
  },
  label: {
    color: defaults.black,
    fontSize: defaults.normalTextSize,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
