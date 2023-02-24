import Menu from '../menu/index'
import Categories from '../categories/index'
import Books from '../books/index'
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

        </>
    )
}

export default Screen 

const Header = styled.header`
   margin: 15px auto;
   box-shadow: 0px 1px gray;
`

const Section = styled.section`
   display: flex;
   justify-content: center;
`