import Menu from './components/menu/index'
import Books from './components/books/index.js'
import Categories from './components/categories/index'
import Screen from './components/screen/index'
import Footer from './components/footer/index'
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <Screen />
      <Footer />
    </>
  );
  }

const GlobalStyle = createGlobalStyle`
  * 
  {
    margin: 0;
    padding: 0;
  }

  ul > li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`

export default App;