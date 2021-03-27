import { Route, Switch } from 'react-router-dom';
import Handymen from './components/handymen/Handymen';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import { Container, Sticky } from 'semantic-ui-react';

const App = () => (
  <>
    <Sticky>
      <Navbar />
    </Sticky>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/handymen" component={Handymen} />
        <Route component= {NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;
