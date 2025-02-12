import React from 'react';
import {Pressable, PressableProps} from 'react-native';

import {icons, LucideProps, ArrowLeft, X} from 'lucide-react-native';

import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';

type IconKeys = keyof typeof icons;

type IconNames = Extract<IconKeys, 'ArrowLeft'>;

type IconProps = {
  name: IconNames;
  pressableProps?: PressableProps;
} & LucideProps;

export function Icon({name, pressableProps, ...props}: IconProps) {
  const {colors} = useAppTheme();

  const baseStyle: LucideProps = {
    color: colors.primary,
    size: 28,
  };
  const IconCustom = createIcon(name);
  return (
    <Pressable {...pressableProps}>
      <IconCustom {...baseStyle} {...props} />
    </Pressable>
  );
}

function createIcon(name: IconNames) {
  switch (name) {
    case 'ArrowLeft':
      return ArrowLeft;
    default:
      return X;
  }
}
