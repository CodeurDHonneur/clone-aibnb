# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

Liens utils : 
1- https://www.youtube.com/watch?v=k4mjF4sPITE
2- https://www.youtube.com/watch?v=0CLOZ6ihbN4&list=PLFlURPbtyOqhNGro5cR5hsHrqzxoss4Wo&index=3 (app contacts)
3- https://www.youtube.com/watch?v=YDNntFHlq7k&list=PLFlURPbtyOqhNGro5cR5hsHrqzxoss4Wo&index=4 (clone Aibnb - React Router Dom et Redux-Toolkit)
4- https://www.youtube.com/watch?v=FEPcn3VkRkE&list=PLFlURPbtyOqhNGro5cR5hsHrqzxoss4Wo&index=2 (système de réservation)
5- https://www.youtube.com/watch?v=UWBLRqHba7U&list=PLFlURPbtyOqhNGro5cR5hsHrqzxoss4Wo&index=5 (authentificatio)
