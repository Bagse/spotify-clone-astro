import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"],
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover:
      "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"],
  },
  {
    id: "3",
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"],
  },
  {
    id: "4",
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"],
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"],
  },
  {
    id: "6",
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: "Paint The Town Red",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Doja Cat"],
    album: "Chill Lo-Fi Music",
    duration: "3:51",
  },
  {
    id: 2,
    albumId: 1,
    title: "Hypnotized",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Purple Disco Machine, Sophie And The Giants"],
    album: "Chill Lo-Fi Music",
    duration: "3:15",
  },
  {
    id: 3,
    albumId: 1,
    title: "Everyday Normal Guy 2",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Jon Lajoise"],
    album: "Chill Lo-Fi Music",
    duration: "3:15",
  },
  {
    id: 4,
    albumId: 1,
    title: "El Merengue",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Marshmello, Manuel Turizo"],
    album: "Chill Lo-Fi Music",
    duration: "3:37",
  },
  {
    id: 5,
    albumId: 1,
    title: "Nanana (It Goes Like)",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["Peggy Gou"],
    album: "Chill Lo-Fi Music",
    duration: "3:50",
  },
  {
    id: 1,
    albumId: 2,
    title: "Miracle",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Calvin Harris, Ellie Goulding"],
    album: "Midnight Tales",
    duration: "3:03",
  },
  {
    id: 2,
    albumId: 2,
    title: "Baby Dont Hurt Me",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["David Guetta, Anne-Marie, Coi Leray"],
    album: "Midnight Tales",
    duration: "2:18",
  },
  {
    id: 3,
    albumId: 2,
    title: "Bad Company",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Purple Disco Machine"],
    album: "Midnight Tales",
    duration: "3:30",
  },
  {
    id: 4,
    albumId: 2,
    title: "Substitution",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Purple Disco Machine, Kungs"],
    album: "Midnight Tales",
    duration: "3:02",
  },
  {
    id: 5,
    albumId: 2,
    title: "10 35",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Tiësto, Tate McRae"],
    album: "Midnight Tales",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 3,
    title: "TQG",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["KAROL G, Shakira"],
    album: "Study Session",
    duration: "3:16",
  },
  {
    id: 2,
    albumId: 3,
    title: "Como Yo",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Marshmello, Tiago PZK"],
    album: "Study Session",
    duration: "2:22",
  },
  {
    id: 3,
    albumId: 3,
    title: "Perfecta",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Miranda, Maria Becerra, FMK"],
    album: "Study Session",
    duration: "3:44",
  },
  {
    id: 4,
    albumId: 3,
    title: "Pa' tipos como tu",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["SHAKIRA, BZRP"],
    album: "Study Session",
    duration: "3:33",
  },
  {
    id: 5,
    albumId: 3,
    title: "Si me tomo una cerveza",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Migrantes, Alico"],
    album: "Study Session",
    duration: "3:02",
  },
  {
    id: 1,
    albumId: 4,
    title: "Dance The Night",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Dua Lipa"],
    album: "Study Session",
    duration: "2:53",
  },
  {
    id: 2,
    albumId: 4,
    title: "Satellite",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Harry Styles"],
    album: "Study Session",
    duration: "3:35",
  },
  {
    id: 3,
    albumId: 4,
    title: "Runaway",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["OneRepublic"],
    album: "Study Session",
    duration: "2:23",
  },
  {
    id: 4,
    albumId: 4,
    title: "Karma",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Taylor Swift, Ice Spice"],
    album: "Study Session",
    duration: "3:18",
  },
  {
    id: 5,
    albumId: 4,
    title: "I Feel It Coming",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["The Weeknd, Daft Punk"],
    album: "Study Session",
    duration: "4:29",
  },
  {
    id: 1,
    albumId: 5,
    title: "The Business",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Tiësto"],
    album: "Chill Lo-Fi Music",
    duration: "2:42",
  },
  {
    id: 2,
    albumId: 5,
    title: "Secrets",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Tiësto, KSHMR, VASSY"],
    album: "Chill Lo-Fi Music",
    duration: "4:27",
  },
  {
    id: 3,
    albumId: 5,
    title: "The Motto",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Tiësto, Ava Max"],
    album: "Chill Lo-Fi Music",
    duration: "2:44",
  },
  {
    id: 4,
    albumId: 5,
    title: "Pump It Louder",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Tiësto, Black Eyed Peas"],
    album: "Chill Lo-Fi Music",
    duration: "2:50",
  },
  {
    id: 5,
    albumId: 5,
    title: "Don't Be Shy",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Tiësto, KAROL G"],
    album: "Chill Lo-Fi Music",
    duration: "2:19",
  },
];
