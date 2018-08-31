import React from 'react'
import UnstyledCollapse from './UnstyledCollapse'
import WithHintTextCollapse from './withHintTextCollapse'
import StyledComponentExamples from './styledComponents'

const ItpRcCollapseExample = () => (
  <div style={{margin: '0 30px 0 40px'}}>
    <h1>ITP Rcc Collapse Examples</h1>
    <h2>Using basic css</h2>
    <h3>Unstyled</h3>
    <UnstyledCollapse />
    <h3>More Complex Collapse example</h3>
    <WithHintTextCollapse />
    <StyledComponentExamples />
  </div>
)

export default ItpRcCollapseExample
