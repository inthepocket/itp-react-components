import React from 'react'
import Collapse from '@inthepocket/itp-rcc-collapse'
import './styles.css'
import styled from 'styled-components'

const Icon = styled(({className}) => (
  <svg className={className} height="11" width="15">
    <path d="M7 5.116L11.242.764l2.655 2.73L7 10.57.103 3.494 2.758.764 7 5.116zm4.24-2.498L7 6.968l-4.241-4.35-.851.875L7 8.717l5.092-5.224-.851-.875h-.001z" />
  </svg>
))`
  transition: transform 150ms ease;
  transform: rotate(360deg);
  fill: ${props => props.theme.color.main};
`

const IconWrapper = styled(({className}) => (
  <div className={`${className} collapse-icon-container`}>
    <Icon />
  </div>
))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  background-color: ${props => props.theme.color.secondary};
  border-radius: 24px;
`

const CollapseControls = styled(({className, hintText}) => (
  <div className={className}>
    <span>{hintText}</span>
    <IconWrapper />
  </div>
))`
  display: flex;
  align-items: center;
`

const CollapseContent = styled(({className, title}) => (
  <div className={className}>
    <span>{title}</span>
  </div>
))`
  padding: 25px 10px;
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.color.secondary};
`

const Header = styled(({className, title, hintText}) => (
  <div className={className}>
    <span>{title}</span>
    <CollapseControls hintText={hintText} />
  </div>
))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: ${props => `1px solid ${props.theme.color.main}`};
  font-family: ${props => props.theme.font.main};
  color: ${props => props.theme.color.main};
`

const WithHintText = () => (
  <Collapse>
    <Collapse.Panel
      header={<Header title="Collapse Panel 1" hintText="Collapse Hint Text" />}
      showArrow={false}
    >
      <CollapseContent title="Collapse Panel Content 1" />
    </Collapse.Panel>
    <Collapse.Panel
      header={<Header title="Collapse Panel 2" />}
      showArrow={false}
    >
      <CollapseContent title="Collapse Panel Content 2" />
    </Collapse.Panel>
  </Collapse>
)

export default WithHintText
