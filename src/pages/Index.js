import { Link, useLoaderData, Form } from "react-router-dom"

const ShowAll = () => {
    const people = useLoaderData();
    console.log(people)
    return (
        <div>
            <h3>Create a Person</h3>
            
            <Form action={`/create`} method='post'>
                <input type='input' name='name' placeholder="person's name" />
                <input type='input' name='title' placeholder="person's title" />
                <input type='input' name='image' placeholder="person's picture" />
                <input type='submit' value={`create person`}/>
            </Form>
            
            <h2>People</h2>
            {people.map(v => {
                return(
                    <div key={v._id} className="person">
                        <Link to={`/${v._id}`}>
                            <h4>{v.name}</h4>
                        </Link>
                        
                        <img src={v.image} alt={v.name}/>
                        <h4>{v.title}</h4>

                    </div>
                )
            })}
        </div>
    )
}

export default ShowAll