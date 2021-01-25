import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setcategories} ) => {

 const [inputValue, SetInputValue] = useState('')
   
 //const handleInputChange = (e) => {
 //    SetInputValue(e.target.value);   
 //}

 const handleInputChange = ({ target: { value } }) => SetInputValue(value);

 const handleSubmit = (e) =>{
     e.preventDefault();

     if(inputValue.trim().length > 0){
        setcategories(cats => [inputValue,...cats]); 
        SetInputValue('');
        console.log('Submit Hecho')
     }
     

 }
 return (
        <form onSubmit={handleSubmit} >
            <h1>{inputValue} </h1>
           <input
                type="text"
                value = {inputValue}
                onChange={handleInputChange}
                />
        </form>
    )
}
AddCategory.prototype = {
    setcategories: PropTypes.func.isRequired
}
