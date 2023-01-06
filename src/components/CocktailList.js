import React from 'react'
import { useGlobalContext } from '../context'
import { CocktailsCenter, SectionTitle } from '../styles/CocktailList.styled'
import { SectionWrapper } from '../styles/Section.styled'
import Cocktail from './Cocktail'
import Loading from './Loading'

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return (
      <SectionTitle>no cocktails matched your search criteria</SectionTitle>
    )
  }

  return (
    <SectionWrapper>
      <SectionTitle>cocktails</SectionTitle>
      <CocktailsCenter>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </CocktailsCenter>
    </SectionWrapper>
  )
}
