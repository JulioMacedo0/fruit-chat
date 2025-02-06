import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import {Theme, ThemeColors} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

type ActivityIndicatorProps = {
  color: ThemeColors;
} & RNActivityIndicatorProps;

export function ActivityIndicator({color, ...props}: ActivityIndicatorProps) {
  const {colors} = useTheme<Theme>();
  return <RNActivityIndicator color={colors[color]} {...props} />;
}
