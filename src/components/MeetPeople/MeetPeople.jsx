import useReveal from "../../hooks/useReveal";
import { revealClass } from "../../utils/reveal";
import ZigZag from "../ui/ZigZag";
import GreenPill from "../ui/GreenPill";
import ArrowLink from "../ui/ArrowLink";

export default function MeetPeople() {
  const [ref1, vis1] = useReveal();
  const [ref2, vis2] = useReveal();

  return (
    <section id="studio" className="relative w-full px-4 sm:px-8 lg:px-6 xl:px-40 py-16 md:py-24 lg:py-28 xl:py-36 scroll-mt-20 xl:scroll-mt-24">

      {/* Pink arc — curves between the two containers */}
      <img src="/shapes/pink arc long.png" alt="" className="absolute pointer-events-none select-none -z-10 top-[39%] right-0" />

      {/* Container 1 — text left, image right */}
      <div ref={ref1} className={`relative flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-8 xl:gap-10 rounded-3xl px-6 sm:px-12 lg:px-10 xl:px-16 py-10 sm:py-12 lg:py-12 xl:py-16 ${revealClass(vis1, 'translate-y-16')}`}>

        {/* Radial gradient blob */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96 rounded-full bg-rose-300/40 blur-3xl sm:-translate-y-20 sm:translate-x-10 lg:-translate-y-28 lg:translate-x-14 xl:-translate-y-35 xl:translate-x-20" />
        </div>

        {/* Square shape — top right */}
        <img src="/shapes/square shape.png" alt="" className="absolute pointer-events-none select-none -z-10 w-16 sm:w-36 lg:w-40 xl:w-68.5 top-[10%] right-0" />

        <div className="flex-1 w-full">
          <h2 className="font-display font-normal text-(--text-primary) text-3xl sm:text-4xl lg:text-3xl xl:text-5xl leading-tight mb-4 sm:mb-5">
            <ZigZag>Tomorrow</ZigZag>{' '}
            should <br />
            be better than{' '}
            <GreenPill className="px-3 pb-1">today</GreenPill>
          </h2>
          <p className="text-(--text-primary) text-sm sm:text-base lg:text-lg xlmid:text-2xl leading-relaxed mb-5 sm:mb-6">
            We are a team of strategists, designers communicators, researchers.{' '}
            <br className="hidden lg:block xl:block" />
            Togeather, we belive that progress only happens when you refuse{' '}
            <br className="hidden lg:block xl:block" />
            to play things safe.
          </p>
          <ArrowLink />
        </div>

        <img src="/people/meetpeople3.png" alt="" className="w-48 h-48 sm:w-72 sm:h-72 lg:w-52 lg:h-52 xl:w-96 xl:h-96 2xl:w-150 2xl:h-150 rounded-[500px] object-cover shrink-0 select-none" />
      </div>

      {/* Container 2 — image left, text right */}
      <div ref={ref2} className={`relative flex flex-col-reverse sm:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-10 xl:gap-16 2xl:gap-72 px-6 sm:px-12 lg:px-10 xl:px-16 py-10 sm:py-12 lg:py-12 xl:py-16 mt-6 sm:mt-8 lg:mt-10 xl:mt-12 delay-100 ${revealClass(vis2, 'translate-y-16')}`}>

        {/* Triangle shapes — hidden on mobile */}
        <img src="/shapes/triangle shape.png" alt="" className="hidden xl:block absolute pointer-events-none select-none -z-10 sm:w-20 lg:w-40 xl:w-68 sm:bottom-6 sm:left-4 lg:bottom-80 xl:bottom-115 lg:left-6 xl:left-6" />
        <img src="/shapes/triangle shape.png" alt="" className="hidden xl:block absolute pointer-events-none select-none z-10 sm:w-20 lg:w-40 xl:w-68 sm:bottom-6 sm:left-28 lg:bottom-6 xl:bottom-6 lg:left-72 xl:left-117" />

        <img src="/people/meetpeople2.png" alt="" className="w-48 h-48 sm:w-72 sm:h-72 lg:w-52 lg:h-52 xl:w-96 xl:h-96 2xl:w-150 2xl:h-150 rounded-[500px] object-cover shrink-0 select-none" />

        <div className="flex-1 w-full">
          <h2 className="font-display font-normal text-(--text-primary) text-3xl sm:text-4xl lg:text-3xl xl:text-5xl leading-tight mb-8 sm:mb-10">
            <GreenPill className="px-3 pb-1">See</GreenPill>{' '}how we can help you{' '}
            <ZigZag>progress</ZigZag>
          </h2>
          <p className="text-(--text-primary) text-sm  sm:text-base lg:text-lg xlmid:text-2xl leading-relaxed mb-5 sm:mb-6">
            We add a layer of fearless insights and action that allows change makers to accelerate
            their progress in areas such as brand, design, digital, comms and social research.
          </p>
          <ArrowLink />
        </div>
      </div>

    </section>
  );
}
