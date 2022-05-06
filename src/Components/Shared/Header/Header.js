import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomActive/CustomActive';
import logo from '../../SocialLogin/Social-icon/perfume-logo.png'
import './Header.css'



const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/login');
  };
  return (
    <div>
      <Navbar className='rounded p-0 header' sticky='top' bg="" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-light' > <h2> My Perfume House<span><img src={logo} alt="" /></span></h2> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=''>


            <Nav className="ms-auto">
              <CustomLink className='text-light' to="/"  >Home</CustomLink>

              <CustomLink to="/blogs" className='ms-3 text-light'>Blogs</CustomLink>


              {user ?
                <>
                  <CustomLink to="/manage" className='ms-3 text-light'>Manage Items</CustomLink>
                  <CustomLink to="/add" className='ms-3 text-light'>Add Item</CustomLink>
                  <CustomLink to="/myitem" className='ms-3 text-light'>My Items</CustomLink>


                  <Button onClick={logout} className='btn btn-danger rounded-pill p-1 ms-2 text-decoration-none'>SignOut</Button>
                </>

                :
                <CustomLink to="/login" className='ms-3 text-light'>Login</CustomLink>

              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;