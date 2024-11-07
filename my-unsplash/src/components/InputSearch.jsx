import React from 'react'
import { FaSearch } from 'react-icons/fa'; // Font Awesome


const InputSearch = () => {
    return (
        <div className='search-input border rounded py-3 px-3 d-flex justify-content-between' style={{ width: '600px' }} >
             <input typeof='text' className='w-100' placeholder='Enter Your Keywords...' />
             <FaSearch style={{cursor : "pointer" , fontSize: '20px', color : "gray" , opacity : "0.7" ,  marginRight: '8px' }} />
        </div>
    )
}

export default InputSearch
