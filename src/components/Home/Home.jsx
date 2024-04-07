import IMG_HOME from '../../assets/image/Group_Home.webp';

function Home() {
  return (
    <div className="p-4 md:ml-60">
      <div className="p-4">
        <section className="flex flex-col md:grid md:grid-cols-2 mb-12">
          <div className="flex flex-col justify-start md:justify-center xl:mx-10 2xl:mt-16 h-64 md:h-96 relative">
            <h3 className="mb-2 xl:text-xl leading-6 font-poppins font-semibold text-sky-500 dark:text-sky-400">
              Next level
            </h3>
            <h1 className="inline-block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-poppins font-semibold text-slate-900 tracking-tight dark:text-slate-200">
              Advanced Your Business Potential with{' '}
              <span className="text-nowrap bg-gradient-to-r from-cyan-200 to-indigo-500 bg-clip-text text-transparent">
                IT Solutions
              </span>
            </h1>
            <p className="mt-2 font-poppins font-normal text-sm lg:text-base xl:text-lg text-slate-700 dark:text-slate-400">
              We help companies attract more customers, stand out from the
              competition, and earn higher profits.
            </p>
            <button className="absolute font-bold text-base sm:text-xl -bottom-16 right-0 sm:-bottom-3 md:-bottom-14 md:-right-14 w-24 h-24 sm:w-28 sm:h-28 border-2 rounded-full text-left hover:border-sky-400 justify-center items-center flex flex-col bg-gradient-to-r from-cyan-200 to-indigo-500 bg-clip-text text-transparent">
              <div className="flex flex-col">
                Get<span>Started</span>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="h-60 sm:h-96">
              <img
                className="absolute top-14 sm:-top-14  lg:-top-10 xl:-top-20 left-8"
                src={IMG_HOME}
                alt=""
              />
            </div>
          </div>
        </section>
        <div className="h-32 sm:h-52 md:h-20"></div>
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-14 mb-4 items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl leading-relaxed dark:text-white font-poppins font-medium flex flex-col">
              You are doing business,
              <div className="lg:text-nowrap">
                we will do{' '}
                <span className="underline underline-offset-4">marketing</span>.
              </div>
            </h2>
            <p className="mt-6 font-poppins font-normal text-sm lg:text-base text-slate-700 dark:text-slate-400">
              By adopting an effective sales strategy, you can enhance your
              company`s expansion through the development of a sales funnel,
              lead generation, and resource optimization.
            </p>
            <button className="font-poppins font-bold text-lg mt-7 rounded-md bg-gradient-to-b from-cyan-200 to-sky-600 px-6 py-2 max-w-32 hover:bg-gradient-to-b hover:from-cyan-100 hover:to-sky-400">
              Info
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-center items-center my-2">
              <div className="rounded-full p-2 bg-sky-300/25">
                <svg
                  className="w-8 h-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 3v4a1 1 0 0 1-1 1H5m4 10v-2m3 2v-6m3 6v-3m4-11v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col sm:ml-4 px-3 py-2">
                <h3 className="dark:text-white text-base lg:text-lg">
                  Tailored Strategies
                </h3>
                <p className="text-slate-700 dark:text-slate-400 text-sm lg:text-base">
                  Every business is at a different stage in its growth journey,
                  and our marketing efforts reflect this diversity. From
                  startups looking to make their mark to established brands
                  aiming to maintain dominance, our bespoke marketing strategies
                  are designed to meet you where you are.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center my-2">
              <div className="rounded-full p-2 bg-sky-300/25">
                <svg
                  className="w-8 h-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col rounded-lg mt-3 sm:mt-0 sm:ml-4 px-3 py-2 bg-gradient-to-r from-slate-700 to-slate-800">
                <h3 className="dark:text-white text-base lg:text-lg">
                  Innovative Solutions
                </h3>
                <p className="text-slate-700 dark:text-slate-400 text-sm lg:text-base">
                  The digital landscape is constantly evolving, presenting new
                  challenges and opportunities. We stay ahead of the curve by
                  embracing innovation in all our marketing campaigns.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center my-2">
              <div className="rounded-full p-2 bg-sky-300/25">
                <svg
                  className="w-8 h-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m2.665 9H6.647A1.647 1.647 0 0 1 5 15.353v-1.706A1.647 1.647 0 0 1 6.647 12h1.018M16 12l1.443 4.773L19 12m-6.057-.152-.943-.02a1.34 1.34 0 0 0-1.359 1.22 1.32 1.32 0 0 0 1.172 1.421l.536.059a1.273 1.273 0 0 1 1.226 1.718c-.2.571-.636.754-1.337.754h-1.13"
                  />
                </svg>
              </div>
              <div className="flex flex-col sm:ml-4 px-3 py-2">
                <h3 className="dark:text-white text-base lg:text-lg">
                  Data-Driven
                </h3>
                <p className="text-slate-700 dark:text-slate-400 text-sm lg:text-base">
                  At the heart of our marketing philosophy is a commitment to
                  data-driven decision-making. By research market trends,
                  consumer behavior, and campaign performance, we fine-tune our
                  strategies to ensure the highest return on investment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
