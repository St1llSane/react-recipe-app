import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../styles/c_styles/recipe.scss'

const Recipe = () => {
  const params = useParams()
  const [recipe, setRecipe] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=51f736d4a32042f3ad0dd72d9c21d64a`
      )
      setRecipe(res.data)
    }
    fetchRecipe()
  }, [params.name])

  return (
    <div className="recipe">
      <div className="recipe__left">
        <h4>{recipe.title}</h4>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe__right">
        <button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
        <button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </button>
        {activeTab === 'instructions' && (
          <>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
          </>
        )}
        {activeTab === 'ingredients' && (
          <>
            <ul>
              {recipe.extendedIngredients.map((item) => (
                <li key={item.id}>{item.original}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default Recipe
