import axios from "axios";

const params = {
  api_key: "8b4c941053c92f80f2f0a95c781d6892",
  language: "en-US"
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: params
});

// "/" 시작하는 것은 절대경로를 의미한다. 그래서 앞에 "/"를 뺀 상대경로를 쓴다.
//api.get("tv/popular", params);

export const moviesApi = {
  nowPalying: () => api.get("movie/now_playing", { params: params }),
  upcoming: () => api.get("movie/upcoming", { params: params }),
  popular: () => api.get("movie/popular", { params: params }),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        ...params,
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        ...params,
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated", { params: params }),
  popular: () => api.get("tv/popular", { params: params }),
  airingToday: () => api.get("tv/airing_today", { params: params }),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        ...params,
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        ...params,
        query: encodeURIComponent(term)
      }
    })
};
