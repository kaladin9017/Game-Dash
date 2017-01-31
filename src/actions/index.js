import YOUTUBE_SEARCH_TERM from './types';

export default function changeYoutubeVideos(term) {
  return {
    type: YOUTUBE_SEARCH_TERM,
    payload: term
  }
}
