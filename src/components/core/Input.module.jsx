// Card.js
import React from "react";
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
      <div>
        {filteredData.length > 0 ? (
          <>
            <div className={classNames(styles.input_container)}>
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
                className={classNames(styles.input_items)}
              />
              <input
                placeholder="Search by Min Salary"
                onChange={handleminJdSalaryFilter}
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
