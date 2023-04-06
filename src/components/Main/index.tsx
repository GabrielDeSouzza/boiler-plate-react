import * as S from './styles';

const Main = function ({
  title = 'React Avancado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}) {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" />
      <S.Title> {title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration src="img/thenanobel-programming.svg" />
    </S.Wrapper>
  );
};

export default Main;
