const COLUMNS = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accesibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
  {
    title: 'Terms & Policies',
    links: ['1498w Fluton sto, STE', '2D Chicago, IL 63867.', '(123) 456789000', 'info@elementum.com'],
  },
];

import useReveal from "../../hooks/useReveal";

export default function Footer() {
  const [subscribeRef, subscribeVis] = useReveal();
  const [columnsRef, columnsVis] = useReveal();

  return (
    <footer id="contact" className="relative w-full mt-40 bg-(--bg-secondary) overflow-hidden scroll-mt-20">

      {/* Subscribe section */}
      <div ref={subscribeRef} className={`relative mx-auto max-w-7xl px-4 sm:px-8 xl:px-40 pt-24 sm:pt-28 xl:pt-36 flex flex-col items-center text-center transition-all duration-1000 ease-out ${subscribeVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

        {/* Footer arc */}
        <img
          src="/shapes/footerarc.png"
          alt=""
          className="absolute top-0 left-[35%] xl:left-110 -translate-x-1/2 w-14 sm:w-24 md:w-32 xl:w-56 pointer-events-none select-none"
        />
        <img
          src="/shapes/footerarc.png"
          alt=""
          className="absolute top-0 left-[50%] xl:left-137 -translate-x-1/2 w-14 sm:w-24 md:w-32 xl:w-56 pointer-events-none select-none"
        />

        {/* Heading */}
        <h2 className="font-display font-normal mt-2 text-(--text-primary) text-4xl sm:text-5xl md:text-6xl xl:text-[100px] xl:leading-[116px]">
          Subscribe to our newsletter
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-sm sm:text-base xl:text-2xl xl:leading-9 text-(--text-secondary)">
          To make your stay special and even more memorable
        </p>

        {/* Button */}
        <button className="mt-6 xl:mt-9 bg-(--text-primary) text-white font-bold text-sm sm:text-base xl:text-xl xl:leading-[30px] px-8 xl:px-[46px] py-3 xl:py-[21px] rounded-full">
          Subscribe Now
        </button>

      </div>

      {/* Purple semicircle */}
      <div className="absolute pointer-events-none select-none top-[8%] right-[2%] md:right-[4%] xl:right-[7%] rotate-120 w-8 h-4 sm:w-12 sm:h-6 md:w-20 md:h-10 xl:w-[155.76px] xl:h-[77.88px] bg-[#934CEC] rounded-t-full" />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 xl:px-40 mt-10 sm:mt-14 xl:mt-[100px] mb-10 sm:mb-14 xl:mb-[100px]">
        <hr className="border-(--border-primary)" />
      </div>

      {/* Footer columns */}
      <div ref={columnsRef} className={`mx-auto max-w-7xl px-4 sm:px-8 xl:px-40 transition-all duration-1000 ease-out delay-100 ${columnsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-8 xl:flex xl:justify-between">
          {COLUMNS.map((col, i) => (
            <div key={i}>
              <h3 className="font-display font-normal text-(--text-primary) text-base sm:text-lg xl:text-[22px] xl:leading-[30px]">
                {col.title}
              </h3>
              <ul className="mt-5 xl:mt-[39px] flex flex-col gap-3 xl:gap-[30px]">
                {col.links.map((link) => (
                  <li key={link} className="text-sm sm:text-base xl:text-xl xl:leading-[30px] text-(--text-primary) cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 xl:px-40 mt-12 sm:mt-20 xl:mt-[200px] pb-6 sm:pb-10 xl:pb-[60px] text-center">
        <p className="text-xs sm:text-sm xl:text-base text-(--text-primary)">
          ©2023 Elementum. All rights reserved
        </p>
      </div>

    </footer>
  );
}
