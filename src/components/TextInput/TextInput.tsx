import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

type TextInputProps = {} & RNTextInputProps;

export function TextInput({...props}: TextInputProps) {
  return <RNTextInput {...props} />;
}
