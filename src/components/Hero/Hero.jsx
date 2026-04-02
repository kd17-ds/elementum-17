import People from "./People";

export default function Hero() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-40 my-12 md:my-24 lg:my-36">

      {/* Left line arcs — visible from md up */}
      <div className="absolute inset-0 pointer-events-none select-none -z-10">
        <img src="/shapes/pink-arc.png" alt="" className="absolute w-auto top-[42%] left-[-8.5px] h-52 md:h-72 lg:h-90 hidden md:block" />
        <img src="/shapes/black-arc.png" alt="" className="absolute w-auto top-[42%] left-[53.5px] h-52 md:h-72 lg:h-90 hidden md:block" />
      </div>

      {/* Purple semi-circle — scales across breakpoints */}
      <div className="absolute pointer-events-none select-none -z-10 top-[25%] right-2 md:right-[5%] lg:right-[10%] rotate-120 w-10 h-5 md:w-24 md:h-12 lg:w-[155.76px] lg:h-[77.88px] bg-[#934CEC] rounded-t-full" />

      {/* Centered content */}
      <div className="relative z-10 text-center">
        <h1 className="font-display font-normal text-(--text-primary) text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-snug md:leading-tight lg:leading-31.5">
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
              <span className="relative z-10">cha</span><span className="-z-10 inline-block -ml-6 sm:-ml-8 lg:-ml-12 pl-6 sm:pl-8 lg:pl-12 pr-3 sm:pr-4 lg:pr-5 pb-2 sm:pb-3 lg:pb-4 bg-[#FFC2EA] rounded-full">nging</span>
            </span>
          </span>
          <span className="sm:block">
            the{' '}
            <span className="relative inline-block px-5 sm:px-7 lg:px-9 pb-2 sm:pb-3 lg:pb-4 bg-[#c8f0c8] rounded-full">
              status
            </span>
            {' '}Quo with
          </span>
        </h1>

        <p className="mt-5 lg:mt-7 text-(--text-primary) mx-auto text-sm sm:text-base lg:text-2xl max-w-sm sm:max-w-xl lg:max-w-none">
          We are a team of strategists, designers communicators, researchers. Togeather,
          <br className="hidden lg:block" />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>
      <People />
    </section>
  );
}
