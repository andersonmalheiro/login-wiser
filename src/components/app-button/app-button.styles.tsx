import styled from 'styled-components';

export const StyledButton = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
    transition: all 0.3s ease-in-out;
  }
`;
