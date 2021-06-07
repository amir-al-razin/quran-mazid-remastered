import WordType from './WordType';
import TranslationType from './TranslationType';

interface VerseType {
  id: number;
  verse_number: number;
  chapter_id: number | string;
  page_number: number;
  juz_number: number;
  hizb_number: number;
  rub_number: number;
  verse_key: string;
  words: Array<WordType>;
  text_madani: string;
  text_simple: string;
  sajdah?: boolean;
  translations?: Array<TranslationType>;
  audio?: any;
}

export default VerseType;