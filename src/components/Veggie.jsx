import { useState, useEffect } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../styles/c_styles/veggie.scss'
import { Link } from 'react-router-dom'

const LS_VEGGIE_KEY = 'veggie'

const Veggie = () => {
  const [veggie, setVeggie] = useState([])

  useEffect(() => {
    const checkLs = localStorage.getItem(LS_VEGGIE_KEY)

    if (checkLs) {
      return setVeggie(JSON.parse(checkLs))
    }

    try {
      const fetchData = async () => {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=51f736d4a32042f3ad0dd72d9c21d64a&tags=vegetarian&number=12`
        )
        const data = await res.data.recipes
        localStorage.setItem(LS_VEGGIE_KEY, JSON.stringify(data))
        setVeggie(data)
      }
      fetchData()
    } catch (error) {
      alert('Ошибка при загрузке данных')
      console.log(error)
    }
  }, [])

  return (
    <section className="veggie">
      <h2 className="veggie__title">Veggie</h2>
      <Splide
        className="veggie__slider"
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          draggable: 'free',
          gap: '2rem',
        }}
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <div className="veggie__item">
                <h5>{recipe.title}</h5>
                <img src={recipe.image} alt={recipe.title} />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

export default Veggie
