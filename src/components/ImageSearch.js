import React, { useState } from "react";

const ImageSearch= ({searchImage})=>{

    const [text,setText]=useState('');
    const handleSubmit= (e)=>{
        e.preventDefault();
        searchImage(text);
    }

    return(
        <div className="">
            {/**onSubmit spelling must be camelCase, then only it work. "onsubmit' is wrong*/}
            <form onSubmit={handleSubmit}>
                {/**for centering, width-50% and margin auto */}
                <div className="flex    w-[50%] mx-auto     w-96 p-2 shadow-2xl shadow-gray-500 m-8 ">
                    <input type="text" onChange={(e)=>setText(e.target.value)} className="w-full outline-none" placeholder="Search image item"/>{/**border-none  = not working */}
                    <button type='submit' className="ml-5 bg-green-500 px-3 py-1 rounded text-white">Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;

