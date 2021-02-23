import styled from 'styled-components';

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  max-height: 100vh;
  overflow: hidden;
`;

export const ImageBG = styled.div`
  height: 100vh;
  width: auto;
  position: relative;
  background-image: url('assets/woman.jpg');
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    background: linear-gradient(0, #130525 0%, rgba(105, 57, 153, 0) 100%);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export const StyledH1 = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  color: #383e71;
  margin: 0;
  margin-bottom: 16px;
  width: 60%;
`;

export const StyledH2 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989fdb;
  margin: 0;
  margin-bottom: 42px;
  width: 60%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
`;
