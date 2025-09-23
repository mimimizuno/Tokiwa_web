import { motion } from "framer-motion";
import { fadeIn } from "../shared/motion";

export function Concept() {
    return (
      <>
        <motion.h1
         className="section-title"
         {...fadeIn()}
        >
          Concept
        </motion.h1>
        <p className="main-text">
          はじめまして。私たちはフルーティーなコーヒーを皆さんに知ってもらいたくて常盤祭に出店することにしました。<br/>
          コーヒー豆はみなとみらいの「BERTH COFFEE みなとみらい」から、
          お菓子は星川の「メリハリベイク」からの提供になります。<br/>
          じんわりと甘く、フルーティーなコーヒーを美味しいお菓子とともに提供しますので
          コーヒーに苦手意識のある人もぜひ体験しに来てください。
        </p>
      </>
    );
  }