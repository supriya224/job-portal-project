import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "./Card.module";
import { fetchData } from "../../redux/jobSlice";

function JobDetails() {
  const dispatch = useDispatch(); //useDispatch hooks 
  // I have used useEffect for handling data
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              limit: 10,
              offset: 0
            })
          }
        );
        const result = await response.json();
        dispatch(fetchData(result.jdList));
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, [dispatch]);

  return (
    <div>
      {/* card component imported here */}
      <Card />
    </div>
  );
}

export default JobDetails;
