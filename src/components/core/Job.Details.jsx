import React, { useState, useEffect } from "react";

function Job() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: 0
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        );
        const result = await response.json();
        console.log(result.jdList); // Log the jdList
        setData(result.jdList); // Set the data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
 

  return (
    <div>
      <h1>Sample Data</h1>
      <ul>
        {data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.companyName}</li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
}

export default Job;
