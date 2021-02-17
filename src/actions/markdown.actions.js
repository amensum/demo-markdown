import types from './markdown.types'

export const setFile = (id, file) => ({
  type: types.SET_FILE,
  payload: { id, file }
})

export const setFileSource = (id, source) => ({
  type: types.SET_FILE_SOURCE,
  payload: { id, source }
})

export const invokeFileTranslate = id => ({
  type: types.INVOKE_FILE_TRANSLATE,
  payload: { id }
})