import RecipeStore from './component/RecipeStore'
import RecipeList from './component/RecipeList' 
import AddRecipeForm from './component/AddRecipeForm'
import RecommendationsList from './component/RecommendationsList'
import FavoritesList from './component/FavoritesList'
import EditReciptForm from './component/EditReciptForm'
import RecipeDetails from './component/RecipeDetails'
import DeleteRecipeButton from './component/DeleteRecipeButton'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeStore />
    <RecipeList />
    <AddRecipeForm />
    <RecommendationsList />
    <FavoritesList />
    <EditReciptForm />
    <RecipeDetails />
    <DeleteRecipeButton />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
