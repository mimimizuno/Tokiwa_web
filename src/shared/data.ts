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
    image: "/images/coffee-handdrip.jpg",
    desc: "産地の個性をダイレクトに。軽やかな酸と甘みを楽しめます。",
  },
  {
    id: "fp-hot",
    title: "French Press (hot)",
    image: "/images/coffee-fp-hot.jpg",
    desc: "オイル感ごと抽出して、リッチな質感と余韻を。",
  },
  {
    id: "fp-ice",
    title: "French Press (ice)",
    image: "/images/coffee-fp-ice.jpg",
    desc: "冷たく澄んだフレンチプレス。食後にもゴクゴク。",
  },
] as const;

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
