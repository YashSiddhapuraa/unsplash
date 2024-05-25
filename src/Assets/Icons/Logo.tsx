import React from "react";

export type LogoSVGProps = React.SVGProps<SVGSVGElement> &
  Partial<{
    fillColor?: string;
    className: string;
  }>;

export const LogoSVG: React.FC<LogoSVGProps> = ({
  className = "ayR4i uFlu6",
}) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      version="1.1"
      aria-labelledby="unsplash-home"
      aria-hidden="false"
    >
      <desc lang="en-US">Unsplash logo</desc>
      <title id="unsplash-home">Unsplash Home</title>
      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
    </svg>
  );
};
