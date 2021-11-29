import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForms from '../components/AuthorForms';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = auth => {
        axios.put('http://localhost:8000/api/author/' + id, auth)
            .then(res => navigate("/")); 
    }
    return (
        <div>
            <Link to={"/"}>
                Home
            </Link> 
            <h1>Update Author</h1>
            {loaded && (
                <>
                <AuthorForms
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
                    initialText={author.text}

                />

                <DeleteButton 
                    authorId={author._id} 
                    successCallback={() => navigate("/")} 
                />
                </>
            )}
        </div>
    )
}

export default Update;