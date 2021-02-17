import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const PurePreview = ({ markdown, name, path }) => {
  return (
    <div className={'card'}>
      <div className={'card-header'}>
        {name}
      </div>
      <div className={'card-body'}>
        <div
          className={'markdown-body'}
          dangerouslySetInnerHTML={{ __html: markdown }}
        />
      </div>
      <div className={'card-footer'}>
        ~/{path}
      </div>
    </div>
  )
}

PurePreview.propTypes = {
  markdown: PropTypes.string,
  name: PropTypes.string,
  path: PropTypes.string
}

const mapStateToProps = ({ markdown }, { id }) => ({
  name: markdown.files[id]?.name,
  path: markdown.files[id]?.path,
  markdown: markdown.files[id]?.markdown,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

const Preview = connect(mapStateToProps, mapDispatchToProps)(PurePreview)

Preview.propTypes = {
  id: PropTypes.number
}

export default Preview