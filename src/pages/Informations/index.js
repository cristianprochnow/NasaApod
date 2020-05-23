import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GoInfo, GoQuote, GoArrowLeft } from 'react-icons/go';

import {
  Container,
  SubContainer,
  SubContainerWithText,
  Picture,
  Video,
  Title,
  Text,
  BackButton,
} from './styles';

export default function Informations() {
  const [apodInformations, setApodInformations] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetchDataFromApi();

    function fetchDataFromApi() {
      try {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${(process.env.REACT_APP_NASA_KEY) ?? 'DEMO_KEY' }`)
          .then(apiResponse => apiResponse.json())
          .then(apiResponseData => setApodInformations(apiResponseData));
      } catch (error) {
        console.log(`> [webservice] Error on data fetch from APOD api...`)
      }
    }
  }, []);

  return (
    <Container>
      <BackButton
        href="/"
      >
        <GoArrowLeft /> Voltar
      </BackButton>

      <SubContainer>
        {(apodInformations) ? (
          (apodInformations.media_type === 'image') ?
          <Picture
            src="https://apod.nasa.gov/apod/image/2005/SouthCarina_SHO_final1024.jpg"
            alt={apodInformations.title}
            title={apodInformations.title}
          /> :
          <Video
            muted={true}
            controls={true}
            autoplay
          />
        ) : (
          <span></span>
        )
        }

        <SubContainerWithText>
          <Title> {apodInformations.title} </Title>

          <Text> <GoQuote /> {apodInformations.explanation} </Text>
        </SubContainerWithText>
      </SubContainer>
    </Container>
  );
}
