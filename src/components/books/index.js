import { useState, useEffect } from 'react'
import getApi from '../../services/api'
import styled from 'styled-components'


async function test(){
    const response = await fetch('http://localhost:3000/api/dotlib.json')
    const r = await  response.json()
    console.log(r)
}
test()

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=> {
       async function fetchData(){
       const data = await getApi()
       setBooks(data.books)
    }
    fetchData()
})

    return(
        <>
            <Ul>
                {
                    books.map((book, index)=> {
                        return(
                            <li key={index}>
                                <CardBook>
                                    <Img src={book.image} alt="image book"/>
                                    <IdBook>
                                        <input type="checkbox" />
                                        <p>{book.id}.</p>
                                    </IdBook>
                                    <p>{book.title}</p>
                                    <p>{book.editor}</p>
                                    <p>{book.year}</p>
                                </CardBook>
                            </li>
                        )
                    })
                }
            </Ul>
        </>
    )
}

export default Books

const Ul = styled.ul`
   display flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   width: 55%;
   margin-top: 40px;
`

const Img = styled.img`
  width: 185px;
  height: 215px;
`

const CardBook = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;
   padding: 10px;
   width: 200px;
   margin: 2px
`

const IdBook = styled.div`
   display: flex;
`