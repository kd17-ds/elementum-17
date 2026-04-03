export default function ArrowLink({ href = '#', children = 'Read more' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center text-base sm:text-lg lg:text-lg xl:text-xl font-medium text-(--text-primary) hover:text-(--text-secondary) transition-colors duration-200"
    >
      {children}
      <svg className="w-20 sm:w-28 lg:w-28 xl:w-36 h-2 ml-1.5" viewBox="0 0 144 16" fill="none">
        <line x1="0" y1="8" x2="136" y2="8" stroke="#111111" strokeWidth="1.5" />
        <polyline points="128,2 142,8 128,14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </a>
  );
}
