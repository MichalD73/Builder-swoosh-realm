export const PauseIcon = () => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="block h-full w-full"
  >
    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.6)" />
    <rect x="18" y="16" width="8" height="32" fill="white" />
    <rect x="38" y="16" width="8" height="32" fill="white" />
  </svg>
);

export const PlayIcon = () => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="block h-full w-full"
  >
    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.6)" />
    <path d="M24 16 L24 48 L48 32 Z" fill="white" />
  </svg>
);

export const MutedIcon = () => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="block h-full w-full"
  >
    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.6)" />
    <path
      d="m 14,25 v 14 h 8 l 10,6 v -26 l -10,6 z m 2,2 h 5 v 10 h -5 z m 7,0 7,-4 0,18 -7,-4 z"
      fill="white"
    />
    <path
      d="m 42,32 -6,6 1.6,1.6 6,-6 6,6 1.6,-1.6 -6,-6 6,-6 -1.6,-1.6 -6,6 -6,-6 -1.6,1.6 z"
      fill="white"
    />
  </svg>
);

export const UnmutedIcon = () => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className="block h-full w-full"
  >
    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.6)" />
    <path
      d="m 14,25 v 14 h 8 l 10,6 v -26 l -10,6 z m 2,2 h 5 v 10 h -5 z m 7,0 7,-4 0,18 -7,-4 z"
      fill="white"
    />
    <path
      d="M 40 24 Q 46 30 40 40"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M 44 20 Q 52 30 44 44"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);
