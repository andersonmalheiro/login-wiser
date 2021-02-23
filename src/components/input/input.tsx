import React from 'react';
import { InputWrapper, Input, Label } from './input.styles';

interface AppInputProps {
  id: string;
  name: string;
  type: string;
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  label: string;
  placeholder?: string;
}

export const AppInput = (props: AppInputProps) => {
  const { id, label, type, ...rest } = props;
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type ? type : 'text'} {...rest} />
    </InputWrapper>
  );
};
