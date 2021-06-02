import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import logo from '../bird-images/logo192.png'

const Navbar = () => {
    return (
        <NavWrapper>
            <Link to='/'>
                <HomeButton>
                    <Logo src={logo} />
                    <Title />
                </HomeButton>
            </Link>
            <Link to='/list'>
                <ListButton>List</ListButton>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
    }
`
const HomeButton = styled.button`
    display: flex;
    align-items: center;
    font-family: inherit;
    font-size: 100%;
    background: white;
    padding: 12px;
    border: none;

    &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 3px black;
    }
`

const ListButton = styled.button`
    font-family: inherit;
    font-size: 1.5rem;
    background: white;
    border: none;
    height: 100%;
    padding: 12px;

    &:hover {
        box-shadow: 3px 3px 3px black;
    }
`

const Logo = styled.img`
    height: 36px;
`

export default Navbar