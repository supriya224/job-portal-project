import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredData, fetchData } from "../redux/jobSlice";

const Card = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector(selectFilteredData);
  const [expandedCards, setExpandedCards] = useState([]);
  const [page, setPage] = useState(1);

  const handleExpand = (index) => {
    setExpandedCards((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((item) => item !== index)
        : [...prevExpanded, index]
    );
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div>
      {/* Check if data exists, render UI, otherwise render null */}
      {filteredData.length > 0 ? (
        // main container
        <div className={classNames(styles.card_container)}>
          {/* get data from api */}
          {filteredData.map((item, index) => (
            <section
              key={index}
              className={classNames(styles.main_card_Section)}>
              <div className={classNames(styles.main_card_page)}>
                <div className={classNames(styles.main_card_items)}>
                  <div className={classNames(styles.card)}>
                    <div className={classNames(styles.card_items)}>
                      <div className={classNames(styles.card_items_details)}>
                        <div>
                          <h4 className={classNames(styles.card_items_role)}>
                            Job Role {item.jobRole}
                          </h4>
                          <p>Compnay Name: {item.companyName}</p>
                          <p>Location: {item.location}</p>
                          <p>
                            Estimate salary: {item.maxJdSalary}USD -
                            {item.minJdSalary} USD
                          </p>
                          <p className={classNames(styles.card_experience)}>
                            Experience required:
                            <span>
                              {item.maxExp} - {item.minExp} years
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className={classNames(styles.card_items_data)}>
                        <p>About company</p>
                        <p className={classNames(styles.card_discription)}>
                          {expandedCards.includes(index)
                            ? item.jobDetailsFromCompany
                            : `${item.jobDetailsFromCompany.slice(0, 400)}...`}
                        </p>
                        <button
                          onClick={() => handleExpand(index)}
                          className={classNames(styles.card_button_view)}>
                          {expandedCards.includes(index)
                            ? "View Less"
                            : "View More"}
                        </button>
                      </div>

                      <div className={classNames(styles.card_button_items)}>
                        <button className={classNames(styles.card_button_easy)}>
                          Easy Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Card;
