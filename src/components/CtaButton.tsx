import type { ReactNode } from 'react';

interface ArrowLinkProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export function ArrowLink({ children, href = '#', className = '' }: ArrowLinkProps) {
  return (
    <a href={href} className={`arrow-link ${className}`}>
      <span>{children}</span>
      <img src="/assets/arrow-right.png" alt="" className="arrow-link__icon" />
    </a>
  );
}

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  showArrow?: boolean;
}

export function CtaButton({ children, href = '#', showArrow = true }: CtaButtonProps) {
  return (
    <a href={href} className="cta-button">
      <span>{children}</span>
      {showArrow && (
        <img src="/assets/arrow-right.png" alt="" className="cta-button__icon" />
      )}
    </a>
  );
}
