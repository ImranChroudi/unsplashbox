import React from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'; // Font Awesome


const SearchPage = () => {
    return (
        <div className='vh-100'>
           <Header />
           <main className='bg-image w-100 text-center justify-content-center align-items-center d-flex  bg-red default-page'>
               <section>
                 <h1>Search</h1>
                 <p>Search high-resolution images from Unsplash</p>
                 <div className='search-input border rounded py-3 px-2 d-flex justify-content-between' style={{ width: '600px' }} >
                   <input typeof='text' className='w-100' placeholder='Enter Your Keywords...' />
                   <FaSearch style={{cursor : "pointer" , fontSize: '20px', color : "gray" , opacity : "0.7" ,  marginRight: '8px' }} />
                 </div>
               </section>
           </main>
        </div>
    )
}

export default SearchPage
