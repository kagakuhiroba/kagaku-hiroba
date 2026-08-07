export function InkSplatter() {
  return (
    <svg
      className="hero__splatter"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="hero__splatter-blue">
        <path
          d="M80,10 C130,-25 210,5 205,55 C270,35 330,60 310,110
             C380,105 420,160 375,205 C420,245 400,315 335,320
             C345,375 275,410 220,375 C195,420 110,415 100,365
             C40,375 -10,325 20,275 C-30,255 -25,190 35,175
             C15,120 35,60 80,10 Z"
        />
        <circle cx="340" cy="215" r="19" />
        <circle cx="375" cy="255" r="10" />
        <circle cx="398" cy="292" r="6" />
        <path d="M420,155 C440,145 460,155 452,175 C446,192 415,185 420,155 Z" />
        <ellipse cx="50" cy="330" rx="13" ry="8" transform="rotate(-20 50 330)" />
        <circle cx="15" cy="365" r="5" />
      </g>
      <g className="hero__splatter-orange">
        <path
          d="M900,440 C955,400 1040,425 1030,480 C1100,465 1150,505 1120,555
             C1190,560 1215,625 1160,655 C1195,690 1165,755 1100,745
             C1095,795 1015,810 985,765 C930,795 855,760 875,705
             C815,700 795,635 850,605 C825,555 855,495 900,440 Z"
        />
        <circle cx="1150" cy="500" r="20" />
        <circle cx="1185" cy="545" r="11" />
        <circle cx="1205" cy="585" r="6" />
        <path d="M840,590 C818,575 795,585 805,608 C813,627 848,618 840,590 Z" />
        <ellipse cx="1225" cy="430" rx="14" ry="8" transform="rotate(25 1225 430)" />
        <circle cx="1255" cy="400" r="6" />
      </g>
    </svg>
  )
}
