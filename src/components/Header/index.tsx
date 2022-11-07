import React from 'react';
import config from '../../../config.json'

import { StyledHeader } from './styles';

const Header: React.FC = () => {
  return (
  <StyledHeader >
    <section className='user-info'>
      <img src={`https://github.com/${config.github}.png`} />
      <div>
        {config.name}
        {config.description}
      </div>
    </section>
  </StyledHeader>);
}

export default Header;