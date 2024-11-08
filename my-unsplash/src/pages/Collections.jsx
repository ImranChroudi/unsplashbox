import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/esm/Container'
import Title from '../components/Title'

const Collections = () => {
    return (
        <>
           <Header />
           <Container>
              <main className='collections'>
                 <section className='mt-4 d-flex justify-content-center'>
                   <div className='text-center'>
                     <Title title={"Collections"} />
                     <p style={{width : "400px"}}>
                       Explore the world through collections of
                       beautiful photos free to use under the Unsplash License.
                    </p>
                   </div>
                 </section>
              </main>
           </Container>
        </>
    )
}

export default Collections
