import AppWrapper from "./components/AppWrapper/AppWrapper";
import PageTitle from "./components/PageTitle/PageTitle";

const Home = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full py-12 px-5 pb-0 md:px-12 md:pb-0">
          <PageTitle title="About" />
          <p className="mb-4">
            I am a passionate full-stack web developer and React Native
            enthusiast from Maharashtra, India, with a flair for turning complex
            ideas into seamless digital experiences. I specialize in building
            intuitive and scalable solutions that merge clean design with
            powerful functionality.
          </p>
          <p className="mb-4">
            My mission is to translate your vision into reality through the lens
            of creativity and precision—whether it’s a responsive website, a
            dynamic web app, or a cross-platform mobile application. With
            expertise in ReactJS, Next.js, React Native, Expo, as well as
            Node.js, Express, MongoDB, and MySQL, I bring end-to-end development
            skills to the table.
          </p>
          <p>
            From designing engaging user interfaces to engineering robust
            backends, I’m committed to delivering solutions that not only meet
            expectations but elevate the entire user journey. Every project I
            take on is a collaboration—crafted with innovation, performance, and
            long-term scalability in mind.
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
                      I design user-friendly interfaces that are both
                      interactive and responsive, meeting clients specific needs
                      for mobile and desktop platforms.
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
                      I specialize in developing custom websites tailored to
                      clients precise needs, ensuring every detail aligns with
                      their vision.
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
                      I develop custom mobile apps for both Android and iOS,
                      leveraging React Native to meet clients unique
                      specifications and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-1">
              <div className="relative w-full h-full p-4 border border-secondary-dark rounded-lg">
                <div className="relative flex flex-col sm:flex-row gap-5">
                  <div className="relative text-4xl text-purple-700">
                    <i className="fa-brands fa-node"></i>
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Backend Development
                    </h4>
                    <p>
                      Backend developer skilled in Node.js, Express, MongoDB,
                      and MySQL. Experienced in building scalable APIs,
                      optimizing databases.
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
