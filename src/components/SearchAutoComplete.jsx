import axios from 'axios';
import { useState, useEffect } from "react";
const SearchAutoComplete = () => {
  const [data, setData] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  const [apiData,setApiData] = useState([])

  
    // Array of 10 objects
   
    // Iterate over the array of objects
    useEffect(()=>{
      const products = [
        {
          "id":21,
          title: 'Iphone',
          price: 20,
          description: 'new Iphone',
          image: 'https://i.pravatar.cc',
          category: 'electronic'
        },
        // Add more objects here as needed
        {
          "id":22,
          title: 'Product Title',
          price: 30,
          description: 'Product Description',
          image: 'Product Image URL',
          category: 'Product Category'
        },
        // Repeat for each additional object
      ];
    
      products.forEach(product => {
        axios.post('https://fakestoreapi.com/products', product)
          .then((data) => {
         
            // Handle successful response
            setApiData([data.data,...apiData]); // Assuming setApiData is updating an array state
          })
          .catch(error => {
            // Handle error
            console.log('Error:', error);
          });
      });
    },[])
  

  
  const url = `https://countriesnow.space/api/v0.1/countries/
  `;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
      
        setFilterdata(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (value) => {
    setInputvalue(value);

    const res = filterdata.filter((data) =>
      data.country.toLowerCase().includes(value.toLowerCase())
    );
    setData(res);
  };
  return (
    <>
      <center className="py-5 font-semibold text-2xl text-black/80 shadow-md opacity-90">
        Auto Complete in React
      </center>

      <div className="flex justify-center items-center flex-col mt-16">
        <div className="border rounded-sm  bg-white/80 md:w-1/3 w-[330px]">
          <input
            type="text"
            placeholder="Search country name..."
            value={inputvalue}
            className=" w-full px-2 py-3 focus:outline focus:outline-gray-500 rounded-sm shadow-sm"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        {inputvalue && (
          <div className="md:w-1/3 w-[330px] mt-2 rounded-md drop-shadow-lg bg-white/80 border">
            <ul className="max-h-[18.5rem] overflow-y-scroll px-2 py-1 shadow-md">
              {data.map((country) => {
                return (
                  <div key={country.id} onChange={handleChange}>
                    <li>{country.country}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchAutoComplete;
