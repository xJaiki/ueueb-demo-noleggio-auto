import React from 'react';

// Reusable wavy dashed divider to mark section/page end
// Props:
// - colorClass: tailwind text-* color (default: text-primary)
// - stroke: stroke width (default: 3)
// - dash: dash pattern (default: '12 10')
// - spacingClass: vertical spacing classes (default: 'my-12 md:my-16 lg:my-20')
// - fullBleed: stretches edge-to-edge when true (default: true)
// - maxWidthClass: max width when not fullBleed (default: 'max-w-2xl')
const SectionDivider = ({
  colorClass = 'text-primary',
  stroke = 3,
  dash = '12 10',
  spacingClass = 'my-12 md:my-16 lg:my-20',
  fullBleed = true,
  maxWidthClass = 'max-w-2xl',
}) => {
  const Wrapper = ({ children }) =>
    fullBleed ? (
      <div className={`${spacingClass} w-full`}>{children}</div>
    ) : (
      <div className={`${spacingClass} w-full ${maxWidthClass} mx-auto`}>{children}</div>
    );

  return (
    // <Wrapper>
    //   <div className={`w-full ${colorClass}`} role="separator" aria-hidden>
    //     <svg
    //       viewBox="0 0 1200 60"
    //       xmlns="http://www.w3.org/2000/svg"
    //       preserveAspectRatio="none"
    //       className="block w-full h-10 md:h-12"
    //     >
    //       <path
    //         d="M0 30 C 100 55, 200 5, 300 30 S 500 55, 600 30 700 5, 800 30 1000 55, 1100 30 1200 5, 1200 5"
    //         fill="none"
    //         stroke="currentColor"
    //         strokeWidth={stroke}
    //         strokeLinecap="round"
    //         strokeDasharray={dash}
    //       />
    //     </svg>
    //   </div>
    // </Wrapper>
    <></>
  );
};

export default SectionDivider;
