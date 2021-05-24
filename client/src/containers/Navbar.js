import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import Title from '../components/Title'


const Navbar = () => {
    return (
        <NavWrapper>
            <Link to='/'>
                <NavButton>Home</NavButton>
            </Link>
            <Title />
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
`
const NavButton = styled.button`
    display: inline-block;
    margin: 12px;
`

export default Navbar