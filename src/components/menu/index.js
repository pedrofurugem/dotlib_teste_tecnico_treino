import getApi from '../../services/api'
import { useState, useEffect } from 'react'
import LogoImg from '../../images/logo_dotlib.png'
import styled from 'styled-components'

const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getApi()
            setMenu(data.menu)
        }
        fetchData()
    })

    return(
        <>
            <Header>
              <Img src={LogoImg} alt="logo" />
                <Nav>
                    {
                        menu.map((men, index) => {
                            return(
                                <li key={index}>
                                    <A href=" " >{men.title}</A>
                                </li>
                            )
                        })
                    }
                </Nav>
                <Input type="search" />
            </Header>
        </>
    )
}

export default Menu

const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 350px
   `

const Img = styled.img`
    width: 150px;
`

const Nav = styled.ul`
  display: flex;
  gap: 10px;
`

const A = styled.a`
   padding: 2px;
`

const Input = styled.input`
   padding: 10px
`