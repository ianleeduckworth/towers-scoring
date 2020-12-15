import * as React from 'react';
import { 
    NativeSyntheticEvent, 
    StyleSheet, 
    TextInput, 
    TextInputFocusEventData, 
    View, 
    Text 
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
}: InputProps) => {
    return (
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
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: 360,
    },
    label: {
        color: defaults.black,
        fontWeight: 'bold',
        fontSize: defaults.normalTextSize,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: defaults.mediumGray,
        padding: 10,
        fontSize: defaults.normalTextSize,
        borderRadius: 5,
    },
    errorText: {
        color: defaults.red,
        fontWeight: 'bold',
        fontSize: defaults.normalTextSize,
        marginBottom: 10,
        marginTop: 6,
    }
})