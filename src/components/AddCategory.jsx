import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange  = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit  = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        onNewCategory( inputValue );
        setinputValue('');
        
    }
    return (
    <>
        <form onSubmit={handleSubmit}>

            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ (e) => onInputChange(e) }
                />
        </form>
    </>
  )
}
