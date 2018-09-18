import React from 'react';
import UnstyledCollapse from './UnstyledCollapse';
import WithHintTextCollapse from './withHintTextCollapse';

const ItpRcCollapseExample = () => (
  <div style={{ margin: '0 30px 0 40px' }}>
    <h2>Using basic css</h2>
    <h3>Unstyled</h3>
    <UnstyledCollapse />
    <h3>More Complex Collapse example</h3>
    <WithHintTextCollapse />
  </div>
);

export default ItpRcCollapseExample;
