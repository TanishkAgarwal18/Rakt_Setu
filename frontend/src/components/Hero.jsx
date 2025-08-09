const Hero = ()=>{
    return (
        <div className="bg-[url('/hero1.jpg')] bg-no-repeat bg-cover bg-center h-[85vh] px-[200px]">  
            
         <div className="flex flex-col text-white w-[50%] pt-[10%]">
           <span className="text-[30px] mt-3">Save a life, make a difference!</span>
           <h1 className="text-[33px] mt-3">Let your blood flow for a cause be a donor, be a life-saver.
            </h1>

              <div className="flex items-center mt-[20px]">
                    <button className="bg-red-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">Donate Now</button>
                    <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">CALL : (+125) 262 728</button>
            </div> 
         </div>

         </div>
    )
}

export default Hero ;




