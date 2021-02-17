/* global it, expect, beforeEach, afterEach */

import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { PureEditor } from '../components/Editor'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('base render PureEditor', () => {
  act(() => {
    ReactDOM.render(
      <PureEditor
        source={'<h1>Hello World</h1>'}
        name={'test.md'}
        path={'home/test.md'}
        setFileSource={() => {}}
        invokeFileTranslate={() => {}}
      />,
      container
    )
  })

  const header = container.querySelector('.card-header')
  const footer = container.querySelector('.card-footer')

  expect(header.textContent).toBe('test.md | 1 lines | 20 symbols | 20 bytes')
  expect(footer.textContent).toBe('~/home/test.md')
})