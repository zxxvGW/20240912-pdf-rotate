export type IconData = {
  name?: string;
  paths?: string[];
};

export const Icons: IconData[] = [
  {
    name: "menu",
    paths: [
      "M1 4h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 8H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z",
    ],
  },
  {
    name: "document",
    paths: [
      "M9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5L9 0zm3 14H4V2h4v4h4v8z",
    ],
  },
  {
    name: "chat",
    paths: [
      "M6 10c-1.1 0-2-.9-2-2V3H1c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1v2a1.003 1.003 0 001.71.71L5.41 13H10c.55 0 1-.45 1-1v-1.17l-.83-.83H6zm9-10H6c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4.59l2.71 2.71c.17.18.42.29.7.29.55 0 1-.45 1-1V9c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z",
    ],
  },
  {
    name: "arrow-left",
    paths: [
      "M13.99 6.99H4.41L7.7 3.7a1.003 1.003 0 00-1.42-1.42l-5 5a1.014 1.014 0 000 1.42l5 5a1.003 1.003 0 001.42-1.42L4.41 8.99H14c.55 0 1-.45 1-1s-.46-1-1.01-1z",
    ],
  },
  {
    name: "arrow-right",
    paths: [
      "M14.7 7.29l-5-5a.965.965 0 00-.71-.3 1.003 1.003 0 00-.71 1.71l3.29 3.29H1.99c-.55 0-1 .45-1 1s.45 1 1 1h9.59l-3.29 3.29a1.003 1.003 0 001.42 1.42l5-5c.18-.18.29-.43.29-.71s-.12-.52-.3-.7z",
    ],
  },
  {
    name: "chevron-down",
    paths: [
      "M12 5c-.28 0-.53.11-.71.29L8 8.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l4-4A1.003 1.003 0 0012 5z",
    ],
  },
  {
    name: "chevron-left",
    paths: [
      "M7.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-4 4C5.11 7.47 5 7.72 5 8c0 .28.11.53.29.71l4 4a1.003 1.003 0 001.42-1.42L7.41 8z",
    ],
  },
  {
    name: "chevron-right",
    paths: [
      "M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z",
    ],
  },
  {
    name: "cloud-download",
    paths: [
      "M11 11c-.28 0-.53.11-.71.29L9 12.59V8c0-.55-.45-1-1-1s-1 .45-1 1v4.59L5.71 11.3A.965.965 0 005 11a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0011 11zm1-7c-.03 0-.07 0-.1.01A5 5 0 002 5c0 .11.01.22.02.33A3.51 3.51 0 000 8.5c0 1.41.84 2.61 2.03 3.17C2.2 10.17 3.46 9 5 9c.06 0 .13.02.19.02C5.07 8.7 5 8.36 5 8c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .36-.07.7-.19 1.02.06 0 .13-.02.19-.02 1.48 0 2.7 1.07 2.95 2.47A3.964 3.964 0 0016 8c0-2.21-1.79-4-4-4z",
    ],
  },
  {
    name: "cog",
    paths: [
      "M15.19 6.39h-1.85c-.11-.37-.27-.71-.45-1.04l1.36-1.36c.31-.31.31-.82 0-1.13l-1.13-1.13a.803.803 0 00-1.13 0l-1.36 1.36c-.33-.17-.67-.33-1.04-.44V.79c0-.44-.36-.8-.8-.8h-1.6c-.44 0-.8.36-.8.8v1.86c-.39.12-.75.28-1.1.47l-1.3-1.3c-.3-.3-.79-.3-1.09 0L1.82 2.91c-.3.3-.3.79 0 1.09l1.3 1.3c-.2.34-.36.7-.48 1.09H.79c-.44 0-.8.36-.8.8v1.6c0 .44.36.8.8.8h1.85c.11.37.27.71.45 1.04l-1.36 1.36c-.31.31-.31.82 0 1.13l1.13 1.13c.31.31.82.31 1.13 0l1.36-1.36c.33.18.67.33 1.04.44v1.86c0 .44.36.8.8.8h1.6c.44 0 .8-.36.8-.8v-1.86c.39-.12.75-.28 1.1-.47l1.3 1.3c.3.3.79.3 1.09 0l1.09-1.09c.3-.3.3-.79 0-1.09l-1.3-1.3c.19-.35.36-.71.48-1.1h1.85c.44 0 .8-.36.8-.8v-1.6a.816.816 0 00-.81-.79zm-7.2 4.6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",
    ],
  },
  {
    name: "cross",
    paths: [
      "M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z",
    ],
  },
  {
    name: "duplicate",
    paths: [
      "M15 0H5c-.55 0-1 .45-1 1v2h2V2h8v7h-1v2h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm-4 4H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 10H2V6h8v8z",
    ],
  },
  {
    name: "edit",
    paths: [
      "M3.25 10.26l2.47 2.47 6.69-6.69-2.46-2.48-6.7 6.7zM.99 14.99l3.86-1.39-2.46-2.44-1.4 3.83zm12.25-14c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.44-1.44c.32-.32.51-.75.51-1.24.01-.95-.77-1.74-1.74-1.74z",
    ],
  },
  {
    name: "envelope",
    paths: [
      "M0 3.06v9.88L4.94 8 0 3.06zM14.94 2H1.06L8 8.94 14.94 2zm-6.41 8.53c-.14.14-.32.22-.53.22s-.39-.08-.53-.22L6 9.06 1.06 14h13.88L10 9.06l-1.47 1.47zM11.06 8L16 12.94V3.06L11.06 8z",
    ],
  },
  {
    name: "filter",
    paths: [
      "M13.99.99h-12a1.003 1.003 0 00-.71 1.71l4.71 4.71V14a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71V7.41L14.7 2.7a1.003 1.003 0 00-.71-1.71z",
    ],
  },
  {
    name: "floppy-disk",
    paths: [
      "M15.71 2.29l-2-2A.997.997 0 0013 0h-1v6H4V0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.28-.11-.53-.29-.71zM14 15H2V9c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v6zM11 1H9v4h2V1z",
    ],
  },
  {
    name: "folder-open",
    paths: [
      "M2.06 6.69c.14-.4.5-.69.94-.69h11V5c0-.55-.45-1-1-1H6.41l-1.7-1.71A.997.997 0 004 2H1c-.55 0-1 .45-1 1v9.84l2.05-6.15h.01zM16 8c0-.55-.45-1-1-1H4a.99.99 0 00-.94.69l-2 6c-.04.09-.06.2-.06.31 0 .55.45 1 1 1h11c.44 0 .81-.29.94-.69l2-6c.04-.09.06-.2.06-.31z",
    ],
  },
  {
    name: "lock",
    paths: [
      "M13.96 7H12V3.95C12 1.77 10.21 0 8 0S4 1.77 4 3.95V7H1.96c-.55 0-.96.35-.96.9v6.91c0 .54.41 1.19.96 1.19h12c.55 0 1.04-.65 1.04-1.19V7.9c0-.55-.49-.9-1.04-.9zM6 7V3.95c0-1.09.9-1.97 2-1.97s2 .88 2 1.97V7H6z",
    ],
  },
  {
    name: "log-out",
    paths: [
      "M7 14H2V2h5c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm8.71-6.71l-3-3a1.003 1.003 0 00-1.42 1.42L12.59 7H6c-.55 0-1 .45-1 1s.45 1 1 1h6.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z",
    ],
  },
  {
    name: "more",
    paths: [
      "M2 6.03a2 2 0 100 4 2 2 0 100-4zM14 6.03a2 2 0 100 4 2 2 0 100-4zM8 6.03a2 2 0 100 4 2 2 0 100-4z",
    ],
  },
  {
    name: "person",
    paths: [
      "M15.68 14.32c-.46-1.05-2.68-1.75-4.16-2.4-1.48-.65-1.28-1.05-1.33-1.59-.01-.07-.01-.15-.01-.23.51-.45.92-1.07 1.19-1.78 0 0 .01-.04.02-.05.06-.15.11-.32.15-.48.34-.07.54-.44.61-.78.08-.14.23-.48.2-.87-.05-.5-.25-.73-.47-.82v-.09c0-.63-.06-1.55-.17-2.15A3.671 3.671 0 0010.32.72C9.68.25 8.79-.01 8-.01c-.79 0-1.68.25-2.31.73-.61.47-1.06 1.13-1.28 1.86-.05.17-.09.33-.11.5-.12.6-.17 1.51-.17 2.15v.08c-.24.09-.45.32-.5.83-.03.38.13.72.2.86.08.35.28.72.63.78.04.17.09.33.15.49 0 .01.01.02.01.03l.01.01c.27.72.7 1.35 1.22 1.8 0 .07-.01.14-.01.21-.05.54.1.94-1.37 1.59-1.48.65-3.7 1.35-4.16 2.4-.46 1.05-.27 1.67-.27 1.67h15.92c-.01.01.18-.61-.28-1.66z",
    ],
  },
  {
    name: "plus",
    paths: [
      "M13 7H9V3c0-.55-.45-1-1-1s-1 .45-1 1v4H3c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1V9h4c.55 0 1-.45 1-1s-.45-1-1-1z",
    ],
  },
  {
    name: "remove",
    paths: [
      "M10.99 6.99h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1zm-3-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z",
    ],
  },
  {
    name: "search",
    paths: [
      "M15.55 13.43l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
    ],
  },
  {
    name: "tick",
    paths: [
      "M14 3c-.28 0-.53.11-.71.29L6 10.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42l4 4c.18.18.43.29.71.29s.53-.11.71-.29l8-8A1.003 1.003 0 0014 3z",
    ],
  },
  {
    name: "trash",
    paths: [
      "M14.49 3.99h-13c-.28 0-.5.22-.5.5s.22.5.5.5h.5v10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-10h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-8.5 9c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm3 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1v6zm2-12h-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1h-4c-.55 0-1 .45-1 1v1h14v-1c0-.55-.45-1-1-1z",
    ],
  },
  {
    name: "unlock",
    paths: [
      "M11.99-.01c-2.21 0-4 1.79-4 4v3h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-3v-3c0-1.1.9-2 2-2s2 .9 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-2.21-1.79-4-4-4z",
    ],
  },
  {
    name: "upload",
    paths: [
      "M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 8c-.28 0-.53-.11-.71-.29L9 6.41V12c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-1.29 1.3a1.003 1.003 0 01-1.42-1.42l3-3C7.47 3.11 7.72 3 8 3s.53.11.71.29l3 3A1.003 1.003 0 0111 8z",
    ],
  },
];
