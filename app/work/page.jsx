import React from "react";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import PageTitle from "../components/PageTitle/PageTitle";

const Work = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full p-5 md:p-12">
          <PageTitle title="Portfolio" />
        </div>
      </div>
    </AppWrapper>
  );
};

export default Work;
