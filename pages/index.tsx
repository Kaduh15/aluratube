import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';
import { CSSReset } from '../src/components/CSSReset'

import config from '../config.json'
import { Container } from './styles';

function HomePage() {
  return (
  <>
    <CSSReset />
    <Container>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists}/>
    </Container>
  </>
  )
}

export default HomePage;