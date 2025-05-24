#### Définition : 


**Redux Toolkit** est la **boîte à outils officielle recommandée** pour utiliser **Redux** plus facilement et de manière plus efficace avec React (ou d'autres frameworks JS).

**Redux est un modèle et une bibliothèque permettant de gérer et de mettre à jour l'état global d'une application.** L'idée de base derrière Redux : un emplacement centralisé unique pour contenir l'état global de votre application et des modèles spécifiques à suivre lors de la mise à jour de cet état pour rendre le code prévisible.

Par rapport à `Redux` : 
* Une `action` est un objet JavaScript simple doté d'un champ `type`. **On peut considérer une action comme un événement décrivant un événement survenu dans l'application**.
* Un **créateur d'action** est une fonction qui crée et renvoie un objet d'action. 
* Un **réducteur** est une fonction qui reçoit l'état actuel `state` et un  objet `action`, décide comment mettre à jour l'état si nécessaire et renvoie le nouvel état : **(state, action) => newState**. Vous pouvez considérer un **réducteur** comme un écouteur d'événements qui gère les événements en fonction du type d'action (événement) reçu.

Les réducteurs doivent toujours suivre certaines règles spécifiques :

* Ils ne devraient calculer la nouvelle valeur d'état qu'en fonction des arguments `state` et `action`

* Ils ne sont pas autorisés à modifier les valeurs existantes `state`. Ils doivent plutôt effectuer des *mises à jour immuables* , en copiant les valeurs existantes `state` et en modifiant les valeurs copiées.
 
* Ils doivent être « purs » : ils ne peuvent pas effectuer de logique asynchrone, calculer des valeurs aléatoires ou provoquer d'autres « effets secondaires ».


La logique à l'intérieur des fonctions de réduction suit généralement la même série d'étapes :

* Vérifiez si le réducteur se soucie de cette action
   * Si tel est le cas, faites une copie de l'état, mettez à jour la copie avec de nouvelles valeurs et renvoyez-la 

* Sinon, renvoyez l'état existant inchangé


####  Installation

```bash
npm install @reduxjs/toolkit react-redux
```

### Exemple partant de `useState`

Voici un exemple côté à côte d'un petit compteur, d'abord avec `useState`, puis avec `useReducer` et pour finir avec l'implémentation de `Redux Toolkit`.

✅ Version avec `useState`

```jsx
import React, { useState } from 'react';

function CounterUseState() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Compteur (useState)</h2>
      <p>Valeur : {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

🔧 Version avec `useReducer`

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Compteur (useReducer)</h2>
      <p>Valeur : {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

⚙️ Étapes générales avec `Redux Toolkit`

1. Créer un slice avec `createSlice()`

2. Configurer le store Redux avec `configureStore()`

3. Fournir le store à ton app avec `<Provider>`

4. Utiliser **useSelector** pour lire l’état, et **useDispatch** pour envoyer des actions

##### I. 📦 Créer le compteur avec `createSlice`

Un **slice** (traduction = **tranche**, comme une **part de gâteau**) représente :

* Une **portion du state global**

* Les **actions** associées à cette portion

* Le **reducer** qui modifie cette portion

> 🧠 Chaque slice s’occupe d’un sujet précis (ex. : compteur, utilisateur, panier...).

**Un slice contient** :

* `initialState` : l’état initial de cette "tranche"

* `reducers` : les fonctions qui modifient cet état

* `actions` : générées automatiquement

* `reducer` final : à donner au store


```jsx
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

```

##### II. 🏗️ Créer le store Redux
Le **store Redux** est **l’endroit central où tout l’état de ton application est stocké**.
> 🗃️ Imagine un grand coffre où tu mets tous tes fichiers d’état : utilisateurs, panier, produits, etc.

**Le store contient** :
* Tous les **états globaux**

* Tous les **reducers**

* Le **middleware** (si besoin)

* Le support des DevTools 


```jsx
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

```

##### III. 🔌 Fournir le store à ton app React

```jsx
// index.js ou App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
);

```

##### IV. 🎛️ Utiliser le store dans le composant

```jsx
// Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Compteur (Redux Toolkit)</h2>
      <p>Valeur : {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;

```

```plaintext
+--------------------+
|     Redux Store    |  ← Le coffre central
+--------------------+
|                    |
|  counter: { ... }  |  ← Slice 1 : compteur
|  user: { ... }     |  ← Slice 2 : utilisateur
|  products: { ... } |  ← Slice 3 : produits
|                    |
+--------------------+

Chaque slice = état local + actions + reducers

```

Dans une application React, il est bon de savoir que : 
* L'`état` décrit l'état de l'application à un moment précis
* L'interface utilisateur est rendue en fonction de cet état
* Lorsqu'un événement se produit (par exemple, lorsqu'un utilisateur clique sur un bouton), l'état est mis à jour en fonction de ce qui s'est produit.
* L'interface utilisateur est réaffichée en fonction du nouvel état

https://redux.js.org/tutorials/essentials/part-1-overview-concepts