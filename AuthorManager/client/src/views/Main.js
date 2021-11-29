import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList';
import AuthorForms from '../components/AuthorForms';

const Main = () =>{

    const [ author, setAuthor ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res =>{
                setAuthor(res.data);
                setLoaded(true)
        });
    }, []);


    const createAuthor = (auth) => {
        axios.post("http://localhost:8000/api/author/new", auth)
            .then((res) => {
                setAuthor([...author, res.data]);
            });
      };

    return (
        <div>
            <h1>Author Manager</h1>
            <AuthorForms
            onSubmitProp={createAuthor}
            initialName=""
            initialText=""
          />
            <hr/>
            <h1>All Authors: </h1>
            {loaded && <AuthorList author={author} setAuthor={setAuthor}/>}

        </div>
    )
}

export default  Main;