import React from 'react';
import { StyledForm } from './app-form.styles';

interface AppFormProps {
  onSubmit: (...args: any[]) => void;
}

export const AppForm: React.FC<AppFormProps> = (props) => {
  const { onSubmit, children } = props;
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
