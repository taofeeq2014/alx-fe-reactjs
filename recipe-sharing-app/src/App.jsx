import RecipeStore from './Component/RecipeStore'
import RecipeList from './Component/RecipeList' 
import AddRecipeForm from './Component/AddRecipeForm'
import RecommendationsList from './Component/RecommendationsList'
import FavoritesList from './Component/FavoritesList'
import EditReciptForm from './Component/EditReciptForm'
import RecipeDetails from './Component/RecipeDetails'
import DeleteRecipeButton from './Component/DeleteRecipeButton'
import SearchBar from './Component/SearchBar'
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
      <SearchBar />
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
