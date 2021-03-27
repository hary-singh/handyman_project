import HomeTitle, { HomeBody } from '../styles/homeStyles';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
const Home = () => {
return(
  <>
  
  <HomeTitle> Welcome to Devpoint Handymen</HomeTitle>
  <HomeBody>At Devpoint Handymen, we are here to give you the best service possible.
    We garantee that we have the right worker for you.
  </HomeBody>
  <p style={{textAlign:"center"}}>Please browse through our Handymen to select which specialist can help you.</p>
  <div style={{textAlign:"center"}}>
    <Button size="small" basic color="purple">
      <Link to="/handymen" >
       Handymen
      </Link>
    </Button>
  </div>
  </>
)
}

export default Home;