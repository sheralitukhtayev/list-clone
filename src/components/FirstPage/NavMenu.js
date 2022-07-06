import React, { useState } from 'react'
import style from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

function NavMenu() {
  return (
    <Nav className={style.Nav}>
        <NavTop>
            <p>+7(495)550-53-53 | info@citylift.ru</p>
        </NavTop>
    <NavBar>
        <Logo> 
            <img src="/images/logo.png" alt="" />
        </Logo>
        <NavItems>
            <ul>
                <li><a href="#">О КОМПАНИИ</a></li>
                <li><a href="#">ЛИФТЫ</a></li>
                <li><a href="#">ОБОРУДОВАНИЕ</a></li>
                <li><a href="#">УСЛУГИ</a></li>
                <li><a href="#">ТЕХПОДДЕРЖКА</a></li>
                <li><a href="#">КОНТАКТЫ</a></li>
                <li><AiOutlineSearch /></li>
            </ul>
        </NavItems>
    </NavBar>
</Nav> 
  )
}

export default NavMenu

const Nav = style.div `
    position: sticky;
    top: 0;

`

const NavTop = style.div `
    top: 0;
    left: 0;
    right: 0;
    display: relative;
    background-color: rgb(62, 181, 240);
    color: rgb(242, 236, 246);
    
    p {
        font-size: 0.60em;
        right: 0;
        text-align: right;
        padding: 0.1em 3em;
    }
`

const NavBar = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;


`

const Logo = style.div `
    padding-left: 2em;

    img {
        width: 13em;
    }
`

const NavItems = style.div `
    padding-right: 3em;


    ul {
        display: flex;

        li{
            margin: 0em 1em;
            cursor: pointer;
            
            a{
                font-size: 0.62em;
                color: #000;
                letter-spacing: 0.1em;
                transition: all 200ms;
            }
        }

        a:hover {
            color: rgb(62, 181, 240);
        }
    }
`