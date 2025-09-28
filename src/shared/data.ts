export const festival = {
  name: "横浜国立大学 常盤祭2025 「紅陽」",
  days: [
    { dateLabel: "10/31 (Fri)", time: "準備完了後 – 20:30" },
    { dateLabel: "11/1 (Sat)", time: "09:00 – 20:30" },
    { dateLabel: "11/2 (Sun)", time: "09:00 – 15:00" },
  ],
  venue: {
    name: "横浜国立大学 常盤台キャンパス",
    address: "〒240-8501 神奈川県横浜市保土ヶ谷区常盤台79-1 電子情報工学棟前",
  },
};

export const COFFEES = [
  {
    id: "hand-drip",
    title: "Hand Drip",
    image: "/images/handdrip_menu.png",
    price: 500,
    desc: "エチオピアとコロンビアの２種類から選択。一杯ずつ丁寧に抽出します。フィルターを通した綺麗な後味で、じんわりと甘くフルーティーなコーヒーです。",
  },
  {
    id: "fp-hot",
    title: "French Press (hot)",
    image: "/images/frenchpress_menu.png",
    price: 400,
    desc: "エチオピアのみの提供。オイル感ごと抽出して、リッチな質感とフルーティーな余韻を楽しめます。",
  },
  {
    id: "fp-ice",
    title: "French Press (ice)",
    image: "/images/frenchpressice_menu.png",
    price: 400,
    desc: "エチオピアのみの提供。冷たく澄んだフレンチプレス。より爽やかにフルーティーな余韻を楽しむことができます。",
  },
] as const;

export const BEANS = [
  { 
    id: "Ethiopia", 
    title: "エチオピア", 
    image: "/images/ethiopia_beans.png",
    desc: "ベリーっぽく、赤い果実系のフレーバー。後味は紅茶っぽい。",
    url: "https://berthcoffee.stores.jp/items/66d5906120bc0f0c0cfbd4e5"
  },
  { 
    id: "Colombia",
    title: "コロンビア",
    image: "/images/tanzania_beans.png",
    desc: "メロン。",
    url: "https://berthcoffee.stores.jp/items/669610a8db80ba0030ee05ee",
  }
]
export const SWEETS = [
  { 
    id: "cookie",
    title: "クッキー", 
    image: "/images/cookie.png",
    price: 400,
    desc: "オール米粉でグルテンフリー。外側はサクッと、中心にかけてチューイー。",
  },
  { 
    id: "biscotti", 
    title: "ビスコッティ", 
    image: "/images/biscotti.png", 
    price: 400,
    desc: "オール米粉でグルテンフリー。固すぎないビスコッティで、サクッと軽いので思わず手が進んじゃいます！", 
  },
  { 
    id: "pound-cake", 
    title: "パウンドケーキ", 
    image: "/images/poundcake.png", 
    price: 400,
    desc: "ふわふわしっとり食感のパウンドケーキは食べごたえもあり、フルーティーなコーヒーとも相性抜群！", 
  },
] as const;

export const COLLABS = [
  {
    id: "berthcoffee",
    name: "BERTH COFFEE みなとみらい",
    url: "https://www.instagram.com/berth_minatomirai/",
    image: "/images/berthcoffee_icon.jpg",
    desc: "open 8:00-18:00",
  },
  {
    id: "meriharibake",
    name: "メリハリベイク",
    url: "https://www.instagram.com/meriharibake/",
    image: "/images/meriharibake_icon.jpg",
    desc: "open 11:00-17:30 木曜定休",
  },
] as const;
