import useReveal from "../../hooks/useReveal";

const SERVICES = [
  {
    tag: <>Office of multiple<br />interest content</>,
    title: 'Colaborative & partnership',
  },
  {
    tag: <>The hanger US Air force<br />digital experimental</>,
    title: 'We talk about our weight',
  },
  {
    tag: <>Delta faucet content,<br />social, digital</>,
    title: 'Piloting digital confidence',
  },
];

export default function Services() {
  const [headingRef, headingVis] = useReveal();
  const row0 = useReveal();
  const row1 = useReveal();
  const row2 = useReveal();
  const reveals = [row0, row1, row2];

  return (
    <section id="services" className="relative w-full px-4 sm:px-8 lg:px-16 xl:px-36 py-12 md:py-16 xl:py-24 scroll-mt-20 xl:scroll-mt-24">

      {/* Pink arc — top right */}
      <img src="/shapes/pink arc long.png" alt="" className="hidden xl:block absolute pointer-events-none select-none -z-10 -top-100 -right-150" />

      {/* Heading */}
      <h2
        ref={headingRef}
        className={`font-display font-normal text-(--text-primary) text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8 md:mb-10 xl:mb-14 transition-all duration-1000 ease-out ${headingVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        What we{' '}
        <span className="inline-block px-3 pb-1 bg-[#c8f0c8] rounded-full">can</span>
        <br />
        <span className="relative inline-block">
          offer
          <img src="/shapes/zig-zag-line.png" alt="" className="absolute left-0 w-full pointer-events-none select-none top-[85%] -z-10" />
        </span>
        {' '}you!
      </h2>

      {/* Service rows */}
      <div className="w-full">
        {SERVICES.map((service, index) => {
          const [rowRef, rowVis] = reveals[index];
          return (
            <div
              key={index}
              ref={rowRef}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`grid grid-cols-[1fr_auto] md:grid-cols-[8rem_1fr_5rem] lg:grid-cols-[10rem_1fr_5rem] xl:grid-cols-[12rem_1fr_6rem] items-center py-4 sm:py-5 md:py-6 xl:py-8 border-b border-(--border-secondary) first:border-t gap-4 md:gap-0 transition-all duration-1000 ease-out ${rowVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <p className="hidden md:block text-xs xl:text-sm text-(--text-secondary) leading-relaxed">{service.tag}</p>
              <h3 className="relative font-display font-normal text-(--text-primary) text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:text-center">
                {index === 2 ? (
                  <>
                    Piloting digital{' '}
                    <span className="relative inline-block">
                      confidence
                      <img src="/others/Rectangle 661.png" alt="" className="absolute pointer-events-none select-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 md:w-16 xl:w-24 aspect-square rounded-full object-cover" />
                    </span>
                  </>
                ) : service.title}
              </h3>
              <svg className="w-14 md:w-16 xl:w-20 h-4 ml-auto" viewBox="0 0 81 16" fill="none">
                <line x1="0" y1="8" x2="73" y2="8" stroke="#111111" strokeWidth="1.5" />
                <polyline points="65,2 79,8 65,14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          );
        })}
      </div>

    </section>
  );
}
