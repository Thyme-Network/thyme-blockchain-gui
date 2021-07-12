import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as ThymeIcon } from './images/thyme.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={ThymeIcon} viewBox="0 0 150 58" {...props} />;
}
