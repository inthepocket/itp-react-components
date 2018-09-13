import React from 'react'
import Collapse from '@inthepocket/itp-rcc-collapse'

const UnstyledCollapse = () => (
  <Collapse accordion>
    <Collapse.Panel header="Collapse Panel 1">
      Collapse Panel Content 1
    </Collapse.Panel>
    <Collapse.Panel header="Collapse Panel 2">
      Collapse Panel Content 2
    </Collapse.Panel>
  </Collapse>
)

export default UnstyledCollapse
