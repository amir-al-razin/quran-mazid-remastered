import { camelizeKeys } from "humps";
import { makeTafsirsUrl, makeUrl } from "./utils/api";
import ChapterType from "./types/ChapterType";
import VerseType from "./types/VerseType";
import fetcher from "./utils/fetcher";

// export const fetcher = async function fetcher(input: RequestInfo, init?: RequestInit) {
//   const res = await fetch(input, init);
//   return res.json();
// };

export const getChapters = async () => {
  const payload = await fetcher(makeUrl(`/chapters`));

  return camelizeKeys(payload) as { chapters: ChapterType[] };
};

export const getChapter = async (id: string | number | string[]) => {
  const payload = await fetcher(makeUrl(`/chapters/${id}`));

  return camelizeKeys(payload) as { chapter: ChapterType };
};

export const getChapterInfo = async (id: string | number | string[]) => {
  const payload = await fetcher(makeUrl(`/chapters/${id}/info`));

  return camelizeKeys(payload);
};

export const getChapterVerses = async (id: string | number | string[]) => {
  const payload = await fetcher(
    makeUrl(`/chapters/${id}/verses`, { translations: 20, limit: 25 })
  ); // TODO (@abdellatif): parameterize the default translation

  return camelizeKeys(payload) as { verses: VerseType[] };
};

export const getChapterVersesResponse = async (
  id: string | number | string[]
) => {
  return fetcher(
    makeUrl(
      `/verses/by_chapter/${id}?fields=text_uthmani&translations=20&translation_fields=resource_name%2Clanguage_id`
    )
  );
};
/**
 * Get the list of tafsirs.
 *
 * @param {string} language
 * @returns {Promise<TafsirsResponse>}
 */
export const getTafsirs = async (language: string): Promise<any> =>
  fetcher(makeTafsirsUrl(language));
