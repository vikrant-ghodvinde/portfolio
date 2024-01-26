import React from "react";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import PageTitle from "../components/PageTitle/PageTitle";

const Contact = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full p-5 md:p-12">
          <PageTitle title="Contact" />
        </div>
      </div>
    </AppWrapper>
  );
};

export default Contact;
