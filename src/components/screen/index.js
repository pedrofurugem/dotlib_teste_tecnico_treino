import Menu from '../menu/index'
import Categories from '../categories/index'
import Books from '../books/index'
import Footer from '../footer/index'
import styled from 'styled-components'

const Screen = () => {
    return(
        <>
         <Header>
            <Menu/>
         </Header>

         <Section>
            <Categories />
            <Books />
         </Section>

         <footer>
           <Footer />
         </footer>
        </>
    )
}

export default Screen 

const Header = styled.header`
   
`

const Section = styled.section`
   display: flex;
   
`