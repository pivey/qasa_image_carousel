/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function SvgCheckIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-labelledby="title"
      aria-describedby="desc"
      width={32}
      height={32}
      {...props}
    >
      <circle data-name="layer1" cx={32} cy={32} r={30} fill="#364156" />
      <path
        data-name="opacity"
        d="M36 58A30 30 0 0112.882 8.881 30 30 0 1055.118 51.12 29.882 29.882 0 0136 58z"
        fill="#000028"
        opacity={0.15}
      />
      <circle
        data-name="stroke"
        cx={32}
        cy={32}
        r={30}
        transform="rotate(-45 32 32)"
        fill="none"
        stroke="#f3f3f3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      />
      <path
        data-name="stroke"
        fill="none"
        stroke="#f3f3f3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M20.998 32.015l8.992 8.992 16.011-16.011"
      />
    </svg>
  );
}

export default SvgCheckIcon;
