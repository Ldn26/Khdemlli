import React, { useState } from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



function Portfolio({images}) {
   const [isTargeted ,setIsTargeted] = useState(true)

  return (
    <div className="custom-image-gallery" >
      <ImageGallery
        items={images}
        //  showFullscreenButton={false}
        showBullets={true}
      />
    </div>
  );
}

export default Portfolio