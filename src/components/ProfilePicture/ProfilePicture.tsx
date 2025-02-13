import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

type ProfilePictureProps = {
  uri?: string;
};

const $imageStyle: StyleProp<ImageStyle> = {
  backgroundColor: '#3333',
  width: 45,
  height: 45,
  borderRadius: 999,
  marginRight: 4,
};

export const ProfilePicture = ({uri}: ProfilePictureProps) => {
  return <Image src={uri} style={$imageStyle} />;
};
