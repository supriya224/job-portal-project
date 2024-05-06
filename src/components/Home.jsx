import React from "react";
import classNames from "classnames";
import styles from "../pages/page.module.css";

const Home = ({ filteredData }) => {
  return (
    <div className={classNames(styles.card_container)}>
      {filteredData.map((item, index) => (
        <section key={index} className={classNames(styles.main_card_Section)}>
          <div className={classNames(styles.main_card_page)}>
            {/*  div with three cards */}
            <div className={classNames(styles.main_card_items)}>
              {/* card div with details */}
              <div className={classNames(styles.card)}>
                <div className={classNames(styles.card_items)}>
                  {/* image with title */}
                  <div className={classNames(styles.card_items_details)}>
                    <div>
                      <h4>{item.jobRole}</h4>
                      <p>{item.companyName}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>

                  <p>Estimated salary: 18-15lpa</p>
                </div>
                <div className={classNames(styles.card_items_data)}>
                  <p>About company</p>
                  <p className="">About us</p>
                  <p>{item.jobDetailsFromCompany}</p>
                  <p>view job</p>
                  <div className={classNames(styles.card_ex)}>
                    minimum experience
                    <span>
                      {item.maxExp} - {item.minExp}{" "}
                    </span>
                  </div>

                  {/* two button  */}
                  <div className={classNames(styles.card_button_items)}>
                    <button className={classNames(styles.card_button1)}>
                      Easy Apply
                    </button>
                    <button className={classNames(styles.card_button2)}>
                      Unlock refrral asks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
