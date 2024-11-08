import React, { useEffect } from 'react'
import Header from '../components/Header'
import InputSearch from '../components/InputSearch'
import { img1 , img2 , img3 , img4 , img5 , img6} from '../ressources';
import Container from 'react-bootstrap/esm/Container';

const SearchResultPage = () => {

    

     const images1 = [
        img6 , img5 , img4 , img3 , img2 , img1
     ];

     const images2 = [
        img1 , img2 , img3 , img4 , img5 , img6
     ];

     const images3 = [
        img6 , img5 , img4 , img3 , img2 , img1
     ];

     


    return (
         <div>
            <Header />
               <div  className='part-searchInput vw-100 d-flex justify-content-center align-items-end'>
                    <div className='bg-white rounded' style={{transform : "translateY(30px)"}}>
                      <InputSearch />
                    </div>
                </div>
            <Container>
             <main>
               
 
                <div className='photo-gallery'>
                
                    <div className="column">
                      {images1.map((image, index) => (
                        <div className="photo" key={index}>
                           <img src={image} alt={`Image ${index + 1}`} className="w-100  img-fixed-height  rounded" />
                        </div>
                     ))} 
                   </div>

                   <div className="column">
                      {images2.map((image, index) => (
                        <div className="photo" key={index}>
                           <img src={image} alt={`Image ${index + 1}`} className="w-100  img-fixed-height  rounded" />
                        </div>
                     ))} 
                   </div>

                   <div className="column">
                      {images3.map((image, index) => (
                        <div className="photo" key={index}>
                           <img src={image} alt={`Image ${index + 1}`} className="w-100  img-fixed-height  rounded" />
                        </div>
                     ))} 
                   </div>
                </div>
             </main>
            </Container>
         </div>
    )
}



export default SearchResultPage
