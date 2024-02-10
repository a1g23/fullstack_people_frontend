import { redirect } from "react-router-dom"

const URL = process.env.REACT_APP_URL


// Action that updates people

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const updatedPerson = {
        name: formData.get('name'),
        image: formData.get('image'),
        title: formData.get('title')

    }
    console.log(updatedPerson)

    await fetch(`${URL}/people/${params.id}`, {
        method: 'put',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPerson)
    })

    return redirect('/') //go back to the landing page 
}



// Action that creates new people


export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newPerson = {
        name: formData.get('name'),
        image: formData.get('image'),
        title: formData.get('title')

    }
    console.log(newPerson)

    await fetch(`${URL}/people`, {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPerson)
    })

    return redirect('/') //go back to the landing page 
}




export const deleteAction = async ({params}) => {

    await fetch(`${URL}/people/${params.id}`, {
        method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        }
    })

    return redirect('/') //go back to the landing page 
}