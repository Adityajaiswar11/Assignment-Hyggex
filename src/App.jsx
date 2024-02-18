import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [index, setIndex] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const curl = `https://countriesnow.space/api/v0.1/countries`;
        const res = await fetch(curl);
        const data = await res.json();
        setFilterdata(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (value) => {
    setIndex(value);

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
        <div className="border rounded-sm">
          <input
            type="text"
            placeholder="Search country name..."
            value={index}
            className=" w-[300px] px-2 py-3 focus:outline focus:outline-gray-500 rounded-sm font-medium"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        {index && (
          <div className="w-[300px] mt-2 rounded-md drop-shadow-lg bg-slate-100 border">
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
}

export default App;
