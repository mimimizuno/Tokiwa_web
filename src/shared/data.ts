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
  