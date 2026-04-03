import useReveal from "../../hooks/useReveal";
import { revealClass } from "../../utils/reveal";
import ZigZag from "../ui/ZigZag";
import GreenPill from "../ui/GreenPill";

const LEFT_CUSTOMERS = [
  { src: '/customer/customer1.png', size: 'w-[125px]', y: 'translate-y-0',  x: '-translate-x-44' },
  { src: '/customer/customer2.png', size: 'w-[74px]',  y: 'translate-y-23', x: '-translate-x-60' },
  { src: '/customer/customer3.png', size: 'w-[216px]', y: 'translate-y-24', x: '-translate-x-30' },
  { src: '/customer/customer4.png', size: 'w-[123px]', y: 'translate-y-24', x: '-translate-x-72' },
];

const RIGHT_CUSTOMERS = [
  { src: '/customer/customer5.png', size: 'w-[146px]', y: 'translate-y-0',  x: 'translate-x-48' },
  { src: '/customer/customer6.png', size: 'w-[90px]',  y: '-translate-y-4', x: 'translate-x-4'  },
  { src: '/customer/customer7.png', size: 'w-[112px]', y: 'translate-y-12', x: 'translate-x-16' },
  { src: '/customer/customer8.png', size: 'w-[295px]', y: 'translate-y-18', x: 'translate-x-72' },
];

export default function Testimonial() {
  const [headingRef, headingVis] = useReveal();
  const [quoteRef, quoteVis] = useReveal();

  return (
    <section id="testimonial" className="relative w-full px-4 sm:px-8 py-12 md:py-16 xl:py-24 scroll-mt-20 xl:scroll-mt-24">
      <div className="relative mx-auto max-w-7xl xlmid:min-h-160">

        {/* Center content */}
        <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
          <h2
            ref={headingRef}
            className={`font-display font-normal text-(--text-primary) text-center text-3xl sm:text-4xl xl:text-5xl xl:leading-snug xl:tracking-tight max-w-2xl ${revealClass(headingVis)}`}
          >
            <GreenPill className="px-4 pb-1">What</GreenPill>{" "}
            our customer
            <br />
            says{" "}
            <ZigZag lineClassName="left-1/2 -translate-x-1/2 w-40 sm:w-52 xl:w-96 top-[82%]">About Us</ZigZag>
          </h2>

          {/* Quote box */}
          <div
            ref={quoteRef}
            className={`relative w-full mt-6 sm:mt-8 xl:mt-11 rounded-2xl sm:rounded-3xl xl:rounded-[60px] bg-green-50 px-6 sm:px-10 xl:px-14 py-6 sm:py-8 xl:py-10 delay-150 ${revealClass(quoteVis, 'translate-y-16')}`}
          >
            <div className="mx-auto max-w-4xl">
              <p className="text-(--text-primary) font-normal text-center text-sm sm:text-base xl:text-3xl leading-relaxed xl:leading-normal">
                <span className="hidden xl:inline-flex items-center gap-1 mr-4 opacity-70 pointer-events-none select-none align-middle">
                  <img src="/shapes/inverted comma 2.png" alt="" className="w-8 h-12" />
                  <img src="/shapes/inverted comma 2.png" alt="" className="w-8 h-12" />
                </span>
                Elementum delivered the site with inthe timeline
                <br className="hidden xl:block" />
                as they requested. Inthe end, the client found a 50%
                <br className="hidden xl:block" />
                increase in traffic with in days since its launch. They
                <br className="hidden xl:block" />
                also had an impressive ability to use technologies that
                <br className="hidden xl:block" />
                the company hasn&apos;t used, which have also proved to
                <br className="hidden xl:block" />
                be easy to use and reliable
                <span className="hidden xl:inline-flex items-center gap-1 ml-4 opacity-70 pointer-events-none select-none align-middle">
                  <img src="/shapes/inverted comma 2.png" alt="" className="w-8 h-12 rotate-180" />
                  <img src="/shapes/inverted comma 2.png" alt="" className="w-8 h-12 rotate-180" />
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* People */}
        <div className="absolute inset-0 pointer-events-none select-none hidden xlmid:flex justify-between">
          <div className="w-[21vw] 2xl:w-68 flex flex-col">
            {LEFT_CUSTOMERS.map((customer, index) => (
              <img
                key={index}
                src={customer.src}
                alt=""
                className={`${customer.size} aspect-square rounded-full object-cover object-center ${customer.y} ${customer.x}`}
              />
            ))}
          </div>
          <div className="w-[25vw] 2xl:w-81 flex flex-col items-end">
            {RIGHT_CUSTOMERS.map((customer, index) => (
              <img
                key={index}
                src={customer.src}
                alt=""
                className={`${customer.size} aspect-square rounded-full object-cover object-center ${customer.y} ${customer.x}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
