import LogoFooter from '../../images/logo_footer.png';
import styled from 'styled-components'

const Footer = () => {
    return(
        <>
        <DivFooter>
            <p>© 2016 Dot.Lib | Todos os direitos reservados | Todos los derechos reservados | All rights reserved</p>
            <img src={LogoFooter} alt="logo footer" />
        </DivFooter>
        </>
    )
}

export default Footer

const DivFooter = styled.footer`
   display: flex;
   align-items: center;
   justify-content: space-around;
   background-color: #DCDCDC;
`