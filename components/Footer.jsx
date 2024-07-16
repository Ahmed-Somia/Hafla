import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-customBlue rounded-t-3xl">
      <div className="paddings inner-width flex sm:gap-8 gap-12 w-full sm:flex-row flex-col">
        <div className="flex-start gap-6 flex-col sm:w-[50%] w-full mt-6">
          <h2 className="text-white lg:text-5xl text-3xl font-semibold flex flex-col gap-1">
            <span>Subscribe for Fresh </span>
            <span>Content & Product Updates</span>
          </h2>
          <form action="" className="flex-start flex-col lg:gap-4 gap-6 w-full">
            <input
              type="email"
              className="lg:w-[70%] w-[85%] h-16 rounded-full bg-customBlue border border-customGray placeholder:urbanist placeholder:text-center placeholder:font-medium lg:placeholder:text-3xl text-2xl focus:outline-none focus:border-blue-500"
              placeholder="Enter Your Mail..."
            />
            <button className="bg-customGray hover:bg-[#a9adad] py-2 px-4 rounded-full flex-center w-auto h-[70px] gap-2">
              <Image
                src="/assets/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
                priority={true}
                className="w-auto h-auto"
              />
              <span className="font-urbanist text-3xl font-medium">
                Subscribe
              </span>
            </button>
          </form>
        </div>
        <div className="sm:flex-center flex lg:flex-row flex-col gap-8 sm:w-[50%] w-full mt-6">
          <div className="lg:w-[50%] w-full flex flex-col gap-4">
            <div className="flex flex-col h-[100px] gap-2">
              <span className="border_span"></span>
              <div className="flex-between">
                <div className="flex-start flex-col gap-2">
                  <span className="text-white text-4xl font-normal">
                    Linkedin
                  </span>
                  <span className="text-white text-xl font-normal">Hafla</span>
                </div>
                <span className="w-16 h-16 border border-white rounded-full flex-center">
                  <Image
                    src="/assets/Arrow1.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col h-[100px] gap-2">
              <span className="border_span"></span>
              <div className="flex-between">
                <div className="flex-start flex-col gap-2">
                  <span className="text-white text-4xl font-normal">
                    Instagram
                  </span>
                  <span className="text-white text-xl font-normal">Hafla</span>
                </div>
                <span className="w-16 h-16 border border-white rounded-full flex-center">
                  <Image
                    src="/assets/Arrow1.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full flex flex-col gap-4">
            <div className="flex flex-col h-[100px] gap-2">
              <span className="border_span"></span>
              <div className="flex-between">
                <div className="flex-start flex-col gap-2">
                  <span className="text-white text-4xl font-normal">
                    Facebook
                  </span>
                  <span className="text-white text-xl font-normal">Hafla</span>
                </div>
                <span className="w-16 h-16 border border-white rounded-full flex-center">
                  <Image
                    src="/assets/Arrow1.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col h-[100px] gap-2">
              <span className="border_span"></span>
              <div className="flex-between">
                <div className="flex-start flex-col gap-2">
                  <span className="text-white text-4xl font-normal">
                    Tiktok
                  </span>
                  <span className="text-white text-xl font-normal">Hafla</span>
                </div>
                <span className="w-16 h-16 border border-white rounded-full flex-center">
                  <Image
                    src="/assets/Arrow1.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    priority={true}
                    className="w-auto h-auto"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paddings inner-width flex-between">
        <span className="text-white sm:text-xl text-l font-extralight">
          Privacy & Policies
        </span>
        <span className="text-white sm:text-xl text-l font-extralight">
          All rights are reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
