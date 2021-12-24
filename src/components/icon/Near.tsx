import React from 'react';

export function Near({ color }: { color?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.62451 0.609359L7.11711 4.33336C7.0765 4.3871 7.05769 4.45426 7.06455 4.52129C7.07138 4.58836 7.10332 4.65033 7.15397 4.69475C7.20463 4.7392 7.27018 4.76277 7.33751 4.7608C7.4048 4.75879 7.46888 4.73135 7.51681 4.68401L9.98423 2.55069C9.99844 2.53763 10.0162 2.52904 10.0352 2.52598C10.0543 2.52292 10.0738 2.52553 10.0914 2.53348C10.109 2.54143 10.1239 2.55438 10.1342 2.57071C10.1445 2.58704 10.1498 2.60604 10.1494 2.62535V9.33066C10.1492 9.35102 10.1428 9.37084 10.1311 9.38745C10.1193 9.40407 10.1028 9.4167 10.0837 9.42366C10.0646 9.43062 10.0437 9.43157 10.0241 9.42639C10.0044 9.4212 9.98679 9.41014 9.97356 9.39468L2.51271 0.461356C2.3936 0.31794 2.24459 0.202334 2.07612 0.122641C1.90765 0.0429479 1.72381 0.0010978 1.53747 2.50247e-05H1.27767C0.938812 2.50247e-05 0.613831 0.134741 0.37422 0.374536C0.134611 0.614332 0 0.939566 0 1.27869V10.7213C0 11.0605 0.134611 11.3857 0.37422 11.6255C0.613831 11.8653 0.938812 12 1.27767 12C1.49601 12 1.7107 11.944 1.90125 11.8373C2.0918 11.7306 2.25186 11.5768 2.36616 11.3907L4.87354 7.66668C4.91418 7.61291 4.93295 7.54578 4.92613 7.47871C4.91927 7.41168 4.88732 7.34971 4.83667 7.30526C4.78605 7.26084 4.72047 7.23724 4.65317 7.23924C4.58584 7.24125 4.52177 7.26866 4.47384 7.31602L2.00644 9.44933C1.99221 9.4624 1.97447 9.471 1.95541 9.47405C1.93635 9.47711 1.91681 9.47448 1.89923 9.46653C1.88163 9.45859 1.86676 9.44566 1.85645 9.42931C1.84614 9.41299 1.84085 9.39399 1.84123 9.37469V2.67602C1.84143 2.65566 1.84784 2.63585 1.85959 2.61923C1.87134 2.60261 1.88788 2.58998 1.907 2.58303C1.92612 2.57607 1.9469 2.57512 1.96658 2.5803C1.98625 2.58548 2.00387 2.59654 2.01709 2.61202L9.47794 11.5453C9.59795 11.6875 9.74751 11.8017 9.91621 11.88C10.0849 11.9582 10.2686 11.9988 10.4545 11.9987H10.721C10.8888 11.9987 11.0549 11.9656 11.2099 11.9013C11.3649 11.8371 11.5058 11.7429 11.6244 11.6242C11.7431 11.5054 11.8372 11.3645 11.9014 11.2093C11.9656 11.0542 11.9986 10.8879 11.9986 10.72V1.27869C11.9987 1.1101 11.9653 0.94317 11.9006 0.787509C11.8359 0.631851 11.7411 0.490536 11.6216 0.371697C11.5021 0.252857 11.3603 0.158839 11.2044 0.0950521C11.0484 0.0312655 10.8814 -0.0010297 10.713 2.50247e-05C10.4946 5.12861e-05 10.28 0.056073 10.0894 0.162744C9.89884 0.269415 9.73878 0.423179 9.62451 0.609359Z"
        fill={color ? color : 'white'}
      />
    </svg>
  );
}

export function LightBulb() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6875 16.9583H13.9471C14.0079 16.9583 14.0662 16.9342 14.1091 16.8912C14.1521 16.8482 14.1763 16.7899 14.1763 16.7292V16.7214L14.1068 14.6953C14.1028 14.5779 14.1289 14.4615 14.1827 14.357C14.2364 14.2526 14.316 14.1637 14.4139 14.0988C16.1333 12.9591 17.1875 11.0385 17.1875 8.9375C17.1875 5.52017 14.4173 2.75 11 2.75C7.58267 2.75 4.8125 5.52017 4.8125 8.9375C4.8125 11.039 5.86736 12.9601 7.58702 14.0995C7.67836 14.16 7.75392 14.2414 7.80742 14.337C7.86091 14.4326 7.89079 14.5395 7.89456 14.649L7.96629 16.737C7.96832 16.7964 7.99335 16.8527 8.03611 16.894C8.07887 16.9353 8.13601 16.9584 8.19546 16.9583H10.3125V12.304L8.66594 10.5545C8.54098 10.4217 8.47389 10.2447 8.47943 10.0624C8.48218 9.97218 8.50267 9.88336 8.53975 9.80103C8.57682 9.7187 8.62975 9.64448 8.6955 9.5826C8.76126 9.52073 8.83856 9.47241 8.92299 9.44041C9.00742 9.40841 9.09732 9.39335 9.18757 9.3961C9.36984 9.40164 9.54244 9.47937 9.6674 9.61217L11.0286 11.0587L12.5904 9.58352C12.723 9.45832 12.8998 9.3909 13.0821 9.3961C13.2644 9.4013 13.4371 9.47869 13.5623 9.61125C13.6875 9.74381 13.7549 9.92068 13.7497 10.1029C13.7445 10.2852 13.6671 10.4579 13.5346 10.5831L11.6875 12.3276V16.9583ZM18.5625 8.9375C18.5634 10.121 18.2862 11.2881 17.7532 12.3448C17.2202 13.4015 16.4463 14.3181 15.494 15.0207L15.5506 16.6742C15.5579 16.8894 15.5219 17.1038 15.4447 17.3048C15.3674 17.5058 15.2505 17.6891 15.1009 17.844C14.9512 17.9988 14.772 18.1219 14.5737 18.206C14.3755 18.2901 14.1624 18.3334 13.9471 18.3333H8.195C7.77907 18.3333 7.37939 18.1718 7.08028 17.8828C6.78117 17.5938 6.60601 17.1999 6.59175 16.7842L6.53194 15.0397C5.57225 14.338 4.7918 13.4195 4.25409 12.3591C3.71637 11.2988 3.43659 10.1264 3.4375 8.9375C3.4375 4.76094 6.82344 1.375 11 1.375C15.1766 1.375 18.5625 4.76094 18.5625 8.9375ZM8.9375 20.625C8.75517 20.625 8.5803 20.5526 8.45137 20.4236C8.32244 20.2947 8.25 20.1198 8.25 19.9375C8.25 19.7552 8.32244 19.5803 8.45137 19.4514C8.5803 19.3224 8.75517 19.25 8.9375 19.25H13.0625C13.2448 19.25 13.4197 19.3224 13.5486 19.4514C13.6776 19.5803 13.75 19.7552 13.75 19.9375C13.75 20.1198 13.6776 20.2947 13.5486 20.4236C13.4197 20.5526 13.2448 20.625 13.0625 20.625H8.9375Z"
        fill="#00D6AF"
      />
    </svg>
  );
}

export function Setting({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.48719 7.68542C7.48719 8.31398 6.97633 8.82353 6.34616 8.82353C5.71599 8.82353 5.20514 8.31398 5.20514 7.68542C5.20514 7.05686 5.71599 6.54731 6.34616 6.54731C6.97633 6.54731 7.48719 7.05686 7.48719 7.68542ZM8.59547 7.11419C8.61881 7.11139 8.64257 7.10995 8.66667 7.10995L9.41026 7.10995C9.73596 7.10995 10 7.37331 10 7.69818C10 8.02306 9.73596 8.28642 9.41026 8.28642L8.66667 8.28642C8.64035 8.28642 8.61444 8.2847 8.58903 8.28137C8.32545 9.27087 7.42117 10 6.34616 10C5.27115 10 4.36688 9.27087 4.1033 8.28137C4.0779 8.2847 4.052 8.28642 4.02569 8.28642L0.589794 8.28642C0.264088 8.28642 5.09951e-05 8.02306 5.10235e-05 7.69818C5.10519e-05 7.37331 0.264088 7.10995 0.589794 7.10995L4.02569 7.10995C4.04978 7.10995 4.07353 7.11139 4.09686 7.11419C4.35187 6.11214 5.26222 5.37084 6.34616 5.37084C7.4301 5.37084 8.34046 6.11214 8.59547 7.11419ZM2.51281 2.31458C2.51281 1.68602 3.02367 1.17647 3.65384 1.17647C4.28401 1.17647 4.79486 1.68602 4.79486 2.31458C4.79486 2.94314 4.28401 3.45269 3.65384 3.45269C3.02367 3.45268 2.51281 2.94314 2.51281 2.31458ZM3.65384 1.49938e-07C2.57883 5.59578e-08 1.67455 0.729131 1.41097 1.71863C1.38556 1.7153 1.35965 1.71358 1.33333 1.71358L0.589743 1.71358C0.264037 1.71358 -2.19167e-07 1.97694 -2.47569e-07 2.30182C-2.7597e-07 2.62669 0.264037 2.89005 0.589743 2.89005L1.33333 2.89005C1.35743 2.89005 1.38119 2.88861 1.40453 2.88581C1.65954 3.88786 2.5699 4.62916 3.65384 4.62916C4.73778 4.62916 5.64813 3.88786 5.90314 2.88581C5.92647 2.88861 5.95022 2.89005 5.97431 2.89005L9.41021 2.89005C9.73591 2.89005 9.99995 2.62669 9.99995 2.30182C9.99995 1.97694 9.73591 1.71358 9.41021 1.71358L5.97431 1.71358C5.94801 1.71358 5.9221 1.7153 5.8967 1.71863C5.63312 0.729128 4.72885 2.43918e-07 3.65384 1.49938e-07Z"
        fill="white"
      />
    </svg>
  );
}

export function WrapNearEnter() {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.643865 6.14662C0.976847 6.14662 1.24765 6.41334 1.25534 6.74529L1.2555 6.75976V9.41008C1.2555 11.9652 3.18256 14.0287 5.55816 14.0697L5.6303 14.0703L12.8766 14.0703V12.583C12.8766 12.3746 13.0451 12.2057 13.2529 12.2057C13.3237 12.2057 13.3931 12.2257 13.453 12.2634L16.7914 14.3639C16.9674 14.4747 17.0206 14.7076 16.9101 14.884C16.88 14.9321 16.8394 14.9728 16.7914 15.003L13.453 17.1035C13.277 17.2143 13.0447 17.161 12.9342 16.9845C12.8966 16.9244 12.8766 16.8549 12.8766 16.784L12.8766 15.2966H5.6303C2.56203 15.2966 0.0822556 12.7066 0.0329834 9.5072L0.0322266 9.4101V6.75976C0.0322266 6.42114 0.306057 6.14662 0.643865 6.14662ZM4.44431 0.402549C4.48194 0.462645 4.50189 0.532159 4.50189 0.603109L4.50187 2.09042H11.3248C14.393 2.09042 16.8728 4.68045 16.9221 7.87984L16.9228 7.97696V10.6273C16.9228 10.9659 16.649 11.2404 16.3112 11.2404C15.9782 11.2404 15.7074 10.9737 15.6997 10.6418L15.6996 10.6273V7.97696C15.6996 5.42188 13.7725 3.35836 11.3969 3.31733L11.3248 3.31672H4.50187V4.80411C4.50187 5.01246 4.33339 5.18136 4.12553 5.18136C4.05475 5.18136 3.98541 5.16135 3.92547 5.12363L0.587107 3.0231C0.411065 2.91234 0.357927 2.67949 0.468416 2.50302C0.498542 2.45491 0.539115 2.41425 0.587107 2.38406L3.92547 0.28357C4.10151 0.172813 4.3338 0.22608 4.44429 0.402549H4.44431Z"
        fill="currentColor"
      />
      <path
        d="M11.2343 12.2581H10.3243L6.66426 6.70806V12.2581H5.75426V5.27806H6.66426L10.3243 10.8181V5.27806H11.2343V12.2581Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function WrapNearIconDark({
  large,
  forMobile,
}: {
  large?: boolean;
  forMobile?: boolean;
}) {
  return (
    <svg
      width={large ? '67' : '52'}
      height={large ? '33' : '26'}
      viewBox="0 0 52 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.5 16.75C51.5 19.9256 48.9256 22.5 45.75 22.5L18.75 22.5C18.3358 22.5 18 22.1642 18 21.75C18 21.3358 18.3358 21 18.75 21L45.75 21C48.0972 21 50 19.0972 50 16.75L50 8.64738C50 6.30017 48.0972 4.39738 45.75 4.39738L36.7756 4.39738L40.8602 0.22532C41.15 -0.0706605 41.6249 -0.0756902 41.9208 0.214084C42.2168 0.503858 42.2218 0.978706 41.9321 1.27468L40.3434 2.89738L45.75 2.89738C48.9256 2.89738 51.5 5.47174 51.5 8.64738L51.5 16.75Z"
        fill={forMobile ? '#7E8A93' : '#404E58'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.75C0 5.57436 2.57436 3 5.75 3L33.25 3C33.6642 3 34 3.33579 34 3.75C34 4.16421 33.6642 4.5 33.25 4.5L5.75 4.5C3.40279 4.5 1.5 6.40279 1.5 8.75L1.5 16.75C1.5 19.0972 3.40279 21 5.75 21L14.9416 21L10.7803 25.1613C10.4874 25.4542 10.0126 25.4542 9.71967 25.1613C9.42678 24.8684 9.42678 24.3935 9.71967 24.1006L11.3203 22.5H5.75C2.57436 22.5 0 19.9256 0 16.75L0 8.75Z"
        fill={forMobile ? '#7E8A93' : '#404E58'}
      />
      <path
        d="M15.434 10.174L13.382 16.75H12.254L10.67 11.53L9.086 16.75H7.958L5.894 10.174H7.01L8.522 15.694L10.154 10.174H11.27L12.866 15.706L14.354 10.174H15.434ZM23.0938 16.75H22.0018L17.6098 10.09V16.75H16.5178V8.374H17.6098L22.0018 15.022V8.374H23.0938V16.75ZM26.0473 9.274V12.07H29.0953V12.97H26.0473V15.85H29.4553V16.75H24.9553V8.374H29.4553V9.274H26.0473ZM36.0516 14.89H32.4036L31.7316 16.75H30.5796L33.6036 8.434H34.8636L37.8756 16.75H36.7236L36.0516 14.89ZM35.7396 14.002L34.2276 9.778L32.7156 14.002H35.7396ZM43.5975 16.75L41.6055 13.33H40.2855V16.75H39.1935V8.386H41.8935C42.5255 8.386 43.0575 8.494 43.4895 8.71C43.9295 8.926 44.2575 9.218 44.4735 9.586C44.6895 9.954 44.7975 10.374 44.7975 10.846C44.7975 11.422 44.6295 11.93 44.2935 12.37C43.9655 12.81 43.4695 13.102 42.8055 13.246L44.9055 16.75H43.5975ZM40.2855 12.454H41.8935C42.4855 12.454 42.9295 12.31 43.2255 12.022C43.5215 11.726 43.6695 11.334 43.6695 10.846C43.6695 10.35 43.5215 9.966 43.2255 9.694C42.9375 9.422 42.4935 9.286 41.8935 9.286H40.2855V12.454Z"
        fill={forMobile ? '#7E8A93' : '#9DA6AD'}
      />
    </svg>
  );
}

export function WrapNearIconLight() {
  return (
    <svg
      width="52"
      height="26"
      viewBox="0 0 52 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.5 16.75C51.5 19.9256 48.9256 22.5 45.75 22.5L18.75 22.5C18.3358 22.5 18 22.1642 18 21.75C18 21.3358 18.3358 21 18.75 21L45.75 21C48.0972 21 50 19.0972 50 16.75L50 8.64738C50 6.30017 48.0972 4.39738 45.75 4.39738L36.7756 4.39738L40.8602 0.22532C41.15 -0.0706605 41.6249 -0.0756902 41.9208 0.214084C42.2168 0.503858 42.2218 0.978706 41.9321 1.27468L40.3434 2.89738L45.75 2.89738C48.9256 2.89738 51.5 5.47174 51.5 8.64738L51.5 16.75Z"
        fill="#00C6A2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.75C0 5.57436 2.57436 3 5.75 3L33.25 3C33.6642 3 34 3.33579 34 3.75C34 4.16421 33.6642 4.5 33.25 4.5L5.75 4.5C3.40279 4.5 1.5 6.40279 1.5 8.75L1.5 16.75C1.5 19.0972 3.40279 21 5.75 21L14.9416 21L10.7803 25.1613C10.4874 25.4542 10.0126 25.4542 9.71967 25.1613C9.42678 24.8684 9.42678 24.3935 9.71967 24.1006L11.3203 22.5H5.75C2.57436 22.5 0 19.9256 0 16.75L0 8.75Z"
        fill="#00C6A2"
      />
      <path
        d="M15.434 10.174L13.382 16.75H12.254L10.67 11.53L9.086 16.75H7.958L5.894 10.174H7.01L8.522 15.694L10.154 10.174H11.27L12.866 15.706L14.354 10.174H15.434ZM23.0938 16.75H22.0018L17.6098 10.09V16.75H16.5178V8.374H17.6098L22.0018 15.022V8.374H23.0938V16.75ZM26.0473 9.274V12.07H29.0953V12.97H26.0473V15.85H29.4553V16.75H24.9553V8.374H29.4553V9.274H26.0473ZM36.0516 14.89H32.4036L31.7316 16.75H30.5796L33.6036 8.434H34.8636L37.8756 16.75H36.7236L36.0516 14.89ZM35.7396 14.002L34.2276 9.778L32.7156 14.002H35.7396ZM43.5975 16.75L41.6055 13.33H40.2855V16.75H39.1935V8.386H41.8935C42.5255 8.386 43.0575 8.494 43.4895 8.71C43.9295 8.926 44.2575 9.218 44.4735 9.586C44.6895 9.954 44.7975 10.374 44.7975 10.846C44.7975 11.422 44.6295 11.93 44.2935 12.37C43.9655 12.81 43.4695 13.102 42.8055 13.246L44.9055 16.75H43.5975ZM40.2855 12.454H41.8935C42.4855 12.454 42.9295 12.31 43.2255 12.022C43.5215 11.726 43.6695 11.334 43.6695 10.846C43.6695 10.35 43.5215 9.966 43.2255 9.694C42.9375 9.422 42.4935 9.286 41.8935 9.286H40.2855V12.454Z"
        fill="#ffffff"
      />
    </svg>
  );
}
