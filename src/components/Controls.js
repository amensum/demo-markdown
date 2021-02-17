/* global log */

import React from 'react'
import PropTypes from 'prop-types'

const Controls = ({ buttons = [], switches = [] }) => {
  log.primary('RENDER', 'Controls')

  return (
    <div className={'card'}>
      <div className={'card-body'}>
        {buttons.map(({ value, onClick }, index) => (
          <input
            key={index}
            type={'button'}
            className={'btn btn-primary'}
            value={value}
            onClick={onClick}
          />
        ))}
        {switches.map(({ value, checked, onChange }, index) => (
          <div
            className={'form-check form-switch form-check-inline'}
            key={index}
          >
            <input
              className={'form-check-input'}
              type={'checkbox'}
              checked={checked}
              onChange={onChange}
            />
            <label className={'form-check-label'}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

Controls.propTypes = {
  buttons: PropTypes.array,
  switches: PropTypes.array
}

export default Controls