import useReveal from "../../hooks/useReveal";

export default function MeetPeople() {
  const [ref1, vis1] = useReveal();
  const [ref2, vis2] = useReveal();

  return (
    <section id="studio" className="relative w-full px-4 sm:px-8 lg:px-6 xl:px-40 py-16 md:py-24 lg:py-28 xl:py-36 scroll-mt-20 xl:scroll-mt-24">

      {/* Pink arc — curves between the two containers */}
      <img src="/shapes/pink arc long.png" alt="" className="absolute pointer-events-none select-none -z-10 top-[39%] right-0" />

      {/* Container 1 — text left, image right */}
      <div ref={ref1} className={`relative flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-8 xl:gap-10 rounded-3xl px-6 sm:px-12 lg:px-10 xl:px-16 py-10 sm:py-12 lg:py-12 xl:py-16 transition-all duration-1000 ease-out ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

        {/* Radial gradient blob */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96 rounded-full bg-rose-300/40 blur-3xl sm:-translate-y-20 sm:translate-x-10 lg:-translate-y-28 lg:translate-x-14 xl:-translate-y-35 xl:translate-x-20" />
        </div>

        {/* Square shape — top right */}
        <img src="/shapes/square shape.png" alt="" className="absolute pointer-events-none select-none -z-10 w-16 sm:w-36 lg:w-40 xl:w-68.5 top-[10%] right-0" />

        <div className="flex-1 w-full">
          <h2 className="font-display font-normal text-(--text-primary) text-3xl sm:text-4xl lg:text-3xl xl:text-5xl leading-tight mb-4 sm:mb-5">
            <span className="relative inline-block">
              Tomorrow
              <img src="/shapes/zig-zag-line.png" alt="" className="absolute left-0 w-full pointer-events-none select-none top-[80%] -z-10" />
            </span>{' '}
            should <br />
            be better than{' '}
            <span className="inline-block px-3 pb-1 bg-[#c8f0c8] rounded-full">today</span>
          </h2>
          <p className="text-(--text-secondary) text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            We are a team of strategists, designers communicators, researchers.{' '}
            <br className="hidden lg:block xl:block" />
            Togeather, we belive that progress only happens when you refuse{' '}
            <br className="hidden lg:block xl:block" />
            to play things safe.
          </p>
          <a href="#" className="inline-flex items-center text-base sm:text-lg lg:text-lg xl:text-xl font-medium text-(--text-primary) hover:text-(--text-secondary) transition-colors duration-200">
            Read more
            <svg className="w-20 sm:w-28 lg:w-28 xl:w-36 h-2 ml-1.5" viewBox="0 0 144 16" fill="none">
              <line x1="0" y1="8" x2="136" y2="8" stroke="#111111" strokeWidth="1.5" />
              <polyline points="128,2 142,8 128,14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>
        </div>

        <img src="/people/meetpeople3.png" alt="" className="w-48 h-48 sm:w-72 sm:h-72 lg:w-52 lg:h-52 xl:w-96 xl:h-96 2xl:w-150 2xl:h-150 rounded-[500px] object-cover shrink-0 select-none" />
      </div>

      {/* Container 2 — image left, text right */}
      <div ref={ref2} className={`relative flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-10 xl:gap-16 2xl:gap-72 px-6 sm:px-12 lg:px-10 xl:px-16 py-10 sm:py-12 lg:py-12 xl:py-16 mt-6 sm:mt-8 lg:mt-10 xl:mt-12 transition-all duration-1000 ease-out delay-100 ${vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>

        {/* Triangle shapes — hidden on mobile */}
        <img src="/shapes/triangle shape.png" alt="" className="hidden xl:block absolute pointer-events-none select-none -z-10 sm:w-20 lg:w-40 xl:w-68 sm:bottom-6 sm:left-4 lg:bottom-80 xl:bottom-115 lg:left-6 xl:left-6" />
        <img src="/shapes/triangle shape.png" alt="" className="hidden xl:block absolute pointer-events-none select-none z-10 sm:w-20 lg:w-40 xl:w-68 sm:bottom-6 sm:left-28 lg:bottom-6 xl:bottom-6 lg:left-72 xl:left-117" />

        <img src="/people/meetpeople2.png" alt="" className="w-48 h-48 sm:w-72 sm:h-72 lg:w-52 lg:h-52 xl:w-96 xl:h-96 2xl:w-150 2xl:h-150 rounded-[500px] object-cover shrink-0 select-none" />

        <div className="flex-1 w-full">
          <h2 className="font-display font-normal text-(--text-primary) text-3xl sm:text-4xl lg:text-3xl xl:text-5xl leading-tight mb-8 sm:mb-10">
            <span className="inline-block px-3 pb-1 bg-[#c8f0c8] rounded-full">See</span>{' '}how we can help you{' '}
            <span className="relative inline-block">
              progress
              <img src="/shapes/zig-zag-line.png" alt="" className="absolute left-0 w-full pointer-events-none select-none top-[80%] -z-10" />
            </span>
          </h2>
          <p className="text-(--text-secondary) text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            We add a layer of fearless insights and action that allows change makers to accelerate
            their progress in areas such as brand, design, digital, comms and social research.
          </p>
          <a href="#" className="inline-flex items-center text-base sm:text-lg lg:text-lg xl:text-xl font-medium text-(--text-primary) hover:text-(--text-secondary) transition-colors duration-200">
            Read more
            <svg className="w-20 sm:w-28 lg:w-28 xl:w-36 h-2 ml-1.5" viewBox="0 0 144 16" fill="none">
              <line x1="0" y1="8" x2="136" y2="8" stroke="#111111" strokeWidth="1.5" />
              <polyline points="128,2 142,8 128,14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
