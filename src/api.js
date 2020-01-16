import axios from "axios";

const params = {
  params: {
    api_key: "8b4c941053c92f80f2f0a95c781d6892",
    language: "en-US"
  }
};

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params
});

// "/" 시작하는 것은 절대경로를 의미한다. 그래서 앞에 "/"를 뺀 상대경로를 쓴다.
//api.get("tv/popular", params);

export const moviesApi = {
  nowPalying: () => api.get("movie/now_playing", params),
  upcoming: () => api.get("movie/upcoming", params),
  popular: () => api.get("movie/popular", params)
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated", params),
  popular: () => api.get("tv/popular", params),
  airingToday: () => api.get("tv/airing_today", params)
};
