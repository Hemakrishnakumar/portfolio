import React, { useId } from "react";

const HKLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 64,
  className,
}) => {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 100"
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id={`splitH-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="48%" stopColor="white" />
          <stop offset="52%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id={`splitK-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="48%" stopColor="#10B981" />
          <stop offset="52%" stopColor="white" />
        </linearGradient>
      </defs>

      {/* < in emerald */}
      <text
        x="10"
        y="70"
        fontFamily="Roboto"
        fontSize="64"
        fontWeight="700"
        fill="#10B981"
      >
        &lt;
      </text>

      {/* H path (replace with real outline later) */}
      <path
        d="M80 20 V80 M80 50 H120 M120 20 V80" // a rough H
        stroke={`url(#splitH-${uid})`}
        strokeWidth="10"
        fill="none"
      />

      {/* K path (replace with real outline later) */}
      <path
        d="M150 20 V80 M150 50 L200 20 M150 50 L200 80" // a rough K
        stroke={`url(#splitK-${uid})`}
        strokeWidth="10"
        fill="none"
      />

      {/* /> in emerald */}
      <text
        x="220"
        y="70"
        fontFamily="Roboto"
        fontSize="64"
        fontWeight="700"
        fill="#10B981"
      >
        /&gt;
      </text>
    </svg>
  );
};

export default HKLogo;
