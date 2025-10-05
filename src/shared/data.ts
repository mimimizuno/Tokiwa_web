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
    title: "ハンドドリップ",
    image: "/images/handdrip.png",
    price: 500,
    desc: "お好みの豆からお選びいただけます。一杯ずつ丁寧に抽出します。フィルターを通した綺麗な後味で、じんわりと甘くフルーティーなコーヒーです。",
  },
  {
    id: "fp-hot",
    title: "フレンチプレス (hot)",
    image: "/images/frenchpress.png",
    price: 400,
    desc: "状況に応じた豆で提供いたします。オイル感ごと抽出して、リッチな質感とフルーティーな余韻を楽しめます。",
  },
  {
    id: "fp-ice",
    title: "フレンチプレス (ice)",
    image: "/images/frenchpressice.png",
    price: 400,
    desc: "状況に応じた豆で提供いたします。冷たく澄んだフレンチプレス。より爽やかにフルーティーな余韻を楽しむことができます。",
  },
] as const;

export const BEANS = [
  { 
    id: "Ethiopia", 
    title: "エチオピア", 
    image: "/images/ethiopia_beans.png",
    flavorNote: "ジャスミン、レモンキャンディ、ホワイトグレープ、クリーミーマウスフィール",
    desc: "ウリ村のポテンシャルであるフレーバーの豊かさが特徴的です。華やかな香りと柑橘系の風味が特徴的。質感はとても滑らかです。",
    url: "https://berthcoffee.stores.jp/items/68609ed07ae4bdc777985440"
  },
  { 
    id: "Honduras",
    title: "ホンジュラス",
    image: "/images/honduras_beans.png",
    flavorNote: "オレンジ、プラム、ハーバル、ジューシー、コンプレックス、ブライトアシディティ",
    desc: "オレンジや日向夏のようなフレッシュな柑橘系なフレーバーに加え、ホンジュラス特有のハーバルな印象もありとても生き生きとした味わいのコーヒー。",
    url: "https://berthcoffee.stores.jp/items/65ee95a77ae10402beaa32c2",
  },
  { 
    id: "Brazil",
    title: "ブラジル",
    image: "/images/brazil_beans.png",
    flavorNote: "オレンジ、クリーミーマウスフィール、アプリコット、キャラメル、アーモンド",
    desc: "アーモンドのような香ばしさと、キャラメルのような味わい。少しオレンジのような果実感。酸味が苦手な方にお勧め！",
    url: "https://berthcoffee.stores.jp/items/68de4582a0c07f23476de71f",
  }
]
export const SWEETS = [
  { 
    id: "cookie",
    title: "クッキー", 
    image: "/images/menu_cookie.jpg",
    price: 400,
    desc: "オール米粉でグルテンフリー。外側はサクッと、中はしっとり食感を楽しめます！",
  },
  { 
    id: "biscotti", 
    title: "ビスコッティ", 
    image: "/images/menu_biscotti.jpg", 
    price: 400,
    desc: "オール米粉でグルテンフリー。固すぎないビスコッティで、サクッと軽いので思わず手が進んじゃいます！", 
  },
  { 
    id: "pound-cake", 
    title: "パウンドケーキ", 
    image: "/images/menu_poundcake.jpg", 
    price: 400,
    desc: "ふわふわしっとり食感で食べごたえもあり、フルーティーなコーヒーとも相性抜群！", 
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
