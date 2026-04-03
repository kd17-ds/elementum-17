import People from "./People";
import useReveal from "../../hooks/useReveal";

export default function Hero() {
  const [headingRef, headingVisible] = useReveal(0.1);
  const [paraRef, paraVisible] = useReveal(0.1);

  return (
    <section id="home" className="relative w-full px-4 sm:px-8 lg:px-24 xl:px-40 my-12 md:my-24 lg:my-28 xl:my-36 scroll-mt-20 xl:scroll-mt-24">

      {/* Left line arcs — visible from md up */}
      <div className="absolute inset-0 pointer-events-none select-none -z-10">
        <img src="/shapes/pink-arc.png" alt="" className="absolute w-auto top-[42%] left-[-8.5px] h-52 md:h-72 lg:h-80 xl:h-90 hidden md:block" />
        <img src="/shapes/black-arc.png" alt="" className="absolute w-auto top-[42%] left-[53.5px] h-52 md:h-72 lg:h-80 xl:h-90 hidden md:block" />
      </div>

      {/* Purple semi-circle — scales across breakpoints */}
      <div className="absolute pointer-events-none select-none -z-10 top-[25%] right-2 md:right-[5%] lg:right-[8%] xl:right-[10%] rotate-120 w-10 h-5 md:w-24 md:h-12 lg:w-32 lg:h-16 xl:w-[155.76px] xl:h-[77.88px] bg-[#934CEC] rounded-t-full" />

      {/* Centered content */}
      <div className="relative z-10 text-center">
        <h1
          ref={headingRef}
          style={{ animationDelay: '0ms' }}
          className={`font-display font-normal text-(--text-primary) text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-8xl leading-snug md:leading-tight lg:leading-tight xl:leading-31.5 transition-all duration-1000 ease-out ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="sm:block">
            The{' '}
            <span className="relative inline-block">
              thinkers
              <img
                src="/shapes/zig-zag-line.png"
                alt=""
                className="absolute left-[8%] w-full pointer-events-none select-none top-4/5 -z-10"
              />
            </span>
            {' '}and{' '}
          </span>
          <span className="sm:block">
            doers were{' '}
            <span className="whitespace-nowrap">
              <span className="relative z-10">cha</span><span className="-z-10 inline-block -ml-6 sm:-ml-8 lg:-ml-10 xl:-ml-12 pl-6 sm:pl-8 lg:pl-10 xl:pl-12 pr-3 sm:pr-4 lg:pr-4 xl:pr-5 pb-2 sm:pb-3 lg:pb-3 xl:pb-4 bg-[#FFC2EA] rounded-full">nging</span>
            </span>
          </span>
          <span className="sm:block">
            the{' '}
            <span className="relative inline-block px-5 sm:px-7 lg:px-8 xl:px-9 pb-2 sm:pb-3 lg:pb-3 xl:pb-4 bg-[#c8f0c8] rounded-full">
              status
            </span>
            {' '}Quo with
          </span>
        </h1>

        <p
          ref={paraRef}
          className={`mt-5 lg:mt-6 xl:mt-7 text-(--text-primary) mx-auto text-sm sm:text-base lg:text-xl xl:text-2xl max-w-sm sm:max-w-xl lg:max-w-none transition-all duration-1000 ease-out delay-150 ${paraVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          We are a team of strategists, designers communicators, researchers. Togeather,
          <br className="hidden lg:block xl:block" />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>
      <People />
    </section>
  );
}
