import React from 'react';

interface TwoExcelBadgeProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const TwoExcelBadge: React.FC<TwoExcelBadgeProps> = ({
  className,
  width = 160,
  height = "auto",
}) => {
  return (
    <div className={className} style={{ width, height }}>
      <svg
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Main Brand "2XceL" */}
        <g id="brand-text">
          {/* "2" in Coral */}
          <text
            x="12"
            y="48"
            fontFamily="'Nunito', 'Segoe UI', sans-serif"
            fontWeight="900"
            fontSize="34"
            fill="#ff8a65"
            letterSpacing="-1"
          >
            2
          </text>
          
          {/* "X" in Sky Blue */}
          <text
            x="36"
            y="48"
            fontFamily="'Nunito', 'Segoe UI', sans-serif"
            fontWeight="900"
            fontSize="34"
            fill="#4fc3f7"
          >
            X
          </text>

          {/* "ceL" in Slate Gray */}
          <text
            x="60"
            y="48"
            fontFamily="'Nunito', 'Segoe UI', sans-serif"
            fontWeight="800"
            fontSize="34"
            fill="#607d8b"
            letterSpacing="-0.5"
          >
            ceL
          </text>
        </g>

        {/* Subtitle "DIGITAL MEDIA" */}
        <text
          x="14"
          y="68"
          fontFamily="'Nunito', 'Segoe UI', sans-serif"
          fontWeight="800"
          fontSize="11"
          fill="#546e7a"
          letterSpacing="4"
        >
          DIGITAL MEDIA
        </text>

        {/* Supporting tag "STRATEGY | AUTOMATION | GROWTH" */}
        <text
          x="14"
          y="84"
          fontFamily="'Nunito', 'Segoe UI', sans-serif"
          fontWeight="600"
          fontSize="5.5"
          fill="#78909c"
          letterSpacing="0.8"
        >
          STRATEGY | AUTOMATION | GROWTH
        </text>
      </svg>
    </div>
  );
};
