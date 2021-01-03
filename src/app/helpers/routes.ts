export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'home',
    title: 'Home Page',
    icon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <clipPath id="clip-path">
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
          transform="translate(0 0)"
        />
      </clipPath>
    </defs>
    <g id="Group_5" data-name="Group 5" transform="translate(0 0)">
      <path
        id="Combined_Shape-2"
        data-name="Combined Shape"
        d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
        transform="translate(0 0)"
      />
    </g>
  </svg>`,
  },
  {
    path: 'merchants',
    title: 'Business Page > Batterhalf & Co.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="26.552" viewBox="0 0 31 26.552">
    <g id="Group_1133" data-name="Group 1133" transform="translate(-1.694 -103.224)">
      <path id="__TEMP__SVG__" d="M33.189,11.815,30.976,5.177a1.106,1.106,0,0,0-1.106-.752H5.531a1.106,1.106,0,0,0-1.106.752L2.213,11.815a1.317,1.317,0,0,0,0,.354v6.638a1.106,1.106,0,0,0,1.106,1.106H4.425V30.976H6.638V19.913h6.638V30.976h17.7V19.913h1.106a1.106,1.106,0,0,0,1.106-1.106V12.169a1.317,1.317,0,0,0,0-.354ZM28.764,28.764H15.488v-8.85H28.764ZM30.976,17.7H26.551V13.275H24.338V17.7H18.807V13.275H16.594V17.7H11.063V13.275H8.85V17.7H4.425V12.346l1.9-5.708H29.073l1.9,5.708Z" transform="translate(-0.507 98.8)" fill="#fff"/>
    </g>
  </svg>   
  `,
  },

  {
    path: 'members',
    title: 'Zeal Members',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26.301" height="19.726" viewBox="0 0 26.301 19.726">
    <g id="people" transform="translate(0 -4.5)">
      <path id="Path_3003" data-name="Path 3003" d="M24.657,24.226A1.61,1.61,0,0,0,26.3,22.582c0-1.644-1.644-6.575-8.219-6.575s-8.219,4.931-8.219,6.575a1.61,1.61,0,0,0,1.644,1.644ZM11.515,22.674v0Zm.028-.092H24.622l.023,0,.013,0a5.062,5.062,0,0,0-1.249-2.827,6.582,6.582,0,0,0-5.327-2.1,6.587,6.587,0,0,0-5.326,2.1,5.048,5.048,0,0,0-1.249,2.827l.036.007Zm13.106.092v0Zm-6.567-9.955a3.288,3.288,0,1,0-3.288-3.288A3.288,3.288,0,0,0,18.082,12.719Zm4.931-3.288A4.931,4.931,0,1,1,18.082,4.5a4.931,4.931,0,0,1,4.931,4.931ZM11.4,16.467a9.665,9.665,0,0,0-2.022-.406q-.578-.055-1.16-.054C1.644,16.007,0,20.938,0,22.582a1.452,1.452,0,0,0,1.644,1.644h6.93a3.679,3.679,0,0,1-.355-1.644,7.541,7.541,0,0,1,1.792-4.774A8.727,8.727,0,0,1,11.4,16.467ZM8.088,17.651a6.537,6.537,0,0,0-5.195,2.1,5.03,5.03,0,0,0-1.249,2.834H6.575A9.046,9.046,0,0,1,8.088,17.651Zm-5.622-7.4A4.931,4.931,0,1,1,7.4,15.185,4.931,4.931,0,0,1,2.466,10.253ZM7.4,6.966a3.288,3.288,0,1,0,3.288,3.288A3.288,3.288,0,0,0,7.4,6.966Z" transform="translate(0 0)" fill="#fff" fill-rule="evenodd"/>
    </g>
  </svg>`,
  },
  {
    path: 'offers',
    title: 'Offers',
    icon: `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <clipPath id="clip-path">
      <path
        id="Combined_Shape"
        data-name="Combined Shape"
        d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
        transform="translate(0 0)"
      />
    </clipPath>
  </defs>
  <g id="Group_5" data-name="Group 5" transform="translate(0 0)">
    <path
      id="Combined_Shape-2"
      data-name="Combined Shape"
      d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
      transform="translate(0 0)"
    />
  </g>
</svg>`,
  },
  {
    path: 'complaints',
    title: 'Complaints',
    icon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <clipPath id="clip-path">
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
          transform="translate(0 0)"
        />
      </clipPath>
    </defs>
    <g id="Group_5" data-name="Group 5" transform="translate(0 0)">
      <path
        id="Combined_Shape-2"
        data-name="Combined Shape"
        d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
        transform="translate(0 0)"
      />
    </g>
  </svg>`,
  },

  {
    path: 'lines',
    title: 'Lines',
    icon: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <clipPath id="clip-path">
        <path
          id="Combined_Shape"
          data-name="Combined Shape"
          d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
          transform="translate(0 0)"
        />
      </clipPath>
    </defs>
    <g id="Group_5" data-name="Group 5" transform="translate(0 0)">
      <path
        id="Combined_Shape-2"
        data-name="Combined Shape"
        d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
        transform="translate(0 0)"
      />
    </g>
  </svg>`,
  },
  {
    path: 'maps',
    title: 'Track Driver',
    icon: `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <clipPath id="clip-path">
      <path
        id="Combined_Shape"
        data-name="Combined Shape"
        d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
        transform="translate(0 0)"
      />
    </clipPath>
  </defs>
  <g id="Group_5" data-name="Group 5" transform="translate(0 0)">
    <path
      id="Combined_Shape-2"
      data-name="Combined Shape"
      d="M22.2,23H13.841a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,22.2,23ZM14.76,14.76v6.521h6.521V14.76ZM9.158,23H.8a.8.8,0,0,1-.8-.8V13.841a.8.8,0,0,1,.8-.8H9.158a.8.8,0,0,1,.8.8V22.2A.8.8,0,0,1,9.158,23ZM1.719,14.76v6.521H8.24V14.76Zm20.48-4.8H13.841a.8.8,0,0,1-.8-.8V.8a.8.8,0,0,1,.8-.8H22.2a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,22.2,9.958ZM14.76,1.719V8.24h6.521V1.719Zm-5.6,8.239H.8a.8.8,0,0,1-.8-.8V.8A.8.8,0,0,1,.8,0H9.158a.8.8,0,0,1,.8.8V9.158A.8.8,0,0,1,9.158,9.958ZM1.719,1.719V8.24H8.24V1.719Z"
      transform="translate(0 0)"
    />
  </g>
</svg>`,
  },
];
