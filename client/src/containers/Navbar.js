import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import logo from '../bird-images/logo192.png'

const Navbar = () => {
    return (
        <NavWrapper>
            <Link to='/'>
                <NavButton>
                    <Logo src={logo} />
                    <Title />
                </NavButton>
            </Link>
            <Link to='/list'>
                <NavButton>List</NavButton>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
`
const NavButton = styled.button`
    display: inline-block;
    font-family: inherit;
    font-size: 100%;
    background: white;
    padding: 0;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

const Logo = styled.img`
    height: 36px;
`

export default Navbar