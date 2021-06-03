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
    border-bottom: 1px solid lightgray;

    a {
        text-decoration: none;
    }
`
const HomeButton = styled.button`
    display: flex;
    align-items: center;
    font-family: inherit;
    margin-left: 16px;
    font-size: 100%;
    background: white;
    padding: 12px;
    border: none;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        color: deeppink;
    }
`

const ListButton = styled.button`
    font-family: inherit;
    font-size: 1.5rem;
    margin-right: 16px;
    background: white;
    border: none;
    padding: 12px;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        color: deeppink;
    }
`

const Logo = styled.img`
    height: 36px;
`

export default Navbar