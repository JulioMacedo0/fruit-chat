import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';

type TextInputProps = {
  label?: string;
  errorMsg?: string;
  boxProps?: BoxProps;
} & RNTextInputProps;

export function TextInput({
  label,
  errorMsg,
  boxProps,
  ...props
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const $textInputContainer: BoxProps = {
    borderWidth: errorMsg ? 2 : 1,
    borderColor: errorMsg ? 'error' : 'gray4',
    borderRadius: 's12',
    padding: 's8',
  };
  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...props}
          />
        </Box>

        {errorMsg ? (
          <Text preset="paragraphSmall" bold color="error" mt="s10">
            {errorMsg}
          </Text>
        ) : null}
      </Pressable>
    </Box>
  );
}
const $textInputStyle: TextStyle = {
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
