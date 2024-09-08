import React, { useState } from 'react'

const AddProduct = ()=>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const addProduct=async ()=>{


        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        console.warn(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;//if JSON.parse bna karo toh string format mein console mein dikhata hai
        console.warn(userId._id);
        let result =await fetch("http://localhost:5000/add-product",{//postman se copy paste kara
            method:'post',
            body: JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-Type": "application/json"
            }
        });
        result = await result.json();//ye na karne se kuch int stream format mein data rehta hai CHATGPT karo
        console.warn(result);
    }
    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input type='text' placeholder='Enter product Name' className='inputBox'
            value={name} onChange={(e)=>{setName(e.target.value)}} />
            {error && !name && <span className='invalid-input'>Enter valid Name</span>}


            <input type='text' placeholder='Enter product Price' className='inputBox'
            value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            {error && !price && <span className='invalid-input'>Enter valid Prices</span>}

            
            <input type='text' placeholder='Enter product Category' className='inputBox'
            value={category} onChange={(e)=>{setCategory(e.target.value)}} />
            {error && !category && <span className='invalid-input'>Enter valid Category</span>}


            <input type='text' placeholder='Enter product Company' className='inputBox'
            value={company} onChange={(e)=>{setCompany(e.target.value)}} />
            {error && !company && <span className='invalid-input'>Enter valid Company</span>}


            <button onClick={addProduct} className='appButton'> Add Product </button>
            
        </div>
    )
}

export default AddProduct; 