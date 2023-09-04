## step1: bootstrap

```shell
npx create-react-app tennis-3d-app-react --template typescript

npm install prettier -D
npm install eslint-config-prettier eslint-plugin-prettier -D
"plugin:prettier/recommended"
touch .prettierrc.json

# production
npm run build # public folder

# tailwind css
npm i -D tailwindcss 
npm i -D postcss 
npm i -D autoprefixer

npx tailwindcss init -p

# Created Tailwind CSS config file: tailwind.config.js
# Created PostCSS config file: postcss.config.js

# state management
```

## step2: routing with React Router

```shell
npm i react-router-dom
```

## step3: rest api state management with react-query 




## callback hook
callback hook + memo function usage: prevent unnecessary re-render of child components component is re-renderer if parent re-renderer virtual dom change detection avoid re-render of component that fetches data/have heavy compotation