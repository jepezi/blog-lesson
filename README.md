# 3 steps

## How to run

In `package.json`, check the `scripts` section.

```
npm run dev:0
```

```
npm run dev:1
```

```
npm run dev:2
npm run prod:2
```

```
npm run dev:3
npm run prod:3
```

```
# frontweb
npm run dev:final
npm run prod:final

# admin
npm run devadmin:final
npm run prodadmin:final
```

or
```
# npm run dev:1

npm run start:1
npm run server:dev:1 # another terminal

# npm run prod:2

npm run build:2
npm run server:prod:2
```

Change folder name to see the finished version i.e. `step_0` to `step_0_finish`

# Step 0

### Use normalizr

API response is the array of object. `[obj, obj, ...]`

```js
// action payload
[{
  "id": 2,
  "user_id": 1,
  "title": "Chocolate Covered ...",
  "slug": "chocolate-covered...",
  "body": "Chocolate Covered ...",
  "comments": [{
    "id": 2,
    "post_id": 2,
    "name": "Nala",
    "body": "Awesome",
    ...
  }, {
    "id": 4,
    "post_id": 2,
    "name": "Baboo",
    "body": "You baboo!",
    ...
  }]
}, {
  "id": 1,
  "user_id": 1,
  "title": "Hello World!",
  "slug": "hello-world",
  "body": "Quia et suscipit...",
  "comments": [{
    "id": 1,
    "post_id": 1,
    "name": "Luna",
    "body": "Cool!",
  }, {
    "id": 3,
    "post_id": 1,
    "name": "Nala",
    "body": "Amazing",
  }]
}]
```

Nested response ที่เป็น array แบบนี้มักจะได้จาก api ซึ่งยากกับการจัดการ เราอยากจะ "ยุบ" โครงสร้างแบบนี้ให้แบน และทำให้เป็น object มากกว่า array ซึ่ง normalizr จะทำให้เราได้โครงสร้างข้อมูลแบบนี้แทน `{ result, entities }`

```js
{
  result: [2, 1],
  entities: {
    posts: {
      1: {
        "id": 1,
        "user_id": 1,
        "title": "Hello World!",
        "slug": "hello-world",
        "body": "Quia et suscipit...",
        "comments": [{
          "id": 1,
          ...
        }, {
          "id": 3,
          ...
        }]
      },
      2: {
        "id": 2,
        "user_id": 1,
        "title": "Chocolate Covered ...",
        "slug": "chocolate-covered...",
        "body": "Chocolate Covered ...",
        "comments": [{
          "id": 2,
          ...
        }, {
          "id": 4,
          ...
        }]
      }
    }
  }
}
```

# Step 1

### Separate hotServer and server

### Use CSS Modules

# Step 2

### Build and Server-side render (Universal)

# Step 3

### Admin app

# Packages

```
npm i -S \
babel-plugin-transform-react-constant-elements \
babel-plugin-transform-react-inline-elements \
babel-plugin-transform-runtime \
babel-polyfill \
babel-register \
body-parser \
classnames \
compression \
dotenv \
express \
hpp \
helmet \
isomorphic-fetch \
lodash \
normalizr \
react@15.0.0-rc.2 \
react-dom@15.0.0-rc.2 \
react-markdown \
react-redux \
react-router \
redux \
serialize-javascript \
serve-favicon
```

```
npm i -D \
autoprefixer \
babel-core \
babel-loader \
babel-preset-es2015 \
babel-preset-es2015-native-modules \
babel-preset-react \
babel-preset-react-hmre \
babel-preset-stage-2 \
compression-webpack-plugin \
css-loader \
extract-text-webpack-plugin \
file-loader \
json-loader \
node-sass \
npm-run-all \
postcss-loader \
redux-logger \
rimraf \
sass-loader \
stats-webpack-plugin \
style-loader \
url-loader \
webpack@2.1.0-beta.4 \
webpack-dev-middleware \
webpack-hot-middleware
```
