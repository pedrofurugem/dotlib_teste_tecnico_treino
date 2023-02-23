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
        <h1>ASSUNTO</h1>
        <ul>
            {
                categories.map((cat, index) => {
                    return(
                        <li key={index}>
                            <DivCategories>
                                <input type="checkbox"/>
                                <p>{cat.title}</p>
                            </DivCategories>
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default Categories

const DivCategories = styled.div`
   display: flex;
`