import React from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'; // Font Awesome
import InputSearch from '../components/InputSearch';


const SearchPage = () => {
    return (
        <div className='vh-100'>
           <Header />
           <main className='bg-image w-100 text-center justify-content-center align-items-center d-flex  bg-red default-page'>
               <section>
                 <h1>Search</h1>
                 <p>Search high-resolution images from Unsplash</p>
                <InputSearch />
               </section>
           </main>
        </div>
    )
}

export default SearchPage
