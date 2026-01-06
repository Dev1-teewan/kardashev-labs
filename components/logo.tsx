export function Logo({
  className = "w-7 h-7",
  color = "#00ffc8",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "geometricPrecision", display: "block" }}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Rounded square container */}
      <rect
        x="3"
        y="3"
        width="34"
        height="34"
        rx="6"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
      />

      {/* Geometric "K" - optimized for scalability */}
      <g
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="miter"
        fill="none"
      >
        {/* Vertical stem - centered and balanced */}
        <line x1="15" y1="9" x2="15" y2="31" />

        {/* Top diagonal - clean angle */}
        <line x1="15" y1="18" x2="27" y2="9" />

        {/* Bottom diagonal - clean angle */}
        <line x1="15" y1="18" x2="27" y2="31" />
      </g>
    </svg>
  );
}
