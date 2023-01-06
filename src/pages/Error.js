import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../styles/Button.styled'
import { ErrorContainer } from '../styles/Error.styled'
import { SectionWrapper } from '../styles/Section.styled'

export default function Error() {
  return (
    <SectionWrapper className='error-page'>
      <ErrorContainer>
        <h1>oops! it's a dead end</h1>
        <Button className='btn-primary'>
          <Link to='/'>back home</Link>
        </Button>
      </ErrorContainer>
    </SectionWrapper>
  )
}
