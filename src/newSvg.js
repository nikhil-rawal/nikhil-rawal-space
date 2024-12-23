import * as React from "react";

const SvgIcon = ({ height, width }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 375 375"
    className={` text-black dark:text-white`}
    style={{ height: `${height}px`, width: `${width}px` }}
  >
    <defs>
      <clipPath id="4832a4be7b">
        <path d="M3.363 3.363h368.274v368.274H3.363Zm0 0"></path>
      </clipPath>
      <clipPath id="997fac6bc6">
        <path d="M187.5 371.637c-49.164 0-95.453-19.133-130.191-53.946C22.496 282.953 3.363 236.664 3.363 187.5S22.496 92.047 57.31 57.309C92.047 22.496 138.336 3.363 187.5 3.363s95.453 19.133 130.191 53.946c34.813 34.812 53.946 81.027 53.946 130.191s-19.133 95.453-53.946 130.191c-34.738 34.813-81.027 53.946-130.191 53.946m0-357.235c-46.219 0-89.715 18.032-122.39 50.707C32.433 97.785 14.401 141.281 14.401 187.5s18.032 89.715 50.707 122.39c32.676 32.676 76.172 50.708 122.391 50.708s89.715-18.032 122.39-50.707c32.676-32.676 50.708-76.172 50.708-122.391S342.566 97.785 309.89 65.11C277.215 32.433 233.719 14.401 187.5 14.401m0 0"></path>
      </clipPath>
    </defs>
    <g clipPath="url(#4832a4be7b)">
      <g clipPath="url(#997fac6bc6)">
        <path
          d="M3.363 3.363h368.274v368.274H3.363Zm0 0"
          className="fill-current"
        ></path>
      </g>
    </g>
    <path
      d="M71.814 138.216h10.14l44.297 64.063v-64.063h13v90.954h-10.406L84.94 165.638v63.532H71.814ZM268.905 183.045q5.589.002 9.234-2.329c2.426-1.562 4.242-3.554 5.453-5.984q1.812-3.64 1.813-7.531-.001-3.905-1.813-7.797-1.815-3.904-5.453-6.5-3.645-2.592-9.234-2.594H248.78v78.86h-13v-92.11h33.125q7.405 0 12.984 2.672 5.592 2.659 9.297 7.016a29.5 29.5 0 0 1 5.515 9.672q1.83 5.332 1.829 10.78c0 4.243-.868 8.337-2.594 12.282-1.73 3.938-4.352 7.274-7.86 10q-5.268 4.096-13.062 5.516l28.719 34.172h-17.016l-33.14-39.891v-6.234Zm0 0"
      className="fill-current"
    ></path>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="12.09845"
      d="M187.496 261.129V113.867"
    ></path>
  </svg>
);

export default SvgIcon;
