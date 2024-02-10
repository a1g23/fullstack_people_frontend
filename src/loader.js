
const URL = process.env.REACT_APP_URL

export const peopleLoader = async () => {
    const response = await fetch(`${URL}/people`)
    const data = await response.json()
    return data
}


export const personLoader = async ({params}) => {
    const response = await fetch(`${URL}/people/${params.id}`)
    const data = await response.json()
    return data
}