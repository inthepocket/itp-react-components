import Collapse from '@inthepocket/itp-rcc-collapse'
import React from 'react'

import './styles.css'

const Header = ({title, hintText}) => (
  <div className="collapse-header">
    <span>{title}</span>
    <div className="collapse-controls">
      {hintText && <span>{hintText}</span>}
      <div className="collapse-icon-container">
        <svg height="11" width="15">
          <path d="M7 5.116L11.242.764l2.655 2.73L7 10.57.103 3.494 2.758.764 7 5.116zm4.24-2.498L7 6.968l-4.241-4.35-.851.875L7 8.717l5.092-5.224-.851-.875h-.001z" />
        </svg>
      </div>
    </div>
  </div>
)

const WithHintTextCollapse = () => (
  <Collapse className="collapse-styled">
    <Collapse.Panel
      header={<Header title="Collapse Panel 1" hintText="Collapse Hint Text" />}
      showArrow={false}
    >
      <div className="collapse-content">
        <span>Collapse Panel Content 1</span>
      </div>
    </Collapse.Panel>
    <Collapse.Panel
      header={<Header title="Collapse Panel 2" />}
      showArrow={false}
    >
      <div className="collapse-content">
        <span>Collapse Panel Content 2</span>
      </div>
    </Collapse.Panel>
  </Collapse>
)

export default WithHintTextCollapse
