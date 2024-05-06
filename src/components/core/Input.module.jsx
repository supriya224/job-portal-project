// Card.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterData,
  selectData,
  selectFilteredData
} from "../../redux/jobSlice";
import Home from "../Home";
import classNames from "classnames";
import styles from "./Input.module.css";

const Card = () => {
  const [minExpFilter, setMinExpFilter] = useState("");
  const [minJdSalaryFilter, setMinJdSalaryFilter] = useState("");
  const data = useSelector(selectData); // Get the complete job data from Redux store
  const filteredData = useSelector(selectFilteredData);// Get the filtered job data from Redux store
  const dispatch = useDispatch(); // Get the dispatch function to dispatch actions to Redux store

    // Function to filter data by company name
  const handleFilter = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      item.companyName.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(filterData(filteredData));
  };

   // Function to filter data by location
  const handleLocationFilter = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      item.location.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(filterData(filteredData));
  };
 // Function to filter data by job role
  const handleRoleFilter = (event) => {
    const { value } = event.target;
    const filteredData = data.filter((item) =>
      item.jobRole.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(filterData(filteredData));
  };
 // Function to filter data by minimum experience
  const handleMinExpFilter = (event) => {
    const { value } = event.target;
    setMinExpFilter(value);
    const filteredData = data.filter((item) =>
      item.minExp >= parseInt(value)
    );
    dispatch(filterData(filteredData));
  };
  // Function to filter data by minimum JD salary
  const handleminJdSalaryFilter = (event) => {
    const { value } = event.target;
    setMinJdSalaryFilter(value);
    const filteredData = data.filter((item) =>
      item.minJdSalary >= parseInt(value)
    );
    dispatch(filterData(filteredData));
  };
  // minJdSalary
  return (
    <div>
      <div>
        {filteredData.length > 0 ? (
          <>
            <div className={classNames(styles.input_container)}>
              {/* seacrh by */}
              <input
                placeholder="Search by company name"
                onChange={handleFilter}
                className={classNames(styles.input_items)}
              />
              <input
                placeholder="Search by location"
                onChange={handleLocationFilter}
                className={classNames(styles.input_items)}
              />
              <input placeholder="Search by role" onChange={handleRoleFilter} className={classNames(styles.input_items)} />
              <input
                placeholder="Search by Min experience"
                onChange={handleMinExpFilter}
                value={minExpFilter}
                className={classNames(styles.input_items)}
              />
              <input
                placeholder="Search by Min Salary"
                onChange={handleminJdSalaryFilter}
                value={minJdSalaryFilter}
                className={classNames(styles.input_items)}
              />
            </div>
            <Home filteredData={filteredData} />
          </>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Card;
