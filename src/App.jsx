import { MaxWidthWrapper } from "@/components/wrapper";
import logo from "@/assets/logo.svg";
import heroIllustration from "@/assets/illustrations/Illustration.svg";
// prettier-ignore
import { amazon, hubspot, dribble, notion, zoom, netflix, arrow,  } from "@/assets/icons";
import Marquee from "react-fast-marquee";
import frame from "@/assets/illustrations/frame_19.svg";
import { useEffect, useState } from "react";
import { servicesData, processData } from "./data";
import AOS from "aos";

/* design by https://olgaaverchenko.design/ */

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="mt-2 sm:mt-4 md:mt-8 lg:mt-16"></div>

      <Navbar />

      <HeroSection data-aos="fade-right"/>

      <TrustBy />

      <ServicesSection />

      <RequestSection />

      <CaseStudiesSection />

      <ProcessSection />

      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="px-5 md:px-10 h-20 flex items-center">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          {/* brand */}
          <div className="flex gap-2">
            <img src={logo} alt="" />
            <h2 className="font-medium">Postivus</h2>
          </div>
          {/* hyperlinks */}
          <div className="hidden lg:flex gap-8 items-center">
            <ul className="flex gap-8">
              <li>About Us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <button className="rounded-[14px] h-[58px] px-5 border border-dark">
              Request a quote
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

function HeroSection() {
  return (
    <main data-aos="fade-right" className="px-5 md:px-10 flex mt-5 md:mt-10 lg:mt-20 mb-10">
      <MaxWidthWrapper>
        <div className="flex justify-between gap-14">
          {/* intro */}
          <div className="w-full lg:max-w-[531px] flex flex-col gap-8 ">
            <h1 className="leading-tight font-medium">
              Navigating the digital landscape for success
            </h1>
            <div className="flex justify-center md:justify-start">
              <img
                src={heroIllustration}
                alt=""
                className="lg:hidden max-w-[350px] w-full"
              />
            </div>
            <p className="max-w-[600px]">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button> Book a consultation</Button>
          </div>
          {/* illustration */}
          <div className="hidden lg:flex w-full">
            <img src={heroIllustration} alt="" className="" />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="w-full md:w-max h-[68px] px-10 bg-dark text-light rounded-[14px] text-xl">
      {children}
    </button>
  );
}

function TrustBy() {
  return (
    <section className="my-16">
      {/* <MaxWidthWrapper> */}
      <div>
        <Marquee autoFill pauseOnHover>
          <img src={amazon} alt="" className=" marquee-img" />
          <img src={dribble} alt="" className="marquee-img" />
          <img src={hubspot} alt="" className="marquee-img" />
          <img src={notion} alt="" className=" marquee-img" />
          <img src={netflix} alt="" className=" marquee-img" />
          <img src={zoom} alt="" className=" marquee-img" />
        </Marquee>
        <div className="md:hidden my-10">
          <Marquee autoFill pauseOnHover delay={3}>
            <img src={netflix} alt="" className=" marquee-img" />
            <img src={zoom} alt="" className=" marquee-img" />
            <img src={hubspot} alt="" className="marquee-img" />
            <img src={amazon} alt="" className=" marquee-img" />
            <img src={dribble} alt="" className="marquee-img" />
            <img src={notion} alt="" className=" marquee-img" />
          </Marquee>
        </div>
      </div>
      {/* </MaxWidthWrapper> */}
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="px-5 md:px-10 my-20">
      <MaxWidthWrapper>
        <div>
          <header className="flex gap-6 md:gap-10 flex-col md:flex-row font-medium items-center justify-center md:justify-start">
            <h2 className="bg-main w-max font-medium px-2 rounded-xl">
              Services
            </h2>
            <p className=" text-dark lg:max-w-[580px] leading-tight text-center md:text-left">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </header>

          {/*  */}
          <div className="grid md:grid-cols-2 mt-20 gap-10">
            {/* each */}
            {servicesData.map((service, idx) => (
              <ServicesCard key={idx} idx={idx} data={service} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function ServicesCard({ idx, data }) {
  var colors = ["bg-light", "bg-main", "bg-dark"];
  return (
    <>
      {/* <div></div> */}
      <div
        className={`h-[310px] w-full rounded-[45px] ${
          colors[idx % colors.length]
        } border border-dark my-shadow p-10 flex flex-col md:flex-row justify-between gap-5 overflow-hidden`}
      >
        {/* title */}
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* prettier-ignore */}
            <h3 className={`w-max rounded-md px-2 font-medium ${ idx === 0 || idx === 3 || idx === 5 ? "bg-main" : "bg-white" }`} > {data.first} </h3>
            {/* prettier-ignore */}
            <h3 className={`w-max rounded-md px-2 font-medium ${ idx === 0 || idx === 3 || idx === 5 ? "bg-main" : "bg-white" }`} > {data.second} </h3>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`${
                idx === 2 || idx === 5
                  ? "bg-light text-dark"
                  : "bg-dark text-light"
              } h-10 w-10 rounded-full  flex justify-center items-center`}
            >
              {idx === 2 || idx === 5 ? (
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                    fill="#000"
                  />
                </svg>
              ) : (
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z"
                    fill="#B9FF66"
                  />
                </svg>
              )}
            </div>
            <h4
              className={`font-medium hidden lg:flex ${
                idx === 2 || idx === 5 ? "text-light" : ""
              }`}
            >
              Learn more
            </h4>
          </div>
        </div>

        {/* Image */}
        <img
          src={data?.image}
          alt=""
          className="max-w-[180px] w-full h-auto self-end md:self-auto hidden"
        />
      </div>
    </>
  );
}

function RequestSection() {
  return (
    <section className="px-5 md:px-10 my-40">
      <MaxWidthWrapper>
        <div className="bg-light min-h-[347px] h-full md:h-[347px] rounded-[45px] p-10 md:p-12 flex gap-10 lg:justify-between items-center">
          {/* ---------- */}
          <div className="flex flex-col gap-6 w-full">
            <h3 className="font-medium">Let’s make things happen</h3>
            <p className="max-w-[500px] w-full">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button>Get your free proposal</Button>
          </div>

          {/* illustration */}
          <div className="w-full hidden lg:flex justify-end">
            <img src={frame} alt="" className="w-auto" />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function CaseStudiesSection() {
  const caseStudyData = [
    "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  ];
  return (
    <section className="px-5 md:px-10 my-20">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-16">
          <SectionHeader
            title="Case Studies"
            description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          />

          {/* container */}
          <div className="overflow-x-auto">
            <div className="bg-dark rounded-[45px] h-[326px] w-[1234px] flex items-center justify-center">
              <div className="grid grid-cols-3 w-full h-full gap-5 place-content-center">
                {caseStudyData.map((data, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-5 w-full justify-center ${
                      idx === 1 && "border-r border-l"
                    }`}
                  >
                    {/* ${
                    idx === 1 && "border-r border-l px-5 justify-center"
                  } */}
                    <div className="max-w-[286px] flex flex-col gap-5">
                      <p className="text-light max-w-[286px]">{data}</p>

                      <div className="flex gap-3">
                        <h4 className="text-main"> Learn More </h4>
                        <img src={arrow} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function Footer() {
  return (
    <>
      <footer className="">
        {/* mobile view */}
        <div className="lg:hidden min-h-[514px] bg-dark w-full">
          <div className="px-5 md:px-10">
            <MaxWidthWrapper>
              <div className="w-full flex flex-col items-center py-10 gap-6">
                {/* Brand */}
                <div className="flex gap-2 items-center">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
                      fill="white"
                    />
                  </svg>
                  <h3 className="font-medium text-white">Postivus</h3>
                </div>
                {/* hyperlinks */}
                <div className="">
                  <ul className="flex gap-4 text-white flex-wrap flex-col sm:flex-row items-center">
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Use Cases</li>
                    <li>Pricing</li>
                  </ul>
                </div>

                {/* contact us */}
                <div className="flex flex-col gap-6 shrink-0 items-center">
                  <h4 className="bg-main w-max px-2 rounded-md">Contact us</h4>
                  <div className="flex gap-4 flex-col text-white items-center">
                    <p>Email: info@postivus.com</p>
                    <p>Phone: 555-567-9901</p>
                    <p className="text-center">
                      Address: 1234 Main St <br />
                      Moonstone City, Stardust State 12345
                    </p>
                  </div>
                </div>

                {/* subscribe to news */}
                <div className="bg-neutral-200/20 w-full min-h-[184px] py-10 h-full rounded-[14px] flex flex-col md:flex-row justify-center items-center gap-4 px-8">
                  <input
                    type="email"
                    className="border border-light bg-transparent h-[68px] rounded-[14px] w-full px-6 outline-none text-light"
                    placeholder="Email"
                  />
                  <button className="h-[68px] w-full sm:w-max bg-main rounded-[14px] px-6 text-xl shrink-0">
                    Subscribe to news
                  </button>
                </div>

                {/* socials */}
                <div className="flex gap-4">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <path
                      d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z"
                      fill="black"
                    />
                    <path
                      d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z"
                      fill="black"
                    />
                    <path
                      d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z"
                      fill="black"
                    />
                  </svg>

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <path
                      d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
                      fill="black"
                    />
                  </svg>
                </div>

                <div className="border-t border-light w-full "></div>

                <p className="text-light">
                  © 2023 Positivus. All Rights Reserved.
                </p>
              </div>
            </MaxWidthWrapper>
          </div>
        </div>

        {/* dektop view */}
        <div className="hidden lg:block px-5 md:px-10">
          <MaxWidthWrapper>
            <div className="h-[514px] w-full bg-dark rounded-t-[45px] p-16 flex flex-col gap-14">
              <header className="flex justify-between items-center">
                {/* brand */}
                <div className="flex gap-2 items-center">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
                      fill="white"
                    />
                  </svg>
                  <h3 className="font-medium text-white">Postivus</h3>
                </div>

                {/* hyperlinks */}
                <div className="hidden lg:flex gap-8 items-center">
                  <ul className="flex gap-8 text-white">
                    <li className="underline">About Us</li>
                    <li className="underline">Services</li>
                    <li className="underline">Use Cases</li>
                    <li className="underline">Pricing</li>
                    <li className="underline">Blog</li>
                  </ul>
                </div>

                {/* socials */}

                <div className="flex gap-4">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <path
                      d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z"
                      fill="black"
                    />
                    <path
                      d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z"
                      fill="black"
                    />
                    <path
                      d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z"
                      fill="black"
                    />
                  </svg>

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="white" />
                    <path
                      d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </header>

              <div className="flex gap-10">
                <div className="flex flex-col gap-6 shrink-0">
                  <h4 className="bg-main w-max px-2 rounded-md">Contact us</h4>
                  <div className="flex gap-4 flex-col text-white">
                    <p>Email: info@postivus.com</p>
                    <p>Phone: 555-567-9901</p>
                    <p>
                      Address: 1234 Main St <br />
                      Moonstone City, Stardust State 12345
                    </p>
                  </div>
                </div>

                {/* subscribe to news */}
                <div className="bg-neutral-200/20 w-full min-h-[184px] h-full rounded-[14px] flex justify-center items-center gap-4 px-8">
                  <input
                    type="email"
                    className="border border-light bg-transparent h-[68px] rounded-[14px] w-full px-6 outline-none text-light"
                    placeholder="Email"
                  />
                  <button className="h-[68px] bg-main rounded-[14px] px-6 text-xl shrink-0">
                    Subscribe to news
                  </button>
                </div>
              </div>

              <div className="border-t border-light w-full "></div>

              <p className="text-light">
                © 2023 Positivus. All Rights Reserved.
              </p>
            </div>
          </MaxWidthWrapper>
        </div>
      </footer>
    </>
  );
}

function ProcessSection() {
  return (
    <section className="px-5 md:px-10 my-20">
      <MaxWidthWrapper>
        <div className="">
          <SectionHeader
            title="Our Working Process"
            description="Step-by-Step Guide to Achieving Your Business Goals"
          />

          <div className="flex flex-col gap-4 mt-16">
            {processData.map((item, idx) => (
              <ProcessCard
                key={idx}
                idx={idx}
                description={item.description}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

function SectionHeader({ title = "Title", description = "description here" }) {
  return (
    <header className="flex gap-6 md:gap-10 flex-col md:flex-row font-medium items-center justify-center md:justify-start">
      <h2 className="bg-main   font-medium px-2 rounded-xl whitespace-pre-wrap">
        {title}
      </h2>
      <p className=" text-dark lg:max-w-[580px] leading-tight text-center md:text-left">
        {description}
      </p>
    </header>
  );
}

function ProcessCard({
  idx = 0,
  title = "Consultation",
  description = "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const index = idx + 1;
  return (
    <div
      className={`${
        isExpanded ? "bg-main" : "bg-light"
      } w-full p-10 bg-light border border-dark rounded-[45px] my-shadow flex flex-col gap-8 justify-center transition-all duration-300 overflow-hidden`}
    >
      <header className="flex justify-between w-full items-center">
        <div className="flex items-center gap-5">
          <h1>0{index}</h1>
          <h3 className="text-[18px] sm:text-[28px] md:text-[30px]">{title}</h3>
        </div>

        <div>
          <button
            className="h-[30px] md:h-[58px] aspect-square bg-light border rounded-full border-dark font-bold text-2xl md:text-[40px] flex justify-center items-center"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "-" : "+"}
          </button>
        </div>
      </header>

      {isExpanded && (
        <>
          <div className="border-t-[1px] border-dark"></div>

          <p>{description}</p>
        </>
      )}
    </div>
  );
}
