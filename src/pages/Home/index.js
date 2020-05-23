import React from 'react';
import { GoRocket } from 'react-icons/go'

import {
  Container,
  ContainerWithImage,
  InformationsLink,
} from './styles';

export default function Home() {
    return(
      <ContainerWithImage>
        <Container>
          <InformationsLink href="/informations">
            <GoRocket /> Embarcar nessa viagem...
          </InformationsLink>
        </Container>
      </ContainerWithImage>
    );
}
