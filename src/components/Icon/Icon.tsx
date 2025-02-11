import React from 'react';

import {icons, LucideProps, ArrowLeft, X} from 'lucide-react-native';

import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';

type IconKeys = keyof typeof icons;

type IconNames = Extract<IconKeys, 'ArrowLeft'>;

type IconProps = {
  name: IconNames;
} & LucideProps;

export function Icon({name, ...props}: IconProps) {
  const {colors} = useAppTheme();

  const baseStyle: LucideProps = {
    color: colors.primary,
    size: 28,
  };
  const IconCustom = createIcon(name);
  return <IconCustom {...baseStyle} {...props} />;
}

function createIcon(name: IconNames) {
  switch (name) {
    case 'ArrowLeft':
      return ArrowLeft;
    default:
      return X;
  }
}
