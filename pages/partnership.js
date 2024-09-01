// pages/index.js

import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "v9QeyrkcuxpQDzslHCkOSc2B5OAUUhHfaEBVPAs8"; // Замени с твоя API ключ
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`; // Примерен URL, замени с подходящия за твоя случай

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError("Failed to fetch data");
        console.error("Error:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading)
    return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">
          NASA Astronomy Picture of the Day
        </h2>
        {console.log(data)}
        {data ? (
          <div>
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <img
              src={data.url}
              alt={data.title}
              className="w-full h-auto mb-4"
            />
            <p>{data.explanation}</p>
            <p>Date: {data.date}</p>
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
