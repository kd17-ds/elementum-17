const PEOPLE = [
  { src: '/people/1people.png', y: 'translate-y-4   sm:translate-y-6   lg:translate-y-8   xl:translate-y-10' },
  { src: '/people/2people.png', y: '-translate-y-4  sm:-translate-y-8  lg:-translate-y-4  xl:-translate-y-2',  x: '-translate-x-6 lg:-translate-x-8  xl:-translate-x-12' },
  { src: '/people/3people.png', y: '-translate-y-10 sm:-translate-y-16 lg:-translate-y-18 xl:-translate-y-20', x: '-translate-x-6 lg:translate-x-6   xl:translate-x-10' },
  { src: '/people/4people.png', y: 'translate-y-6   sm:translate-y-10  lg:translate-y-14  xl:translate-y-18',  x: '-translate-x-6 lg:translate-x-0   xl:translate-x-0' },
  { src: '/people/5people.png', y: '-translate-y-6  sm:-translate-y-10 lg:-translate-y-12 xl:-translate-y-14', x: '-translate-x-6 lg:translate-x-8   xl:translate-x-12' },
  { src: '/people/6people.png', y: 'translate-y-2   sm:translate-y-4   lg:translate-y-5   xl:translate-y-6' },
  { src: '/people/7people.png', y: '-translate-y-10 sm:-translate-y-16 lg:-translate-y-22 xl:-translate-y-28' },
  { src: '/people/8people.png', y: 'translate-y-2   sm:translate-y-4   lg:translate-y-6   xl:translate-y-8' },
];

export default function People() {
  return (
    <div className="w-full mt-20 grid grid-cols-8 py-10 lg:py-12 xl:py-16">
      {PEOPLE.map((person, index) => (
        <img
          key={index}
          src={person.src}
          alt=""
          className={`w-full max-w-14 sm:max-w-24 md:max-w-36 lg:max-w-44 xl:max-w-56.5 aspect-square rounded-full object-cover object-top select-none mx-auto ${person.y} ${person.x ?? ''}`}
        />
      ))}
    </div>
  );
}
