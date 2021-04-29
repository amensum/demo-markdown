/* global log */

import React, { useEffect, useState, useMemo } from 'react'
import { load } from './requests/file'
import { Editor, Preview, Controls } from './components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { invokeFileTranslate, setFile } from './actions/markdown.actions'
import PropTypes from 'prop-types'
import { stringDecBase64 } from './utils/string'

const PureApp = ({ setFile, invokeFileTranslate }) => {
  const [preview_mode, setPreviewMode] = useState(true)
  const id = useMemo(() => 1, [])

  const url = 'https://api.github.com/repos/amensum/hasget/contents/README.md'
  const auth = ''

  useEffect(() => {
    load(url, auth).then(json => {
      if (json.status === 200) {
        setFile(id, {
          name: json.result.name,
          path: json.result.path,
          source: stringDecBase64(json.result.content)
        })

        invokeFileTranslate(id)
      }
    })
  }, [])

  const onChangeMode = ({ target }) => {
    setPreviewMode(target.checked)
  }

  log.primary('RENDER', 'App')

  return (
    <div className={'demo'}>
      <div className={'sidebar'}/>
      <div className={'workarea'}>
        <div className={'header'}>
          <Controls
            switches={[
              {
                value: 'preview',
                onChange: onChangeMode,
                checked: preview_mode,
              },
            ]}
          />
        </div>
        <div className={'body'}>
          {
            preview_mode
              ? <Preview id={id}/>
              : <Editor id={id}/>
          }
        </div>
      </div>
    </div>
  )
}

PureApp.propTypes = {
  setFile: PropTypes.func,
  invokeFileTranslate: PropTypes.func
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setFile, invokeFileTranslate
}, dispatch)

const App = connect(null, mapDispatchToProps)(PureApp)

export default App