async function getApi(){
    const response = await fetch('http://localhost:3000/api/dotlib.json')
    return await response.json()
}

export default getApi