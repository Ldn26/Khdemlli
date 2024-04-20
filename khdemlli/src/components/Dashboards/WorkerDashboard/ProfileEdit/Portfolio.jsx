import React, { useState } from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



function Portfolio({images}) {
   const [isTargeted ,setIsTargeted] = useState(true)

  return (
    <div className='mt-10'>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        renderItem={(item) => {
          return (
            <div className="image-gallery-image">
              <img
                src={item.original}
                alt=""
                className="object-cover h-96 w-full" // Tailwind CSS classes for height and width
            />
            </div>
          );
        }}
        showBullets={true}
      />
    </div>
  );
}

export default Portfolio