import AppWrapper from "./components/AppWrapper/AppWrapper";
import PageTitle from "./components/PageTitle/PageTitle";

const Home = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full py-12 px-5 pb-0 md:px-12 md:pb-0">
          <PageTitle title="About" />
          <p className="mb-4">
            I am Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies.
          </p>
        </div>
        <div className="relative w-full py-12 px-5 md:px-12">
          <h3 className="text-3xl text-white mb-6">What I Do!</h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                <div className="relative flex flex-col sm:flex-row gap-5">
                  <div className="relative text-4xl text-purple-700">
                    <i className="fa-solid fa-swatchbook"></i>
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Interaction Design
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, laborum consectetur! Eos culpa facere ea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                <div className="relative flex flex-col sm:flex-row gap-5">
                  <div className="relative text-4xl text-purple-700">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Web Development
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, laborum consectetur! Eos culpa facere ea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                <div className="relative flex flex-col sm:flex-row gap-5">
                  <div className="relative text-4xl text-purple-700">
                    <i className="fa-solid fa-laptop-code"></i>
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      App Development
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, laborum consectetur! Eos culpa facere ea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                <div className="relative flex flex-col sm:flex-row gap-5">
                  <div className="relative text-4xl text-purple-700">
                    <i className="fa-solid fa-camera-retro"></i>
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Photography
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, laborum consectetur! Eos culpa facere ea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default Home;
