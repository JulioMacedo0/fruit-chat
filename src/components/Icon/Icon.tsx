import React from 'react';

import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from 'components/Box/Box';
import {
  icons,
  LucideProps,
  ArrowLeft,
  X,
  Camera,
  EllipsisVertical,
} from 'lucide-react-native';

import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';

type IconKeys = keyof typeof icons;

// type IconNames = Extract<IconKeys, 'ArrowLeft' | 'Camera' | ''>;

type IconProps = {
  name: IconKeys;
  touchableOpacityBoxProps?: TouchableOpacityBoxProps;
} & LucideProps;

export function Icon({name, touchableOpacityBoxProps, ...props}: IconProps) {
  const {colors} = useAppTheme();

  const baseStyle: LucideProps = {
    color: colors.primary,
    size: 28,
  };
  const IconCustom = createIcon(name);
  return (
    <TouchableOpacityBox activeOpacity={0.7} {...touchableOpacityBoxProps}>
      <IconCustom {...baseStyle} {...props} />
    </TouchableOpacityBox>
  );
}

function createIcon(name: IconKeys) {
  switch (name) {
    case 'ArrowLeft':
      return ArrowLeft;
    case 'Camera':
      return Camera;
    case 'EllipsisVertical':
      return EllipsisVertical;
    default:
      return X;
  }
}
