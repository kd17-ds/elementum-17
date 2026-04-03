export default function GreenPill({ children, className = '' }) {
  return (
    <span className={`inline-block bg-[#c8f0c8] rounded-full ${className}`}>
      {children}
    </span>
  );
}
