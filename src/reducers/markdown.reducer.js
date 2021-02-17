import types from '../actions/markdown.types'
import initial from './markdown.state'
import Markdown from 'markdown-it'
import Highlight from 'highlight.js'

const renderer = new Markdown({
  highlight: (str, lang) => {
    if (lang && Highlight.getLanguage(lang)) {
      /* eslint-disable no-empty */
      try {
        return Highlight.highlight(lang, str).value
      } catch (__) {}
      /* eslint-enable no-empty */
    }

    return '' // use external default escaping
  },
})

/* eslint-disable indent */
export default (state = initial, action) => {
  switch (action.type) {
    case types.SET_FILE: {
      const next = { ...state }

      next.files[action.payload.id] = action.payload.file

      return next
    }

    case types.SET_FILE_SOURCE: {
      const next = { ...state }

      next.files[action.payload.id].source = action.payload.source

      return next
    }

    case types.INVOKE_FILE_TRANSLATE: {
      const next = { ...state }

      next.files[action.payload.id].markdown = renderer.render(
        state.files[action.payload.id].source
      )

      return next
    }

    default:
      return state
  }
}
/* eslint-enable indent */