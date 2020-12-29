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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="31.3" height="22.73" viewBox="0 0 31.3 22.73">
    <g id="people" transform="translate(0 -4.5)">
      <path id="Path_3003" data-name="Path 3003" d="M29.344,27.23A1.9,1.9,0,0,0,31.3,25.336c0-1.894-1.956-7.577-9.781-7.577s-9.781,5.682-9.781,7.577a1.9,1.9,0,0,0,1.956,1.894ZM13.7,25.442v0Zm.034-.106H29.3l.028,0,.016,0a5.737,5.737,0,0,0-1.487-3.258c-1.081-1.225-2.978-2.416-6.339-2.416s-5.257,1.193-6.338,2.417a5.72,5.72,0,0,0-1.487,3.258l.043.008Zm15.6.106v0ZM21.519,13.971a3.852,3.852,0,0,0,3.912-3.788,3.915,3.915,0,0,0-7.825,0A3.852,3.852,0,0,0,21.519,13.971Zm5.869-3.788a5.872,5.872,0,0,1-11.738,0,5.872,5.872,0,0,1,11.738,0ZM13.569,18.29a11.834,11.834,0,0,0-2.407-.468q-.688-.063-1.381-.062C1.956,17.759,0,23.442,0,25.336A1.7,1.7,0,0,0,1.956,27.23H10.2a4.126,4.126,0,0,1-.423-1.894,8.528,8.528,0,0,1,2.133-5.5A10.245,10.245,0,0,1,13.569,18.29ZM9.625,19.653c-3.263.038-5.116,1.212-6.182,2.417a5.7,5.7,0,0,0-1.487,3.266H7.825A10.191,10.191,0,0,1,9.625,19.653ZM2.934,11.13A5.778,5.778,0,0,1,8.8,5.447a5.778,5.778,0,0,1,5.869,5.682A5.778,5.778,0,0,1,8.8,16.812,5.778,5.778,0,0,1,2.934,11.13ZM8.8,7.341A3.852,3.852,0,0,0,4.891,11.13,3.852,3.852,0,0,0,8.8,14.918a3.852,3.852,0,0,0,3.912-3.788A3.852,3.852,0,0,0,8.8,7.341Z" transform="translate(0 0)" fill="#fff" fill-rule="evenodd"/>
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
