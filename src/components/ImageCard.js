import React from 'react';
//https://pixabay.com/api/docs/
//https://pixabay.com/api/?key=40068167-4cb3f943586a035f61c50677a&q=yellow+flowers&image_type=photo&pretty=true
const ImageCard= ({image})=>{           {/*props.image */}
  
  const tags=image.tags.split(' ');

   return(
   <div>
      {/*md:h-auto to set the height of the ImageCard to auto (adjusting based on content) for medium-sized screens and above. For smaller screens, it will maintain the default height of h-96.*/}
        <div className="max-w-sm h-auto shadow-2xl p-2">{/*div can also be rounded full */}
       {/* <img src='assets/img1.jpg' className="rounded" alt="image1"/>{/*image must be rounded full */}
       {/*<img src='https://source.unsplash.com/random' className="rounded" alt="image1"/>{/*image must be rounded full */}
       
       {/*IMP TO MAKE IMAGE SIZE CORRECT */}
       <div className="h-60">
        <img
          src={image.webformatURL}
          className="rounded w-full h-full object-cover"
          alt="image1"
        />
      </div>
            {/*img must have '\' at end- also image folder must be in public-
            src must be commented like above but if copied relative path then image is not getting loaded*/}
            <div className="p-3">
                <h4 className="text-purple-500 font-bold text-2xl py-4">Photo by {image.user}</h4>
                <h3><span className="font-bold">Views: </span><span>{image.views}</span></h3>
                <h3><span className="font-bold">Downloads: </span><span>{image.downloads}</span></h3>
                <h3><span  className="font-bold">Likes: </span><span>{image.likes}</span></h3>
                
                {/*flexWrap to 'wrap'. This ensures that the tags will wrap to the next line when they exceed the available width, preventing them from overflowing the container. */}
                <ul className="flex flex-wrap gap-2 max-w-sm space-x-4 pt-3">
                    {tags.map(tag=>(
                         <li key={image.id} className="bg-slate-200 rounded-full px-2 text-gray-400">#{tag}</li>
                    ))}
                </ul>
            </div>
        </div>


    </div>
   );

}


export default ImageCard;
