/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function RightButton(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-labelledby="title"
      aria-describedby="desc"
      {...props}
    >
      <path
        data-name="layer1"
        d="M0 32A32 32 0 1032 0 32 32 0 000 32zm29.21-12.36l14.805 12.534-14.805 12.52a2 2 0 11-2.583-3.055l11.195-9.467-11.196-9.479a2 2 0 112.585-3.052z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default RightButton;
