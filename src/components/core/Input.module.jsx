// Card.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterData, selectData, selectFilteredData } from "../../redux/jobSlice";
import Home from "../Home";

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

  const handleRoleFilter = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      item.jobRole.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(filterData(filteredData));
  };

  const handleMinExpFilter = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      item.minExp.find().includes(value.toLowerCase())
    );
    dispatch(filterData(filteredData));
  };
  const handleminJdSalaryFilter = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      item.minExp.find().includes(value.toLowerCase())
    );
    dispatch(filterData(filteredData));
  };
// minJdSalary
  return (
    <div>
      <ul>
        {filteredData.length > 0 ? (
          <div>
            <input placeholder="Search by company name" onChange={handleFilter} />
            <input placeholder="Search by location" onChange={handleLocationFilter} />  
            <input placeholder="Search by role" onChange={handleRoleFilter} />
            <input placeholder="Search by minExp" onChange={handleMinExpFilter} /> 
            <input placeholder="Search by minJbsalary" onChange={ handleminJdSalaryFilter} /> 
            <Home filteredData={filteredData}/>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
};

export default Card;
