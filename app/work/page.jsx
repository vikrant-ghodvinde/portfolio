import React from "react";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import PageTitle from "../components/PageTitle/PageTitle";
import ProjectBox from "../components/ProjectBox/ProjectBox";
import projects from "@/lib/json/projects.json";

const Work = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full p-5 md:p-12">
          <PageTitle title="Portfolio" />

          <div className="grid grid-cols-12 gap-y-8 lg:gap-8">
            {projects?.map((item, index) => (
              <div key={index.toString()} className="col-span-12 md:col-span-6">
                <ProjectBox {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default Work;
