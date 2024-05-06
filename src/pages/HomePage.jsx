import React from "react";
import FetchDetails from "../components/core/Fetch.Details";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";

export const HomePage = ({companyName,  }) => {
  return (
    <section>
      <Header/>
      <FetchDetails/>
      <Footer/>
    </section>
  );
};
