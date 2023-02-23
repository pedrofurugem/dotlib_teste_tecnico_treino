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
            <Section>
              <img src={LogoImg} alt="logo" />
                <Nav>
                    {
                        menu.map((men, index) => {
                            return(
                                <li key={index}>
                                    <a href="">{men.title}</a>
                                </li>
                            )
                        })
                    }
                </Nav>
                <input type="search" />
            </Section>
        </>
    )
}

export default Menu

const Section = styled.header`
   display: flex;
`

const Nav = styled.ul`
  display: flex;
  gap: 10px;
`