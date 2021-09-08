import React from 'react'
import { render } from 'react-dom'
import Resume from './resume.mdx'
import Container from './components/Container'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <>
      <main style={{ maxWidth: '80ch', paddingBottom: '2rem' }}>
        <Container>
          <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <ThemeToggle />
          </div>
          <Resume />
        </Container>
      </main>
    </>
  )
}

render(<App />, document.getElementById('app'))
