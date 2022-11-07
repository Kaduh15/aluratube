import React from 'react';
import Logo from '../Logo';
import { StyledMenu } from './styles';

// import { Container } from './styles';

const Menu: React.FC = () => {
  return (
    <StyledMenu >
      <Logo />
    </StyledMenu>
  );
}

export default Menu;