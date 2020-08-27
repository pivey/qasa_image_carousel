/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function LeftButton(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-labelledby="title"
      aria-describedby="desc"
      {...props}
    >
      <path
        data-name="layer1"
        d="M64 32a32 32 0 10-32 32 32.001 32.001 0 0032-32zM34.79 44.361L19.984 31.828 34.79 19.307a2 2 0 112.583 3.054l-11.195 9.47 11.196 9.478a2 2 0 11-2.585 3.052z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default LeftButton;
