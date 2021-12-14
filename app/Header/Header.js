import React from 'react';
import styled from 'styled-components';
import Flex from '../../components/Flex';
import NavbarItem from './components/NavbarItem';

const Nav = styled(Flex)`
  padding: 15px 0;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;
const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;
const Highlight = styled.span`
    color: #377e9a;
`;
const Right = styled.div`
`;

const Header = ({
  page,
  onPageChange,
}) => {
  const navbarItems = [
    { key: 'HOME', value: 'Home' },
    { key: 'RESUME', value: 'Resume' },
    { key: 'SERVICES', value: 'Services' },
    { key: 'CONTACT', value: 'Contact' },
  ];

  return (
    <Nav>
        <Left>
          <Logo>
            <Highlight>Kwon</Highlight>
            Zhu
          </Logo>
        </Left>
        <Right>
          <Flex>
            {navbarItems.map((navbarItem) =>(
              <NavbarItem
                key={navbarItem.key} //to solve Each child in a list should have a unique "key" prop
                active={page === navbarItem.key} //pass active page as props to NavbarItem.js
                hre={page === navbarItem.key}
                onClick={() => onPageChange(navbarItem.key)}
              >
                {navbarItem.value}
              </NavbarItem>
            ))}
          </Flex>
        </Right>
    </Nav>
  );
}
export default Header;