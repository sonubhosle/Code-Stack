import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Locations.css'
import Card from './Card';

const Projects = () => {
  return (
    <div className='location_section'>
        <div className="sm_heading">Perfect for You</div>
         <div className="heading_container flex items-center">
            <div className="heading_main">
                <h1>Popular Tour Package</h1>
                <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur.</p>
            </div>
         </div>
         <div className="location_grid">
            {
                [1,1,1,1,1,1,1].map((item,indx) =><Card  />)
            }
         </div>
    </div>
  )
}

export default Projects