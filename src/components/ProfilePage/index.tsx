import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
      <EditButton outlined>Editar Perfil</EditButton>
        <h1>Paulo Krieger</h1>
        <h2>@paulokrieger</h2>
        <p>
          Developer at <a href="https://google.com.br">@Krieger</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Brusque, Santa Catarina
          </li>
          <li>
            <CakeIcon />
            Nascido em 03 de novembro de 1989
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed></Feed>
    </Container>
  )
}

export default ProfilePage;