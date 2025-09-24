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
    image: "../../public/images/handdrip_menu.png",
    desc: "エチオピアとコロンビアの２種類から選択。一杯ずつ丁寧に抽出します。フィルターを通した綺麗な後味で、じんわりと甘くフルーティーなコーヒーです。",
  },
  {
    id: "fp-hot",
    title: "French Press (hot)",
    image: "../../public/images/frenchpress_menu.png",
    desc: "エチオピアのみの提供。オイル感ごと抽出して、リッチな質感とフルーティーな余韻を楽しめます。",
  },
  {
    id: "fp-ice",
    title: "French Press (ice)",
    image: "../../public/images/frenchpressice_menu.png",
    desc: "エチオピアのみの提供。冷たく澄んだフレンチプレス。より爽やかにフルーティーな余韻を楽しむことができます。",
  },
] as const;

export const BEANS = [
  { 
    id: "Ethiopia", 
    title: "エチオピア", 
    image: "../../public/images/Flag_of_Ethiopia.svg.png",
    desc: "ベリーっぽく、赤い果実系のフレーバー。後味は紅茶っぽい。",
  },
  { 
    id: "Colombia",
    title: "コロンビア",
    image: "../../public/images/Flag_of_Colombia.svg.png",
    desc: "メロン。",
  }
]
export const SWEETS = [
  { id: "cookie", title: "クッキー", image: "/images/sweet-cookie.jpg", desc: "ざくっと食感。コーヒーと好相性。" },
  { id: "cake", title: "ケーキ", image: "/images/sweet-cake.jpg", desc: "季節で変わる軽いケーキをご用意。" },
] as const;

export const COLLABS = [
  {
    id: "beans-shop",
    name: "Beans Partner",
    logo: "/images/beans-partner.jpg",
    desc: "豆の卸でご協力いただいています。",
    instagram: "https://instagram.com/beans_partner",
  },
  {
    id: "sweets-shop",
    name: "Sweets Partner",
    logo: "/images/sweets-partner.jpg",
    desc: "スイーツの卸でご協力いただいています。",
    instagram: "https://instagram.com/sweets_partner",
  },
] as const;
