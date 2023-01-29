import { useState, useEffect } from 'react'
import axios from 'axios'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../styles/c_styles/popular.scss'

const LS_POPULAR_KEY = 'popular'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const checkLs = localStorage.getItem(LS_POPULAR_KEY)

    if (checkLs) {
      return setPopular(JSON.parse(checkLs))
    }
		
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/random?apiKey=51f736d4a32042f3ad0dd72d9c21d64a&number=12`
        )
        const data = await res.data.recipes
        localStorage.setItem(LS_POPULAR_KEY, JSON.stringify(data))
        setPopular(data)
      }
      fetchData()
    } catch (error) {
      alert('Ошибка при загрузке данных')
      console.log(error)
    }
  }, [])

  return (
    <section className="popular">
      <Splide
        className="popular__slider"
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          draggable: 'free',
          gap: '2rem',
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <div className="popular__item">
              <h5>{recipe.title}</h5>
              <img src={recipe.image} alt={recipe.title} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

export default Popular
