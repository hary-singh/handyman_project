import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
const Navbar = () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </Link>
      <Link to="/handymen">
        <Menu.Item>
          Handymen
        </Menu.Item>
      </Link>
    </Menu>
  )
}
export default Navbar;