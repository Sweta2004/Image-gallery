/*

function App() {
  return (
  );
}
export default App;*/
/*https://blog.logrocket.com/type-html-faster-react-emmet-vs-code/ */

import { isCompositeComponentWithType } from "react-dom/test-utils";
//import './App.css';


//npm run start only in directory where package.json(cd my-project) exists TO START
//npm init tailwindcss command- without "-D"
//to make tailwind css intellisense work-https://stackoverflow.com/questions/63190041/tailwind-css-intellisense-does-not-provide-suggestions-in-a-reactjs-project#:~:text=I%20faced%20this%20issue%20even,allow%20suggestions%20inside%20a%20string.&text=and%20it%20should%20start%20working.


//PIXABAY API KEY- 40068167-4cb3f943586a035f61c50677a






















import React, {useState, useEffect } from 'react';
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";


function App() {
  
  
  
 /* 
  //for reloading 
  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 0); // 1000 milliseconds = 1 second

   //return () => clearInterval(intervalId); // Clear the interval when the component unmounts.
  }, []);*/






const[images,setImages]=useState([]);
const[isLoading, setisLoading]=useState(true);
const[term,setTerm]=useState("");//term is searching term(string)






useEffect(()=>{

  //https://pixabay.com/api/?key=40068167-4cb3f943586a035f61c50677a&q=yellow+flowers&image_type=photo&pretty=true
  // Use backticks (`) for template literals and `${}` for variables
  //fetch(`https://pixabay.com/api/?key=${process.env.REACT_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)---GIVING WRONG ANSWER
  fetch(`https://pixabay.com/api/?key=40068167-4cb3f943586a035f61c50677a&q=${term}&image_type=photo&pretty=true`)
  .then(response => response.json()) // Parse response body as JSON
  .then(data => {
    // Handle the data
    console.log(data);
    setImages(data.hits);//all hits of all elem of array
    setisLoading(false);
    //setTerm(data.)- nothing to do terms given in src link of image
  })
  .catch(err => {
    // Handle errors
    console.log(err);
  });

}  ,[term]);

  



//{/*https://kinsta.com/knowledgebase/typeerror-cannot-read-property-map-of-undefined/*/}


return (
  <div className="container mx-auto">

    {/**searchImage is a props.  it is function but without curly braces,as it is only one line*/}
    <ImageSearch searchImage={(text)=>setTerm(text)}/>


    <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      
      {/*{isLoading
        ? <div>Loading...</div>
        : images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}       OR           */}

        {/*if image exists*/}
      {images? images.map(image=>(
          <ImageCard key={image.id} image={image} />
      )): null}
    </div>
  </div>
);

}


export default App;