import styled from 'styled-components';

import Fade from '../../assets/animations/Fade';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.85);
`;

const ContainerWithImage = styled.main`
  width: 100vw;
  height: 100vh;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://unsplash.com/photos/5e9CmF-Ge9Y/download?force=true&w=1920');

  animation-name: ${Fade};
  animation-duration: 2s;
`;

const InformationsLink = styled.a`
  padding: .8em;

  font-size: 5vw;
  font-family: 'Orbitron', sans-serif;
  text-decoration: none;

  border-top: 5px solid #BEB7A4;
  border-right: 5px solid #BEB7A4;
  border-left: 20px solid #BEB7A4;
  border-bottom: 20px solid #BEB7A4;
  border-radius: 60px;

  color: #BEB7A4;
  transition: all ease-in 0.3s;

  &:hover {
    border-width: 5px;

    color: #E0E2DB;
    background-color: #3D348B;
  }
`;

export {
  Container,
  ContainerWithImage,
  InformationsLink,
};
