import React from "react";
import AppWrapper from "../components/AppWrapper/AppWrapper";
import PageTitle from "../components/PageTitle/PageTitle";

const Resume = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full py-12 px-5 md:px-12">
          <PageTitle title="Resume" />
          <div className="grid grid-cols-2 gap-x-5 gap-y-10">
            <div className="relative col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="flex items-center gap-3 text-2xl font-medium text-white mb-5">
                <i class="fa-solid fa-school text-purple-700"></i>
                <h3>Education</h3>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="relative">
                  <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                    <span className="block text-sm mb-3">2018 - 2021</span>
                    <h4 className="text-md">
                      <span className="text-lg text-white font-medium">
                        Bachelor in Information Technology
                      </span>{" "}
                      - University of Mumbai
                    </h4>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                    <span className="block text-sm mb-3">2017 - 2018</span>
                    <h4 className="text-md">
                      <span className="text-lg text-white font-medium">
                        Higher Secondary School Certificate
                      </span>{" "}
                      - SV Jr. College, Wada
                    </h4>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                    <span className="block text-sm mb-3">2016 - 2017</span>
                    <h4 className="text-md">
                      <span className="text-lg text-white font-medium">
                        Secondary School Certificate
                      </span>{" "}
                      - SVM School, Wada
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="flex items-center gap-3 text-2xl font-medium text-white mb-5">
                <i class="fa-solid fa-briefcase text-purple-700"></i>
                <h3>Experience</h3>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="relative">
                  <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                    <span className="block text-sm mb-3">2021 - Present</span>
                    <h4 className="text-md">
                      <span className="text-lg text-white font-medium">
                        Erience Solutions
                      </span>{" "}
                      - Working as a Frontend Developer
                    </h4>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                    <span className="block text-sm mb-3">2019 - 2021</span>
                    <h4 className="text-md">
                      <span className="text-lg text-white font-medium">
                        Freelancing
                      </span>{" "}
                      - Working as a Freelancer till Graduation.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full py-12 px-5 md:px-12 bg-heavy-dark">
          <div className="grid grid-cols-2 gap-x-5 gap-y-10">
            <div className="relative col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="flex items-center gap-3 text-2xl font-medium text-white mb-5">
                <h3>Working Skills</h3>
              </div>
              <div className="grid grid-cols-1 gap-8">
                <div className="relative">
                  <div className="relative w-full">
                    <div className="relative w-full flex items-center justify-between gap-3 mb-2">
                      <h6>Web Designing</h6>
                      <span>95%</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-white rounded-xl overflow-hidden">
                      <div className="absolute left-0 top-0 w-[95%] h-full bg-primary-gradient rounded-xl"></div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full">
                    <div className="relative w-full flex items-center justify-between gap-3 mb-2">
                      <h6>Web Developing</h6>
                      <span>80%</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-white rounded-xl overflow-hidden">
                      <div className="absolute left-0 top-0 w-[80%] h-full bg-primary-gradient rounded-xl"></div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full">
                    <div className="relative w-full flex items-center justify-between gap-3 mb-2">
                      <h6>Web Backend</h6>
                      <span>60%</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-white rounded-xl overflow-hidden">
                      <div className="absolute left-0 top-0 w-[60%] h-full bg-primary-gradient rounded-xl"></div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative w-full">
                    <div className="relative w-full flex items-center justify-between gap-3 mb-2">
                      <h6>Photoshop</h6>
                      <span>75%</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-white rounded-xl overflow-hidden">
                      <div className="absolute left-0 top-0 w-[75%] h-full bg-primary-gradient rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="flex items-center gap-3 text-2xl font-medium text-white mb-5">
                <h3>Knowledge</h3>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  ReactJS
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  Tailwind CSS
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  Redux
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  Redux Toolkit
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  NextJS
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  ElectronJS
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  CSS3
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  HTML5
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  JavaScript
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  JQuery
                </div>
                <div className="inline-block relative py-2.5 px-5 bg-dark text-sm font-medium rounded-md">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default Resume;
