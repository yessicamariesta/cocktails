import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useGlobalContext } from '../context'
import { FormControl, SearchFrom } from '../styles/SearchForm.styled'
import { SectionWrapper } from '../styles/Section.styled'

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <SectionWrapper className='search'>
      <SearchFrom onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </FormControl>
      </SearchFrom>
    </SectionWrapper>
  )
}
