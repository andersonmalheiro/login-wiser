import React from 'react';
import { StyledButton } from './app-button.styles';

interface AppButtonProps extends Partial<HTMLButtonElement> {
  text: string;
  onClick?: (...args: any[]) => void;
}

export const AppButton = (props: AppButtonProps) => {
  const { text, disabled, onClick } = props;
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};
