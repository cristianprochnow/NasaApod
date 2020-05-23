import styled from 'styled-components';
import CornerSwitch from '../../assets/animations/CornerSwitch';

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100vw;
  height: 100%;
`;

const SubContainer = styled.div`
  display: flex;

  width: 80vw;
  height: 80vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SubContainerWithText = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 10px 40px;
`;

const Title = styled.h1`
  display: flex;

  padding: 0px 0px 30px 0px;

  font-size: 50px;
  font-family: 'Orbitron', sans-serif;
  line-height: 60px;
  -webkit-text-stroke-color: #3D348B;
  -webkit-text-stroke-width: 1px;

  color: #BEB7A4;

  @media (max-width: 900px) {
    padding: 40px 0px;
  }

  &::selection {
    color: #BEB7A4;
    background: #333333;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 700;

  padding: 10px 0px 40px 0px;

  color: rgba(0, 0, 0, 0.6);

  &::selection {
    color: #BEB7A4;
    background: #333333;
  }
`;

const Picture = styled.img`
  width: 50%;
  height: 100%;

  padding: 10px;
  object-fit: cover;

  animation-name: ${CornerSwitch};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in;

  border: 3px solid #3D348B;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 900px) {
    width: 100%;

    margin-top: 30px;
  }
`;

const Video = styled.video(Picture);

const BackButton = styled.a`
  position: absolute;

  top: 0;
  left: 0;

  padding: 20px;

  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  color: #BEB7A4;
`;

export {
  Container,
  SubContainer,
  SubContainerWithText,
  Picture,
  Video,
  Title,
  Text,
  BackButton,
};
