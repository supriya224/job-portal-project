// Card.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterData, selectData, selectFilteredData } from "../../redux/jobSlice";
// import { filterData, selectData, selectFilteredData } from "../../redux/jobSlice";

const Card = () => {
  const data = useSelector(selectData);
  const filteredData = useSelector(selectFilteredData);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      item.companyName.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(filterData(filteredData));
  };

  const handleLocationFilter = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      item.location.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(filterData(filteredData));
  };

  return (
    <div>
      <ul>
        {filteredData.length > 0 ? (
          <ul>
            <input placeholder="Search by company name" onChange={handleFilter} />
            <input placeholder="Search by location" onChange={handleLocationFilter} />
            {filteredData.map((item, index) => (
              <div key={index}>
                <li>{item.jobRole}</li>
                <li>{item.companyName}</li>
                <li>{item.location}</li>
                <li>{item.maxExp}</li>
                <li>{item.jobDetailsFromCompany}</li>
              </div>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
};

export default Card;
