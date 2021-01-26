import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 7010 1280" {...props}>
      <g id="layer101" fill="#7b2450" stroke="none">
      <path d="M538 1270 c-147 -26 -292 -108 -379 -212 -59 -72 -114 -176 -136 -261 -21 -81 -21 -233 0 -314 103 -395 539 -594 907 -412 165 82 297 253 335 434 80 385 -200 750 -592 770 -48 2 -109 0 -135 -5z"/>
      </g>
      <g id="layer102" fill="#c31b25" stroke="none">
      <path d="M357 1013 c-4 -3 -7 -21 -7 -39 0 -38 -28 -61 -57 -46 -10 5 -24 7 -32 4 -8 -3 -11 0 -7 7 5 7 1 9 -8 5 -9 -3 -16 -16 -16 -29 0 -28 20 -85 29 -85 4 0 7 -10 7 -22 -1 -19 5 -24 32 -26 24 -2 31 -7 24 -15 -26 -32 -23 -72 10 -122 74 -115 290 -295 352 -295 37 0 103 29 149 64 69 53 113 188 89 271 -7 26 -14 31 -53 36 l-44 6 45 2 45 3 -63 12 c-34 7 -77 23 -94 36 -28 20 -34 21 -68 10 -70 -23 -112 8 -89 67 13 35 11 50 -7 57 -22 9 -44 -11 -44 -39 0 -44 -10 -55 -50 -55 -39 0 -97 17 -88 25 3 3 19 0 36 -6 17 -6 37 -9 43 -7 6 2 -12 11 -40 20 -28 9 -49 12 -45 7 3 -5 0 -9 -6 -9 -6 0 -16 12 -22 26 -11 24 -9 43 19 127 4 12 0 17 -14 17 -11 0 -23 -3 -26 -7z m-7 -144 l45 -41 -44 33 c-24 19 -53 42 -65 52 -19 17 -19 17 -1 8 11 -6 40 -29 65 -52z m58 -180 c4 -10 -1 -9 -15 4 -11 9 -23 17 -26 17 -11 0 -8 -48 3 -55 6 -3 10 -2 10 4 0 6 7 8 15 5 23 -9 18 -26 -6 -22 -30 4 -43 29 -35 62 6 26 8 27 28 14 12 -8 24 -21 26 -29z m141 27 c27 -14 51 -53 51 -81 0 -23 -38 -55 -65 -55 -38 0 -75 21 -91 51 -19 38 -18 55 6 79 24 24 60 26 99 6z m118 -22 c-3 -4 -2 -16 4 -28 10 -20 10 -20 -5 -2 -19 24 -20 36 -4 36 6 0 8 -3 5 -6z m62 -13 c8 -14 7 -20 -4 -25 -8 -3 -17 -1 -20 4 -4 6 0 10 7 10 8 1 6 6 -6 15 -17 13 -17 15 -3 15 9 0 21 -9 26 -19z m140 -88 c0 -11 -3 -13 -6 -5 -7 17 -28 15 -44 -5 -12 -15 -12 -16 4 -10 12 5 16 3 11 -5 -5 -8 -2 -9 10 -5 10 4 15 3 11 -3 -10 -16 -45 -12 -52 6 -4 11 1 22 12 30 27 20 55 18 54 -3z m-309 -62 c-23 -4 -36 -12 -38 -25 -3 -13 0 -16 9 -11 8 5 10 4 5 -3 -13 -22 13 -12 28 10 9 12 16 17 16 11 0 -22 -31 -44 -54 -37 -30 9 -31 11 -12 39 12 19 24 25 49 24 l32 -2 -35 -6z m193 -15 c49 -46 45 -119 -8 -132 -83 -21 -171 80 -116 135 30 30 90 28 124 -3z"/>
      <path d="M457 702 c-24 -27 -21 -50 12 -83 38 -37 84 -39 107 -4 19 29 12 57 -23 85 -32 25 -75 26 -96 2z"/>
      <path d="M636 508 c-22 -30 -20 -42 9 -76 48 -57 135 -47 135 14 0 66 -109 113 -144 62z"/>
      </g>
      <g id="layer103" fill="#64544d" stroke="none">
      <path d="M357 1013 c-4 -3 -7 -23 -7 -44 0 -41 -24 -58 -57 -41 -10 5 -24 7 -32 4 -8 -3 -11 0 -7 7 5 7 1 9 -8 5 -9 -3 -16 -16 -16 -29 0 -28 20 -85 29 -85 4 0 7 -10 7 -22 -1 -19 5 -24 32 -26 24 -2 31 -7 24 -15 -26 -32 -23 -72 10 -122 75 -116 289 -295 353 -295 39 0 123 41 165 81 59 57 93 172 73 249 -8 32 -13 36 -54 41 l-44 6 45 2 c45 3 44 3 -24 17 -43 8 -78 22 -92 35 -22 21 -27 21 -63 9 -22 -7 -50 -10 -64 -6 -29 7 -43 46 -27 76 15 27 12 47 -6 54 -22 9 -44 -11 -44 -39 0 -44 -10 -55 -50 -55 -39 0 -97 17 -88 25 3 3 19 0 36 -6 17 -6 37 -9 43 -7 6 2 -12 11 -40 20 -28 9 -49 12 -45 7 3 -5 0 -9 -6 -9 -6 0 -16 12 -22 26 -11 24 -9 43 19 127 4 12 0 17 -14 17 -11 0 -23 -3 -26 -7z m-7 -143 l45 -42 -44 33 c-24 19 -53 42 -65 52 -19 17 -19 17 -1 8 11 -5 40 -28 65 -51z m110 -76 c0 -2 -13 2 -30 11 -16 9 -30 18 -30 21 0 2 14 -2 30 -11 17 -9 30 -18 30 -21z m-52 -105 c4 -10 -1 -9 -15 4 -11 9 -23 17 -26 17 -11 0 -8 -48 3 -55 6 -3 10 -2 10 4 0 6 7 8 15 5 23 -9 18 -26 -6 -22 -30 4 -43 29 -35 62 6 26 8 27 28 14 12 -8 24 -21 26 -29z m149 21 c79 -48 37 -148 -52 -126 -14 4 -23 10 -21 15 3 5 -2 8 -12 7 -10 0 -16 6 -16 16 1 10 -2 15 -7 12 -5 -2 -11 6 -15 20 -7 31 12 69 32 62 9 -3 12 -1 9 4 -11 18 49 11 82 -10z m110 -16 c-3 -4 -1 -16 5 -28 10 -19 10 -20 -5 -7 -19 16 -23 41 -5 41 6 0 8 -3 5 -6z m62 -13 c8 -14 7 -20 -4 -25 -8 -3 -17 -1 -20 4 -4 6 0 10 7 10 8 1 6 6 -6 15 -17 13 -17 15 -3 15 9 0 21 -9 26 -19z m140 -88 c0 -11 -3 -13 -6 -5 -7 17 -28 15 -44 -5 -12 -15 -12 -16 4 -10 12 5 16 3 11 -5 -5 -8 -2 -9 10 -5 10 4 15 3 11 -3 -10 -16 -45 -12 -52 6 -4 11 1 22 12 30 27 20 55 18 54 -3z m-309 -62 c-23 -4 -36 -12 -38 -25 -3 -13 0 -16 9 -11 8 5 10 4 5 -3 -13 -22 13 -12 28 10 9 12 16 17 16 11 0 -22 -31 -44 -54 -37 -30 9 -31 11 -12 39 12 19 24 25 49 24 l32 -2 -35 -6z m199 -20 c68 -63 12 -158 -73 -125 -9 3 -13 10 -10 15 3 5 -1 6 -9 4 -18 -8 -45 24 -53 62 -14 71 84 101 145 44z"/>
      <path d="M220 765 c-10 -12 -9 -16 4 -21 9 -3 25 -4 36 -1 17 4 19 2 13 -21 -6 -24 -5 -26 10 -13 22 18 21 27 -3 51 -24 24 -43 25 -60 5z"/>
      </g>
      <g id="layer104" fill="#a55f2f" stroke="none">
      <path d="M357 1013 c-4 -3 -7 -23 -7 -44 0 -41 -24 -58 -57 -41 -10 5 -24 7 -32 4 -8 -3 -11 0 -7 7 5 7 1 9 -8 5 -33 -13 -10 -104 29 -122 14 -7 25 -18 25 -27 0 -8 7 -15 16 -15 12 0 14 -3 6 -12 -26 -33 -23 -73 10 -123 75 -116 289 -295 353 -295 39 0 123 41 165 81 59 57 93 172 73 249 -8 32 -13 36 -54 41 l-44 6 45 2 c45 3 44 3 -24 17 -43 8 -78 22 -92 35 -22 21 -27 21 -63 9 -22 -7 -50 -10 -64 -6 -29 7 -43 46 -27 76 15 27 12 47 -6 54 -22 9 -44 -11 -44 -39 0 -44 -10 -55 -50 -55 -39 0 -97 17 -88 25 3 3 19 0 36 -6 17 -6 37 -9 43 -7 6 2 -12 11 -40 20 -28 9 -49 12 -45 7 3 -5 0 -9 -6 -9 -6 0 -16 12 -22 26 -11 24 -9 43 19 127 4 12 0 17 -14 17 -11 0 -23 -3 -26 -7z m-7 -143 l45 -42 -44 33 c-24 19 -53 42 -65 52 -19 17 -19 17 -1 8 11 -5 40 -28 65 -51z m110 -76 c0 -2 -13 2 -30 11 -16 9 -30 18 -30 21 0 2 14 -2 30 -11 17 -9 30 -18 30 -21z m-52 -123 c3 -29 1 -32 -19 -29 -30 4 -43 29 -35 62 6 26 8 27 29 13 13 -9 23 -27 25 -46z m149 39 c79 -48 37 -148 -52 -126 -14 4 -23 10 -21 15 3 5 -2 8 -12 7 -10 0 -16 6 -16 16 1 10 -2 15 -7 12 -5 -2 -11 6 -15 20 -7 31 12 69 32 62 9 -3 12 -1 9 4 -11 18 49 11 82 -10z m173 -30 c9 -17 7 -20 -16 -26 -31 -8 -57 5 -62 30 -5 25 64 22 78 -4z m140 -81 c0 -23 -22 -49 -41 -49 -28 0 -37 30 -14 46 22 17 55 18 55 3z m-291 -88 c-12 -33 -27 -42 -58 -34 -25 6 -26 12 -5 41 10 14 26 22 44 22 28 0 28 -1 19 -29z m180 0 c68 -63 12 -158 -73 -125 -9 3 -13 10 -10 15 3 5 -1 6 -9 4 -18 -8 -45 24 -53 62 -14 71 84 101 145 44z"/>
      <path d="M983 782 c-28 -4 -64 -48 -56 -69 5 -12 16 -14 51 -10 53 6 92 38 73 60 -14 17 -38 24 -68 19z"/>
      <path d="M800 772 c23 -15 120 -24 120 -12 0 5 -12 10 -27 10 -16 0 -46 3 -68 6 -27 3 -35 2 -25 -4z"/>
      <path d="M1037 705 c-11 -7 -36 -16 -57 -20 l-37 -6 -5 -73 c-9 -144 -101 -244 -250 -271 -44 -8 -61 -41 -32 -62 53 -39 162 -23 252 37 118 79 184 220 167 357 -7 57 -10 60 -38 38z"/>
      </g>
      <g id="layer105" fill="#4eb059" stroke="none">
      <path d="M364 696 c-7 -19 -1 -29 21 -32 19 -3 19 20 0 36 -12 10 -16 9 -21 -4z"/>
      <path d="M669 676 c7 -8 21 -12 31 -9 27 7 15 23 -17 23 -21 0 -23 -3 -14 -14z"/>
      <path d="M821 586 c-9 -10 -8 -15 3 -19 14 -5 36 10 36 25 0 13 -27 9 -39 -6z"/>
      <path d="M531 516 c-9 -11 -7 -15 8 -19 22 -5 31 0 31 20 0 17 -24 17 -39 -1z"/>
      <path d="M260 812 c0 -5 7 -15 15 -22 8 -7 15 -8 15 -2 0 5 -7 15 -15 22 -8 7 -15 8 -15 2z"/>
      <path d="M224 766 c-18 -14 -18 -15 9 -21 32 -8 42 -2 34 20 -8 19 -18 19 -43 1z"/>
      <path d="M287 744 c-4 -4 -7 -14 -7 -23 0 -11 3 -12 11 -4 6 6 10 16 7 23 -2 6 -7 8 -11 4z"/>
      </g>
      <g id="layer106" fill="#b05458" stroke="none">
      <path d="M538 1270 c-147 -26 -292 -108 -379 -212 -59 -72 -114 -176 -136 -261 -21 -81 -21 -233 0 -314 103 -395 539 -594 907 -412 165 82 297 253 335 434 80 385 -200 750 -592 770 -48 2 -109 0 -135 -5z m-128 -245 c11 -13 10 -22 -3 -51 -10 -19 -17 -45 -17 -58 0 -25 3 -27 88 -56 l52 -19 0 25 c0 41 18 64 49 64 43 0 58 -23 42 -66 -7 -20 -11 -38 -8 -40 12 -12 176 -28 297 -28 74 -1 140 -4 147 -9 20 -13 36 -111 31 -195 -3 -61 -11 -93 -33 -138 -61 -126 -192 -214 -315 -214 -85 0 -114 18 -108 67 4 32 0 37 -63 83 -99 72 -193 164 -240 233 -22 34 -46 62 -52 62 -7 0 -13 10 -15 23 -2 13 -10 22 -21 22 -9 0 -26 6 -36 14 -19 14 -19 15 11 32 31 18 31 19 19 54 -24 68 -28 115 -10 130 14 12 22 11 50 -4 46 -25 65 -16 65 32 0 21 3 42 7 45 12 13 50 7 63 -8z"/>
      <path d="M360 986 c0 -32 -20 -66 -40 -66 -5 0 -16 -3 -26 -7 -13 -5 -15 -3 -9 7 5 9 4 11 -3 6 -6 -4 -21 -2 -32 4 -17 9 -20 8 -20 -13 0 -36 20 -87 34 -87 17 0 48 -35 39 -43 -3 -4 2 -7 12 -7 12 0 15 -3 8 -12 -26 -33 -23 -75 9 -124 76 -117 294 -297 353 -293 16 2 35 5 40 8 6 3 12 6 15 6 13 2 87 45 105 62 49 44 75 113 77 203 2 70 -12 89 -66 92 -25 1 -22 2 14 8 42 7 43 7 10 9 -53 2 -109 20 -131 42 -19 19 -22 20 -64 4 -44 -17 -81 -12 -54 7 10 6 7 7 -8 3 -18 -5 -24 -1 -29 20 -4 15 -1 37 7 51 15 28 2 48 -27 42 -13 -2 -21 -15 -25 -42 -3 -21 -12 -42 -20 -47 -25 -17 -127 11 -114 31 3 5 0 12 -6 16 -8 4 -9 3 -5 -4 9 -16 -7 -15 -22 0 -17 17 -15 73 3 109 17 32 13 49 -11 49 -9 0 -14 -11 -14 -34z m-16 -106 c15 -17 48 -42 72 -56 24 -14 44 -28 44 -31 0 -2 -22 8 -48 24 -50 29 -112 77 -112 87 0 14 17 4 44 -24z m48 -167 c20 -23 29 -61 16 -69 -5 -3 -20 -3 -34 0 -19 5 -24 13 -24 40 0 49 15 59 42 29z m158 2 c59 -30 68 -94 19 -124 -25 -15 -37 -17 -60 -9 -16 5 -27 14 -24 18 3 4 -3 7 -13 6 -10 0 -16 6 -16 16 1 10 -2 16 -6 13 -4 -3 -11 2 -14 11 -25 66 41 107 114 69z m180 -30 c15 -18 4 -35 -26 -39 -22 -4 -54 21 -54 41 0 19 64 17 80 -2z m140 -93 c0 -25 -19 -42 -47 -42 -25 0 -32 27 -11 48 19 19 58 15 58 -6z m-155 -52 c7 0 27 -13 44 -29 37 -35 43 -87 12 -115 -22 -20 -98 -19 -94 1 2 7 -3 10 -11 7 -17 -6 -56 41 -56 68 0 43 44 84 78 72 8 -2 20 -4 27 -4z m-129 -14 c-1 -7 -9 -24 -17 -36 -12 -18 -21 -22 -42 -16 -31 7 -34 22 -10 48 19 21 72 25 69 4z"/>
      <path d="M990 780 c-8 -5 -17 -7 -21 -4 -12 7 -48 -46 -42 -63 8 -21 86 -10 113 17 11 11 20 22 20 25 0 12 -57 33 -70 25z"/>
      <path d="M803 774 c4 -4 14 -9 22 -10 8 -1 33 -5 55 -9 26 -4 40 -3 40 4 0 6 -13 11 -29 11 -16 0 -44 3 -62 6 -19 4 -30 3 -26 -2z"/>
      <path d="M1050 696 c0 -17 -7 -26 -23 -30 -30 -7 -54 -53 -29 -53 10 0 23 4 30 10 7 5 15 7 18 5 3 -3 -8 -12 -24 -19 -21 -9 -29 -20 -30 -40 -3 -107 -89 -220 -187 -245 -15 -4 -30 -16 -35 -28 -8 -19 -9 -19 -9 -2 -1 16 -3 17 -18 5 -11 -10 -14 -10 -9 -1 5 8 -1 12 -19 12 -15 0 -35 4 -45 10 -27 14 -40 -28 -14 -47 53 -39 162 -23 252 37 118 79 184 220 167 357 -6 53 -25 74 -25 29z"/>
      </g>
      <g id="layer107" fill="#d79c16" stroke="none">
      <path d="M360 986 c0 -36 -21 -66 -46 -66 -24 0 86 -91 140 -116 28 -12 45 -23 38 -23 -23 -1 -106 46 -157 89 -28 23 -63 48 -79 56 l-28 16 7 -44 c6 -34 17 -52 54 -86 32 -29 42 -45 34 -50 -22 -14 -18 -67 9 -113 52 -88 291 -299 339 -299 46 0 136 44 179 89 53 54 72 106 71 195 0 70 -13 86 -70 87 -20 0 -56 4 -81 9 -34 6 -21 7 50 4 97 -3 102 0 18 11 -26 3 -63 17 -82 30 -34 23 -37 23 -72 9 -65 -27 -115 22 -83 82 15 28 2 48 -27 42 -14 -2 -20 -14 -22 -41 -4 -49 -31 -63 -89 -48 -62 17 -93 46 -93 87 0 19 7 48 15 65 17 32 13 49 -11 49 -9 0 -14 -11 -14 -34z m39 -282 c35 -44 23 -72 -25 -60 -19 5 -24 13 -24 40 0 53 17 60 49 20z m172 -3 c60 -60 27 -127 -59 -122 -33 2 -82 53 -82 87 0 68 87 89 141 35z m160 -17 c11 -14 10 -18 -6 -30 -10 -8 -23 -14 -29 -14 -15 0 -46 31 -46 47 0 19 64 17 81 -3z m139 -92 c0 -25 -19 -42 -47 -42 -25 0 -32 27 -11 48 19 19 58 15 58 -6z m-153 -52 c28 0 73 -56 73 -91 0 -46 -25 -69 -73 -69 -31 0 -46 7 -73 34 -35 35 -42 63 -23 97 12 23 47 40 67 33 8 -2 20 -4 29 -4z m-127 -14 c0 -8 -8 -24 -18 -36 -14 -18 -25 -22 -45 -16 -31 7 -34 22 -10 48 19 21 73 25 73 4z"/>
      </g>
      <g id="layer108" fill="#ee4e7a" stroke="none">
      <path d="M538 1270 c-147 -26 -292 -108 -379 -212 -59 -72 -114 -176 -136 -261 -21 -81 -21 -233 0 -314 103 -395 539 -594 907 -412 165 82 297 253 335 434 80 385 -200 750 -592 770 -48 2 -109 0 -135 -5z m-128 -245 c11 -13 10 -22 -3 -51 -10 -19 -17 -45 -17 -58 0 -25 3 -27 88 -56 l52 -19 0 25 c0 41 18 64 49 64 43 0 58 -23 42 -66 -7 -20 -11 -38 -8 -40 12 -12 176 -28 297 -28 74 -1 140 -4 147 -9 20 -13 36 -111 31 -195 -3 -61 -11 -93 -33 -138 -61 -126 -192 -214 -315 -214 -85 0 -114 18 -108 67 4 32 0 37 -63 83 -99 72 -193 164 -240 233 -23 35 -47 61 -55 59 -9 -2 -14 6 -14 23 0 20 -5 25 -24 25 -13 0 -29 7 -36 15 -10 12 -7 18 18 32 29 16 29 18 17 53 -24 68 -28 115 -10 130 14 12 22 11 50 -4 46 -25 65 -16 65 32 0 21 3 42 7 45 12 13 50 7 63 -8z"/>
      <path d="M1050 690 c0 -11 -6 -20 -14 -20 -17 0 -46 -27 -46 -42 0 -6 12 -8 30 -4 39 7 38 -1 -2 -19 -28 -12 -29 -14 -10 -15 12 0 22 -4 22 -10 0 -5 -8 -10 -19 -10 -15 0 -20 -10 -25 -45 -13 -82 -94 -173 -181 -202 -18 -6 -29 -17 -29 -27 1 -9 -2 -16 -7 -16 -5 0 -9 6 -9 13 0 9 -3 8 -9 -2 -7 -11 -10 -11 -17 1 -11 18 -80 33 -88 19 -10 -15 4 -40 27 -47 12 -4 45 -7 74 -7 155 3 315 162 323 323 4 78 0 130 -10 130 -5 0 -10 -9 -10 -20z"/>
      <path d="M3304 920 c-36 -14 -54 -50 -54 -106 0 -91 50 -129 186 -141 l76 -6 -7 -36 c-8 -47 -46 -81 -90 -81 -24 0 -35 5 -40 19 -6 19 -59 36 -77 25 -16 -10 -38 -71 -32 -87 11 -29 238 -38 300 -12 53 22 64 60 64 214 0 122 1 132 22 151 30 27 15 52 -38 63 -31 6 -43 4 -65 -12 -26 -20 -27 -20 -89 0 -65 20 -121 23 -156 9z m189 -92 c9 -11 17 -35 17 -53 0 -25 -5 -34 -22 -39 -41 -11 -75 -6 -98 12 -19 16 -22 24 -16 56 11 58 78 72 119 24z"/>
      <path d="M5171 916 c-78 -43 -63 -185 24 -222 19 -8 69 -17 110 -21 62 -5 75 -9 75 -23 0 -31 -22 -80 -40 -90 -30 -16 -78 -12 -92 9 -7 10 -27 21 -45 25 -29 7 -33 4 -48 -24 -26 -50 -17 -74 30 -82 81 -14 218 -9 255 10 52 26 60 50 60 198 0 116 2 134 20 157 25 31 26 54 3 61 -61 17 -80 16 -105 -3 -25 -20 -26 -20 -81 -1 -65 23 -131 25 -166 6z m183 -77 c20 -16 26 -29 26 -59 0 -37 -2 -39 -35 -46 -72 -13 -117 24 -95 80 18 47 62 58 104 25z"/>
      <path d="M6277 916 c-84 -31 -113 -89 -105 -211 7 -103 45 -167 123 -208 49 -25 201 -31 228 -8 19 15 22 43 7 71 -10 18 -13 18 -51 5 -62 -22 -122 -19 -145 6 -16 18 -19 37 -19 124 0 95 2 105 24 129 33 35 69 40 135 18 31 -10 58 -17 61 -14 3 3 5 20 5 37 0 25 -6 35 -27 45 -43 19 -190 23 -236 6z"/>
      <path d="M6750 921 c-100 -20 -139 -76 -140 -196 0 -100 15 -143 65 -192 50 -47 126 -70 198 -58 91 16 127 60 127 157 0 87 -8 92 -144 96 l-116 4 6 27 c9 36 19 53 43 75 26 23 101 24 156 2 37 -16 40 -16 52 0 7 10 13 23 13 29 0 48 -146 79 -260 56z m115 -264 c14 -11 17 -21 11 -47 -3 -18 -11 -39 -17 -47 -16 -19 -73 -16 -91 5 -18 20 -32 77 -23 92 9 15 98 12 120 -3z"/>
      <path d="M1480 896 c0 -21 6 -25 33 -28 l32 -3 3 -242 2 -242 -32 -3 c-28 -2 -33 -7 -33 -28 l0 -25 190 0 c160 0 197 3 237 18 57 22 86 59 94 119 19 140 -91 238 -269 238 l-57 0 0 69 c0 91 5 101 45 101 37 0 48 10 39 34 -5 14 -27 16 -145 16 l-139 0 0 -24z m351 -293 c28 -28 35 -89 15 -136 -18 -44 -67 -70 -124 -65 l-37 3 -3 114 -3 113 66 -4 c49 -3 71 -9 86 -25z"/>
      <path d="M2053 905 c-7 -20 5 -32 37 -37 l25 -3 3 -131 c3 -144 -5 -180 -43 -194 -14 -5 -25 -16 -25 -24 0 -28 27 -37 107 -34 l78 3 5 190 5 190 28 3 c23 3 28 8 25 25 -3 21 -8 22 -121 25 -100 2 -118 0 -124 -13z"/>
      <path d="M2350 897 c0 -13 34 -70 75 -128 41 -57 88 -130 105 -161 l31 -58 -61 0 c-33 0 -76 6 -94 14 -41 17 -56 6 -56 -41 l0 -33 183 2 182 3 -3 24 c-1 14 -35 77 -76 140 -78 124 -106 174 -106 191 0 15 79 12 136 -5 27 -8 52 -15 55 -15 11 0 16 46 8 68 -8 21 -13 22 -194 22 l-185 0 0 -23z"/>
      <path d="M2800 894 c0 -17 26 -63 71 -125 66 -92 128 -194 129 -211 0 -14 -117 -8 -154 7 -36 15 -36 15 -47 -12 -22 -57 -20 -58 179 -61 l182 -2 0 23 c0 13 -14 45 -32 73 -69 107 -158 257 -158 265 0 14 82 10 138 -6 29 -9 57 -13 62 -10 17 10 12 72 -6 79 -9 3 -94 6 -190 6 l-174 0 0 -26z"/>
      <path d="M3750 896 c0 -19 6 -25 28 -28 l27 -3 3 -242 2 -243 -30 0 c-27 0 -30 -3 -30 -30 l0 -30 235 0 235 0 5 23 c7 26 -9 77 -24 77 -5 0 -40 -7 -76 -15 -37 -9 -93 -15 -124 -13 l-56 3 -3 92 -3 92 113 3 113 3 3 33 3 32 -115 0 -116 0 0 88 c0 123 4 132 52 132 35 0 39 2 36 23 -3 21 -6 22 -140 25 l-138 3 0 -25z"/>
      <path d="M4260 895 c0 -21 5 -25 30 -25 l30 0 0 -153 c0 -159 -4 -177 -43 -177 -14 0 -18 -6 -15 -27 3 -28 3 -28 91 -31 l87 -3 0 113 c0 62 3 150 7 196 l6 82 29 0 c25 0 29 4 26 23 -3 21 -7 22 -125 25 l-123 3 0 -26z"/>
      <path d="M4560 896 c0 -19 6 -25 28 -28 l27 -3 3 -131 c3 -140 -6 -183 -38 -191 -24 -6 -27 -48 -4 -57 9 -3 45 -6 80 -6 57 0 64 2 64 20 0 25 -3 25 56 -2 62 -27 150 -30 187 -5 36 24 47 72 47 214 0 128 4 153 25 153 16 0 26 25 18 45 -4 13 -20 15 -82 13 l-76 -3 -6 -145 c-4 -80 -12 -157 -18 -173 -22 -56 -100 -57 -121 -1 -6 15 -9 81 -8 148 l3 121 28 3 c21 3 27 9 27 28 l0 24 -120 0 -120 0 0 -24z"/>
      <path d="M5617 913 c-17 -17 -6 -42 21 -45 l27 -3 3 -143 3 -143 -31 -29 c-55 -52 -38 -70 66 -70 57 0 64 2 64 20 0 25 -3 25 56 -2 33 -14 69 -22 112 -22 55 0 66 4 90 27 27 27 27 30 30 170 3 162 7 187 27 187 19 0 27 16 20 40 -6 19 -14 21 -83 18 l-77 -3 -6 -150 c-3 -89 -10 -159 -18 -173 -27 -51 -107 -46 -122 8 -9 31 -11 217 -3 248 4 15 14 22 30 22 27 0 37 12 28 34 -5 13 -25 16 -118 16 -62 0 -116 -3 -119 -7z"/>
      <path d="M2120 407 c-33 -17 -39 -66 -10 -92 24 -22 101 -25 124 -5 21 17 20 53 -1 78 -23 27 -80 36 -113 19z"/>
      <path d="M4327 408 c-25 -9 -28 -14 -25 -52 3 -37 6 -42 40 -53 45 -15 104 -1 113 26 10 32 -15 70 -54 81 -41 11 -38 11 -74 -2z"/>
      </g>
      <g id="layer109" fill="#e4934e" stroke="none">
      <path d="M235 898 c8 -48 18 -64 45 -73 11 -3 22 -15 25 -26 4 -10 11 -17 16 -14 13 9 11 -10 -5 -49 -13 -32 -12 -37 14 -82 55 -98 270 -286 337 -296 18 -2 30 -1 27 3 -2 4 2 10 8 12 7 3 3 6 -8 6 -37 2 -84 54 -84 93 0 18 4 38 8 44 14 21 52 34 82 29 46 -8 69 -26 87 -67 15 -34 18 -36 33 -23 22 20 60 97 60 121 -1 18 -1 18 -12 -1 -20 -36 -35 -41 -62 -22 -15 11 -16 18 -8 34 14 25 59 38 78 22 12 -10 14 -3 14 44 0 63 3 61 -112 72 -43 5 -65 11 -61 18 3 6 1 7 -5 3 -7 -4 -38 -2 -69 3 -32 6 -74 13 -93 16 -19 3 -36 10 -38 15 -2 5 -9 7 -17 4 -22 -9 -95 29 -165 86 -36 28 -73 56 -84 62 -17 9 -18 7 -11 -34z m298 -167 c58 -22 86 -91 55 -134 -27 -36 -110 -24 -144 21 -15 19 -18 70 -6 88 9 14 43 33 59 34 6 0 23 -4 36 -9z m-143 -11 c9 -6 17 -5 21 2 4 7 9 7 13 -1 4 -6 3 -11 -3 -11 -6 0 -7 -14 -4 -34 6 -39 -6 -50 -40 -37 -29 11 -37 28 -30 64 6 28 18 33 43 17z m331 -19 c14 -2 19 -34 8 -47 -18 -22 -55 -17 -73 11 -9 14 -14 29 -12 34 5 7 43 8 77 2z m99 -36 c10 -12 10 -15 -4 -15 -9 0 -16 7 -16 15 0 8 2 15 4 15 2 0 9 -7 16 -15z m-230 -140 c0 -35 -23 -57 -55 -53 -24 2 -30 8 -30 28 0 26 27 46 64 46 15 0 21 -7 21 -21z"/>
      <path d="M960 767 c-17 -8 -25 -21 -25 -37 0 -22 4 -25 38 -24 56 2 102 52 61 68 -24 9 -46 7 -74 -7z"/>
      <path d="M853 763 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z"/>
      <path d="M1050 693 c0 -13 -6 -23 -14 -23 -17 0 -46 -27 -46 -42 0 -6 12 -8 30 -4 39 7 38 -1 -2 -19 -28 -12 -29 -14 -10 -15 12 0 22 -4 22 -10 0 -5 -8 -10 -19 -10 -15 0 -20 -10 -25 -45 -13 -82 -94 -173 -181 -202 -18 -6 -29 -17 -29 -27 1 -9 -2 -16 -7 -16 -5 0 -9 6 -9 13 0 9 -3 8 -9 -2 -7 -11 -10 -11 -17 1 -5 9 -26 18 -46 22 -33 6 -38 4 -38 -12 0 -32 27 -45 90 -45 134 2 266 106 314 248 19 55 23 165 7 192 -10 16 -10 16 -11 -4z"/>
      </g>
      <g id="layer110" fill="#ffce01" stroke="none">
      <path d="M230 928 c0 -34 23 -89 41 -99 11 -6 30 -20 41 -31 19 -19 19 -22 5 -59 -15 -38 -15 -39 22 -96 44 -66 147 -168 240 -236 63 -47 92 -56 121 -37 12 8 11 10 -6 10 -36 0 -84 53 -84 92 0 39 7 51 37 67 49 25 114 -2 140 -60 15 -35 18 -37 33 -24 22 20 60 97 60 121 -1 18 -1 18 -12 -1 -20 -36 -35 -41 -62 -22 -15 11 -16 18 -8 34 14 25 59 38 78 22 12 -10 14 -2 14 45 0 31 -1 56 -2 56 -2 0 -46 7 -98 15 -312 47 -353 60 -455 141 -85 68 -105 80 -105 62z m303 -197 c79 -30 92 -139 19 -156 -58 -12 -122 35 -122 89 0 36 7 48 35 64 25 14 37 15 68 3z m-143 -11 c9 -6 17 -5 21 2 4 7 9 7 13 -1 4 -6 3 -11 -3 -11 -6 0 -7 -14 -4 -34 6 -39 -6 -50 -40 -37 -29 11 -37 28 -30 64 6 28 18 33 43 17z m334 -26 c9 -8 16 -19 16 -23 0 -14 -25 -31 -46 -31 -23 0 -59 44 -49 60 10 16 62 12 79 -6z m96 -29 c10 -12 10 -15 -4 -15 -9 0 -16 7 -16 15 0 8 2 15 4 15 2 0 9 -7 16 -15z m-230 -138 c0 -37 -22 -59 -55 -55 -60 6 -25 77 38 78 11 0 17 -8 17 -23z"/>
      </g>
      <g id="layer111" fill="#e5c16d" stroke="none">
      <path d="M322 668 c28 -51 122 -154 192 -209 l51 -41 -52 49 c-31 29 -53 58 -53 70 0 25 -25 47 -44 40 -10 -4 -28 14 -56 55 -22 33 -40 64 -40 69 0 5 -5 9 -11 9 -5 0 0 -19 13 -42z"/>
      <path d="M1063 615 c0 -44 2 -61 4 -37 2 23 2 59 0 80 -2 20 -4 1 -4 -43z"/>
      <path d="M954 358 l-29 -33 33 29 c17 17 32 31 32 33 0 8 -8 1 -36 -29z"/>
      <path d="M650 293 c0 -21 36 -33 97 -32 l58 1 -40 10 c-22 5 -53 10 -70 10 -16 0 -33 6 -37 12 -6 8 -8 8 -8 -1z"/>
      </g>
    </Svg>
  );
};

export default Logo;
