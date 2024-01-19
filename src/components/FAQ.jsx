import { IoIosArrowDown } from "react-icons/io"
const FAQ = () => {
  return (
    <div>
          <div className="mt-10">
           <h1 className="bg-gradient-to-r from-[#122586] to-[#070642] text-2xl font-extrabold inline text-transparent  bg-clip-text">FAQ</h1>
          <div className="pt-4 opacity-80">
          <div className="flex justify-between rounded-md items-center mt-4 py-1  border-2 border-blue-500 w-[60%]">
            <p className="p-2 text-md">Can eduction Flashcard be used for all age groups?</p>
            <IoIosArrowDown className="mr-2"/>
           </div>
           <div className="flex justify-between rounded-md items-center mt-4 py-1  border-2 border-blue-500 w-[60%]">
            <p className="p-2">Can eduction Flashcard be used for all age groups?</p>
            <IoIosArrowDown className="mr-2"/>
           </div>
           <div className="flex justify-between rounded-md items-center mt-4 py-1  border-2 border-blue-500 lg:w-[60%] md:w-[60%]">
            <p className="p-2">Can eduction Flashcard be used for all age groups?</p>
            <IoIosArrowDown className="mr-2"/>
           </div>
          </div>
        </div> 
    </div>
  )
}

export default FAQ