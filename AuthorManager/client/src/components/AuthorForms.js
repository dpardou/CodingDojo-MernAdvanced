import React, { useState } from "react";


const AuthorForms = (props) => {
    const { initialName, initialText, onSubmitProp } = props;
    const [ name, setName ] = useState(initialName);
    const [ text, setText ] = useState(initialText);
    

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, text })
    }

    return(
        <>
        <form onSubmit={onSubmitHandler}>
            
            <p>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} />
            </p>

            <p>
                <label>Text</label>
                <input 
                    type="text" 
                    name="text"
                    value={text}
                    onChange={(e)=>setText(e.target.value)} />
            </p>

            
            <input type="submit" text="Create"/>

        </form>
        </>
    )

}

export default AuthorForms;