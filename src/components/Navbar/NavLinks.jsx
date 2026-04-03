import { useState } from 'react';
import { NAV_LINKS } from '../../constants/navLinks';

export default function NavLinks({ mobile = false, onClose }) {
  const [hoveredLink, setHoveredLink] = useState(null);

  function handleClick(e, href) {
    if (href === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '#faqs') {
      e.preventDefault();
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    if (onClose) onClose();
  }

  if (mobile) {
    return (
      <nav className="flex flex-col px-4 sm:px-8 py-2">
        {NAV_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="text-base font-semibold text-(--text-primary) hover:text-(--text-secondary) py-4 border-b border-(--border-primary) last:border-none transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center gap-16">
      {NAV_LINKS.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
          className="relative text-[14px] lg:text-base xl:text-[18px] leading-6 font-medium text-center transition-colors duration-200"
          style={{ color: 'var(--text-primary)' }}
        >
          {link.label}
          <span
            className="absolute -bottom-0.5 left-0 h-[1.5px] transition-all duration-300"
            style={{
              width: hoveredLink === index ? '100%' : '0%',
              backgroundColor: 'var(--text-primary)',
            }}
          />
        </a>
      ))}
    </nav>
  );
}
