
// allows us to define paths in react router (the url our loader our actions)
// createRoutesFromElements - helper function to use JSX in elementss
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "./App"
import ShowAll from "./pages/Index"
import Show from "./pages/Show"
import { peopleLoader, personLoader } from "./loader"

import { updateAction, createAction, deleteAction } from "./actions"


const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<ShowAll />} loader={peopleLoader}/>
        <Route path=":id" element={<Show />} loader={personLoader}/>
        <Route path='create' action={createAction}/> {/*this is an action and doesnt render an element*/}
        <Route path='update/:id' action={updateAction} /> {/*this is an action and doesnt render an element*/}
        <Route path='delete/:id' action={deleteAction}/> {/*this is an action and doesnt render an element*/}
    </Route>)
)

export default router