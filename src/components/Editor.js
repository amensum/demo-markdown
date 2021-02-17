import React, { useEffect } from 'react'
import AceEditor from 'react-ace'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setFileSource, invokeFileTranslate } from '../actions/markdown.actions'
import PropTypes from 'prop-types'
import { useStats } from '../hooks'

import 'ace-builds/src-noconflict/mode-markdown'
import 'ace-builds/src-noconflict/theme-monokai'

export const PureEditor = ({ source, name, path, setFileSource, invokeFileTranslate }) => {
  const [symbols, lines, bytes] = useStats(source)

  // invoke file translate on component unmount
  useEffect(() => invokeFileTranslate, [])

  return (
    <div className={'card'}>
      <div className={'card-header'}>
        {name} | {lines} lines | {symbols} symbols | {bytes} bytes
      </div>
      <div className={'card-body'}>
        <AceEditor
          value={source}
          onChange={setFileSource}
          placeholder={'Type something...'}
          mode={'markdown'}
          theme={'monokai'}
          height={'100%'}
          width={'100%'}
          fontSize={14}
          showGutter={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          setOptions={{
            tabSize: 2,
          }}/>
      </div>
      <div className={'card-footer'}>
        ~/{path}
      </div>
    </div>
  )
}

PureEditor.propTypes = {
  source: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string,
  setFileSource: PropTypes.func,
  invokeFileTranslate: PropTypes.func
}

const mapStateToProps = ({ markdown }, { id }) => ({
  name: markdown.files[id]?.name,
  path: markdown.files[id]?.path,
  source: markdown.files[id]?.source,
})

const mapDispatchToProps = (dispatch, { id }) => bindActionCreators({
  setFileSource: source => setFileSource(id, source),
  invokeFileTranslate: () => invokeFileTranslate(id)
}, dispatch)

const Editor = connect(mapStateToProps, mapDispatchToProps)(PureEditor)

Editor.propTypes = {
  id: PropTypes.number
}

export default Editor