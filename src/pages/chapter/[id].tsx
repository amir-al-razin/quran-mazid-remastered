import React from "react";
import { getChapter } from "../../api";

interface Props {
    
}

export async function getServerSideProps({ params }) {
  const { surahId } = params.id;
  const surah = await getChapter(surahId);

  return {
    props: {
      surah,
    },
  };
}

const SurahPage = (Props: Props) => {
    console.log()
  return <div>Surah </div>;
};

export default SurahPage;
