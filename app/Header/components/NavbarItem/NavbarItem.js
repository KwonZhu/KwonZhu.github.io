import styled from 'styled-components';

const NavbarItem = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 16px;
    text-decoration: none;
    color: #49515d;
    font-size: 15px;
    opacity: ${({ active }) => active ? '1' : '0.6'};
    display: block;
    transition: opacity 0.3s ease-in-out;

    &::after {
        content: "";  
        width: ${({active}) => active ? '24px' : '0'};
        border-bottom: 3px solid #377e9a;
        margin: auto;
        margin-top: 4px;
        display: block;
        transition: width 0.3s ease-in-out;
    }
    &:hover {
        opacity: 1;
    }
    &:last-of-type {
        padding-right: 0;
    }
`;
export default NavbarItem;