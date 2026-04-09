export type Work = {
  id: number;
  title: string;
  type: string;
  category: string;
  description: string;
  link: string;
  image: string;
  showcase: boolean;
};

export type Artist = {
  id: number;
  name: string;
  category: string;
  city: string;
  bio: string;
  genres: string;
  image: string;
  tagline: string;
  works: Work[];
};

export const artists: Artist[] = [
  {
    id: 1,
    name: "Salman Muqtadir",
    category: "Digital Creator",
    city: "Dhaka",
    tagline:
      "Digital creator, entrepreneur and brand collaborator active in lifestyle and promotional campaigns",
    bio: "Salman Muqtadir is a Bangladeshi digital creator and entrepreneur known for online content, brand collaborations and promotional campaigns. He is associated with Goosebumps and has appeared in partnership content for multiple lifestyle and consumer brands.",
    genres: "Digital Content, Brand Promotion, Lifestyle Media",
    image:
      "https://d2u0ktu8omkpf6.cloudfront.net/b6a6fc2159feb814fc60c6c062769f94e042fadaa7f53681.jpg",
    works: [
  {
    id: 101,
    title: "Worst Bengali YouTubers - 400k Special",
    type: "Digital Video Content",
    category: "Digital Media",
    description:
      "A satirical digital content piece by Salman Muqtadir that reflects his creator identity, youth-focused humor, and online entertainment style.",
    link: "https://www.youtube.com/watch?v=A2ZzJFsMlBQ",
    image: "https://i.ytimg.com/vi/A2ZzJFsMlBQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLAvRtjPSfjycGWJokOMR9FkncXLhQ",
    showcase: true,
  },
  {
    id: 102,
    title: "Bengali Friends VS BEST FRIENDS",
    type: "Digital Video Content",
    category: "Digital Media",
    description:
      "A youth-oriented comedic video by Salman Muqtadir exploring friendship dynamics through relatable Bangladeshi digital content.",
    link: "https://www.youtube.com/watch?v=KNWemNr3OjM",
    image: "https://i.ytimg.com/vi/KNWemNr3OjM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLDFDpq_wWT8pVQ7JXY1Z5LtqCqgiQ",
    showcase: true,
  },
  {
    id: 103,
    title: "Funny Mother's Day Song",
    type: "Digital Video Content",
    category: "Digital Media",
    description:
      "A humorous digital video by Salman Muqtadir built around youth-oriented online entertainment and relatable social comedy for a Bangladeshi audience.",
    link: "https://www.youtube.com/watch?v=kV5WxO4OqMA",
    image: "https://i.ytimg.com/vi/kV5WxO4OqMA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLBGksZmMpa2Z9xcGcY2XHJWKEgRsw",
    showcase: true,
  },
],
  },
  {
    id: 2,
    name: "Munmun Ahmed",
    category: "Classical Dancer",
    city: "Dhaka",
    tagline:
      "Kathak specialist, teacher, choreographer and television personality",
    bio: "Munmun Ahmed is a prominent Bangladeshi classical dancer and choreographer known for her Kathak performances and contributions to cultural programs and dance education. She is recognized for stage performances, choreography, and television appearances.",
    genres: "Kathak, Classical Dance, Stage Performance",
    image:
      "https://www.thedailystar.net/sites/default/files/styles/big_1/public/feature/images/munmun_ahmed.jpg",
    works: [
      {
        id: 201,
        title: "Kathak Performance Showcase",
        type: "Stage Performance",
        category: "Performance Visual",
        description:
          "A portfolio work representing stage performance and cultural presentation.",
        link: "https://www.youtube.com/watch?v=_Q3UiQPxMSI",
        image:
          "https://www.thedailystar.net/sites/default/files/styles/big_1/public/feature/images/munmun_1.jpg",
        showcase: false,
      },
      {
  id: 202,
  title: "Ghetuputra Komola",
  type: "Film / Poster Artwork",
  category: "Poster",
  description:
    "A visual entry based on the film Ghetuputra Komola (2012), in which Munmun Ahmed appeared as Zaminder's Wife. This work highlights the film's promotional poster and screen-related visual identity.",
  link: "https://www.youtube.com/watch?v=IPo_F5wInu0&t=147s",
  image:
    "https://i.ytimg.com/vi/IPo_F5wInu0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLAdjMidZwbS-jHhdiha3SHSnRH_fA",
  showcase: true,
},
      {
  id: 203,
  title: "Amar Ache Jol",
  type: "Film / Poster Artwork",
  category: "Poster",
  description:
    "A visual entry based on the film Amar Ache Jol (2008), in which Munmun Ahmed appeared as Rehana. This work highlights the film's promotional poster and screen-related visual identity.",
  link: "https://www.youtube.com/watch?v=I3HFQD7vUcs",
  image: "https://i.ytimg.com/vi/I3HFQD7vUcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLDey2b8VufzhDMVk_nD1tRT3yMyWg",
  showcase: true,
},
    ],
  },
  {
    id: 3,
    name: "Sujit Mustafa",
    category: "Nazrul Sangeet Artist",
    city: "Dhaka",
    tagline:
      "Renowned Nazrul Sangeet singer known for classical training and stage performances",
    bio: "Sujit Mustafa is a renowned Bangladeshi singer known for Nazrul Sangeet, modern Bangla songs, and classical music training. He has built a respected career as a performer, educator, and cultural figure with national and international stage experience.",
    genres: "Nazrul Sangeet, Classical Music, Modern Bangla",
    image:
      "https://www.thedailystar.net/sites/default/files/styles/big_1/public/feature/images/sujit_mustafa.jpg",
    works: [
      {
  id: 301,
  title: "Abu Hena Mustafa Kamal's song Collection",
  type: "Music Release",
  category: "Music Portfolio",
  description:
    "A curated music portfolio entry representing Sujit Mustafa’s performance work and recorded musical releases.",
  link: "https://open.spotify.com/album/3GoJrIJXT7GsPsCpJPWau1",
  image: "https://i.ytimg.com/vi/pmCNDxdIXXE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGF8gXyhfMA8=&rs=AOn4CLDiv9PdjHCqMWLneug0JqFX6Csb1Q",
  showcase: false,
},
      {
  id: 302,
  title: "O Amar Desher Mati – Wind of Change",
  type: "Live Performance / Music Video",
  category: "Performance Visual",
  description:
    "A featured live performance of O Amar Desher Mati by Sujit Mustafa on Wind of Change, a cross-cultural musical platform by Gaan Bangla. This work highlights his vocal performance in a visually produced stage setting.",
  link: "https://www.youtube.com/watch?v=P5PtZ2O7Ouo",
  image: "https://i.ytimg.com/vi/P5PtZ2O7Ouo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLD-srUrPnGnsMHrhmoeRqruI9Sqdg",
  showcase: true,
},
    
    ],
  },
];

export const showcaseArtworks = artists.flatMap((artist) =>
  artist.works
    .filter((work) => work.showcase)
    .map((work) => ({
      ...work,
      artistId: artist.id,
      artistName: artist.name,
      artistCity: artist.city,
    }))
);