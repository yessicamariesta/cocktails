import React from 'react'
import { SectionTitle } from '../styles/CocktailList.styled'
import { SectionWrapper } from '../styles/Section.styled'

export default function About() {
  return (
    <SectionWrapper className='about-section'>
      <SectionTitle>about us</SectionTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
    </SectionWrapper>
  )
}
