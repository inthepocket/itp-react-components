import React from 'react'
import Collapse from '@inthepocket/itp-rcc-collapse'
import styled from 'styled-components'

const Panel = Collapse.Panel

const StyledCollapse = styled(Collapse)`
  font-family: ${props => props.theme.font.main};
  color: ${props => props.theme.color.main};
`
const PanelContent = styled.div`
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.color.secondary};
`

const Unstyled = () => (
  <StyledCollapse accordion>
    <Panel header="Collapse Panel 1">
      <PanelContent>Collapse Panel Content 1</PanelContent>
    </Panel>
    <Panel header="Collapse Panel 2">
      <PanelContent>Collapse Panel Content 2</PanelContent>
    </Panel>
  </StyledCollapse>
)

export default Unstyled
