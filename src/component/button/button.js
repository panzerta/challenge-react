import React from 'react';

import { StyledButton } from './button.style';

export const Button = (props) => {
  const { children, $disable = false, ...etcProps } = props;
  return (
    <StyledButton $disable={$disable} {...etcProps}>
      {children}
    </StyledButton>
  )
}