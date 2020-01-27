# Komflix

Learning React and ES6 by building a Movie Discovery App.

## Package Add

```bash
yarn add prop-types
yarn add styled-components
yarn add styled-reset
yarn add axios
yarn add react-helmet
yarn add react-tabs
yarn add gh-pages
```

## Screens

- [ ] Home
- [ ] TV Shows
- [ ] Serach
- [ ] Detail

## API Verbs

https://www.themoviedb.org/documentation/api

- [x] Now playing (Movie)
- [x] Upcoming (Movie)
- [x] Top Rated (TV)
- [x] Popular (TV, Movie)
- [x] Airing Today (TV)
- [x] TV Show Detail
- [x] Movie Detail
- [x] Search (Movies, TV)

## Component

- Container Presenter Pattern

## CSS

- CSS masterclass
- CSS selectors

## React helmet

웹 사이트의 head를 쉽게 수정할 수 있다.

## Deploying to Github Pages

```bash
npm i gh-pages
yarn add gh-pages
```

1. package.jon -> "homepage": "https://hgko1207.github.io/komflix" 추가
2. scripts -> "deploy": "gh-pages -d build", "predeploy": "npm run build" 추가
3. npm run deploy 실행

## Deploying to Netlify

- 계정을 github와 연결
- Build가 제대로 되게 하려면 package.json -> "homepage": "./" 를 추가한다.

## Reference

- [REACT ROUTER](https://reacttraining.com/react-router/web/guides/quick-start)

# Preview:

Try it on [netlify](https://dazzling-torvalds-c3f876.netlify.com/#/)
