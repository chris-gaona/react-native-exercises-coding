import React from 'react';
import { Image } from 'react-native';

export default ({ source, resizeMode, style }) => (
  <Image
    source={source}
    resizeMode={resizeMode}
    style={style}
  />
)