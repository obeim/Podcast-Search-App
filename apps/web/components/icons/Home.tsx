const HomeIcon = ({ active }: { active?: boolean }) => {
  return active ? (
    <svg
      width="18px"
      height="16px"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.69 14.6901C5.26 24.1201 -0.720003 33.8201 0.0699967 37.9601L4.53 33.5001C5.48 30.2501 10.33 23.7301 17.03 17.0301C23.73 10.3301 30.24 5.47006 33.5 4.53006L37.96 0.0700577C33.82 -0.719942 24.12 5.26006 14.69 14.6901Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M19.99 36.3401C29.3788 36.3401 36.99 28.7289 36.99 19.3401C36.99 9.95125 29.3788 2.34009 19.99 2.34009C10.6011 2.34009 2.98999 9.95125 2.98999 19.3401C2.98999 28.7289 10.6011 36.3401 19.99 36.3401Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M37.96 0.0700684L33.5 4.53007C34.37 4.28007 35.01 4.29007 35.36 4.63007C37 6.27007 31.45 14.4701 22.96 22.9601C14.48 31.4501 6.27001 37.0001 4.63001 35.3601C4.29001 35.0201 4.28001 34.3701 4.53001 33.5001L0.0700073 37.9601C0.170007 38.4901 0.370007 38.9501 0.710007 39.2801C3.64001 42.2101 14.65 35.9501 25.3 25.3001C35.95 14.6501 42.21 3.64007 39.28 0.710068C38.94 0.370068 38.49 0.170068 37.96 0.0700684Z"
        fill="url(#paint2_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="51.5874"
          y1="-17.8857"
          x2="9.8935"
          y2="23.8082"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E86492" />
          <stop offset="1" stop-color="#6061C1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="32.3339"
          y1="6.99839"
          x2="9.47039"
          y2="29.8619"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E86492" />
          <stop offset="1" stop-color="#6061C1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="56.891"
          y1="-12.582"
          x2="15.1972"
          y2="29.1119"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E86492" />
          <stop offset="1" stop-color="#6061C1" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="18px"
      height="16px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
    >
      <title>Icon</title>
      <path
        d="M5.42,26.29C2.29,30.9.64,34.83,1.07,37.06a2.35,2.35,0,0,0,.61,1.26C4.45,41.1,14.91,35.15,25,25S41.1,4.45,38.32,1.67a2.35,2.35,0,0,0-1.26-.61c-2.09-.4-5.7,1-10,3.82"
        fill="none"
        stroke="#fff"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <circle
        cx="19.99"
        cy="19.34"
        r="16.01"
        fill="none"
        stroke="#fff"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </svg>
  );
};

export default HomeIcon;
