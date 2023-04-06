import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min-content(30rem, 100%);
`;