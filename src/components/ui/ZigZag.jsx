export default function ZigZag({ children, lineClassName = 'left-0 w-full top-[80%]' }) {
  return (
    <span className="relative inline-block">
      {children}
      <img
        src="/shapes/zig-zag-line.png"
        alt=""
        className={`absolute pointer-events-none select-none -z-10 ${lineClassName}`}
      />
    </span>
  );
}
