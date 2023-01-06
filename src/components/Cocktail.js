import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../styles/Button.styled'
import { CocktailFooter, CocktailWrapper } from '../styles/Cocktail.styled'

export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <CocktailWrapper>
      <div>
        <img src={image} alt={name} />
      </div>

      <CocktailFooter>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Button className='btn-primary btn-details'>
          <Link to={`/cocktail/${id}`}>details</Link>
        </Button>
      </CocktailFooter>
    </CocktailWrapper>
  )
}
