import AppWrapper from "./components/AppWrapper/AppWrapper";
import PageTitle from "./components/PageTitle/PageTitle";

const Home = () => {
  return (
    <AppWrapper>
      <div className="relative w-full">
        <div className="relative w-full py-12 px-5 pb-0 md:px-12 md:pb-0">
          <PageTitle title="About" />
          <p className="mb-4">
            I am a passionate frontend web developer and React Native enthusiast
            hailing from Maharashtra, India. With a knack for transforming
            intricate challenges into elegant solutions, I specialize in
            crafting intuitive designs that seamlessly blend simplicity with
            beauty.
          </p>
          <p>
            My mission is to convey your message and identity through the lens
            of creativity, ensuring that every project I undertake reflects your
            vision in the most compelling and innovative manner possible.
            Leveraging my expertise in ReactJS, Next.js, React Native, and Expo,
            I am dedicated to developing websites and mobile applications that
            not only meet but exceed expectations, delivering an unparalleled
            user experience every time.
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
                    <i className="fa-solid fa-camera-retro"></i>
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Photography
                    </h4>
                    <p>
                      I have a passion for capturing the beauty of fleeting
                      moments through my lens, using my own camera to
                      immortalize them in photographs.
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
