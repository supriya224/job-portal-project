/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "./Input.module";
import { fetchData } from "../../redux/jobSlice";

function FetchDetails() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch(); 

  // handle infinite scroll here
  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log("Error ");
    }
  };

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
              limit: 40,
              offset: (page - 1) * 40
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
  }, [dispatch, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [handleInfiniteScroll]);

  return (
    <div>
      {/* card component imported here */}
      <Card />
    </div>
  );
}

export default FetchDetails;
