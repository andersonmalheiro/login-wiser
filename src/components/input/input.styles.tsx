import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 12px;
  color: #383e71;
`;

export const Input = styled.input`
  border: 1px solid #989fdb;
  border-radius: 8px;
  padding: 20px 14px 17px 14px;
  width: 100%;
  background: #fff;

  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #989fdb;
  }
`;
