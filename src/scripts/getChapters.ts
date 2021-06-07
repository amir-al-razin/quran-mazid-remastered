import { makeUrl } from '../utils/api'
import fetcher from '../utils/fetcher'
import { camelizeKeys } from 'humps';
import ChapterType from '../types/ChapterType';



export const  getChapters=async () =>{
    const payload =await  fetcher(makeUrl('chapters'))

    return <ChapterType[]> camelizeKeys(payload)
}

export const getChapterVersesResponse = async (id: string | number | string[]) => {
  return fetcher(makeUrl(`/chapters/${id}/verses`));
};

