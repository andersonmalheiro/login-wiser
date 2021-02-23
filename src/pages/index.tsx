import { AppButton } from 'components/app-button/app-button';
import { AppForm } from 'components/form/app-form';
import { AppInput } from 'components/input/input';
import Head from 'next/head';
import {
  MainGrid,
  ImageBG,
  FormWrapper,
  StyledH1,
  StyledH2,
} from 'styles/index.styles';
import { FlexColumn, FlexRow } from 'styles/utils';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login - Wiser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainGrid>
        <ImageBG />
        <FormWrapper>
          <FlexColumn aligment="flex-start" justify="center">
            <StyledH1>Olá, seja bem vindo!</StyledH1>
            <StyledH2>Para acessar a plataforma, faça seu login.</StyledH2>

            <AppForm onSubmit={() => {}}>
              <AppInput
                id="email"
                name="email"
                type="email"
                label="E-MAIL"
                placeholder="user.name@mail.com"
              />
              <AppInput
                id="password"
                name="password"
                type="password"
                label="SENHA"
                placeholder="******"
              />

              <AppButton text={'Entrar'}></AppButton>
            </AppForm>

            <div>
              <p>Esqueceu seu login ou senha?</p>
              <p>Clique aqui</p>
            </div>
          </FlexColumn>
        </FormWrapper>
      </MainGrid>
    </div>
  );
}
