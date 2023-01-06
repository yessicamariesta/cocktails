import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { Button } from '../styles/Button.styled'
import { SectionTitle } from '../styles/CocktailList.styled'
import { SectionWrapper } from '../styles/Section.styled'
import {
  DrinkData,
  DrinkInfo,
  DrinkWrapper,
} from '../styles/SingleCocktail.styled'

export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <SectionTitle>no cocktail to display</SectionTitle>
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail
    return (
      <SectionWrapper className=' cocktail-section'>
        <Button className='btn primary'>
          <Link to='/'>back home</Link>
        </Button>
        <SectionTitle>{name}</SectionTitle>

        <DrinkWrapper>
          <img src={image} alt={name} />
          <DrinkInfo>
            <p>
              <DrinkData>name :</DrinkData> {name}
            </p>

            <p>
              <DrinkData>category :</DrinkData> {category}
            </p>

            <p>
              <DrinkData>info :</DrinkData> {info}
            </p>

            <p>
              <DrinkData>glass :</DrinkData> {glass}
            </p>

            <p>
              <DrinkData>instructons :</DrinkData> {instructions}
            </p>

            <p>
              <DrinkData>ingredients :</DrinkData>{' '}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null
              })}
            </p>
          </DrinkInfo>
        </DrinkWrapper>
      </SectionWrapper>
    )
  }
}
