import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

const Detail = (props) => {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + props.id)
            .then(res => setAuthor({
                ...res.data
            }))
    }, []);
    return (
        <div>
            <Link to={"/"}>
                    Home
            </Link>
            <h2> Author Detail:</h2>
            <h3>Name: {author.name}</h3>
            <p>Text: {author.text}</p>

            <Link to={"/" + author._id + "/edit"}>Edit</Link>
            <DeleteButton 
                    AuthorId={author._id} 
                    successCallback={() => navigate("/")} 
            />
        </div>
    )
}

export default Detail;