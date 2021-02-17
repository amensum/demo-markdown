import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { PurePreview } from '../components/Preview'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('base render PurePreview', () => {
  act(() => {
    ReactDOM.render(
      <PurePreview
        markdown={'<h1>Hello World</h1>'}
        name={'test.md'}
        path={'home/test.md'}
      />,
      container
    )
  })

  const header = container.querySelector('.card-header')
  const footer = container.querySelector('.card-footer')
  const body = container.querySelector('.card-body')

  expect(header.textContent).toBe('test.md')
  expect(footer.textContent).toBe('~/home/test.md')
  expect(body.innerHTML).toBe('' +
    '<div class="markdown-body">' +
    '<h1>Hello World</h1>' +
    '</div>'
  )
})