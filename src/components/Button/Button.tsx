import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ThemeColors} from '../../theme/theme';

type ButtonProps = {
  title: string;
  loading?: boolean;
  buttonType: ButtonType;
} & TouchableOpacityBoxProps;

export type ButtonType = 'fill' | 'outline' | 'danger';

export type ButtonUI = {
  container: TouchableOpacityBoxProps;
  contentColor: ThemeColors;
};

const buttonTypes: Record<ButtonType, ButtonUI> = {
  fill: {
    container: {
      backgroundColor: 'primary',
    },
    contentColor: 'primaryContrast',
  },
  outline: {
    container: {
      borderWidth: 1.5,
      borderColor: 'primary',
    },
    contentColor: 'primary',
  },
  danger: {
    container: {
      backgroundColor: 'error',
    },
    contentColor: 'grayWhite',
  },
};

export function Button({title, loading, buttonType, ...props}: ButtonProps) {
  const buttonTypeSelected = buttonTypes[buttonType];
  return (
    <TouchableOpacityBox
      disabled={loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonTypeSelected.container}
      {...props}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          color={buttonTypeSelected.contentColor}
          preset="paragraphMedium"
          bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
