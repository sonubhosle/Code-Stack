import React from 'react'
import '../../Styles/Heading.css'
const Heading = ({heading,icon,desc}) => {
  return (
         <div className='heading_section'>
          <div className="sm_heading"> <div className="icon_heading">{icon}</div> {heading}</div>
          <p>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur.</p>
         </div>

  )
}

export default Heading