import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <NavWrapper>
            <Link to='/'>
                <NavButton>Home</NavButton>
            </Link>
            <Link to='/list'>
                <NavButton>List</NavButton>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    border-bottom: 1px solid black;
`
const NavButton = styled.button`
    
`

export default Navbar