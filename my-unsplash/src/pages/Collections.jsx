import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/esm/Container'

const Collections = () => {
    return (
        <>
           <Header />
           <Container>
              <main className='collections'>
                 <div>
                    <h1>Collections</h1>
                    <p>
                    Explore the world through collections of
                     beautiful photos free to use under the Unsplash License.
                    </p>
                 </div>
              </main>
           </Container>
        </>
    )
}

export default Collections
