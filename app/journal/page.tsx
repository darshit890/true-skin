import React from "react";
import JHero from "./_components/JHero";
import JArticle from "./_components/JArticle";
import JArticle2 from "./_components/JArticle2";
import { Footer } from "@/components/Footer";

const page = () => {
  return (
    <>
      <JHero />
      <JArticle />
      <JArticle2 />
      <Footer />
    </>
  );
};

export default page;
