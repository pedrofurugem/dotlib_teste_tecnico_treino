import getApi from '../../services/api'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getApi()
            setCategories(data.categories)
        }
        fetchData()
    })

    return(
        <>
          <section>
            <h1>ASSUNTO</h1>
            <ul>
                {
                    categories.map((cat, index) => {
                        return(
                            <li key={index}>
                                <DivCategories>
                                    <input type="checkbox"/>
                                    <P>{cat.title}</P>
                                </DivCategories>
                            </li>
                        )
                    })
                }
            </ul>
          </section>
        </>
    )
}

export default Categories

const DivCategories = styled.div`
   display: flex;
`

const P = styled.p`
  padding: 5px;
  text-transform: uppercase;
`