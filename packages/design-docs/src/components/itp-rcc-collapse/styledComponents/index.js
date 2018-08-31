import React, {Fragment, Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import WithHintText from './WithHintText'
import Unstyled from './Unstyled'

const Title = styled.h2`
  color: ${props => props.theme.color.main};
  font-family: ${props => props.theme.font.main};
`

const SubTitle = styled.h3`
  color: ${props => props.theme.color.secondary};
  font-family: ${props => props.theme.font.secondary};
`

const Button = styled.button`
  border-color: ${props => props.theme.color.secondary};
  border-width: 5px;
  font-size: 20px;
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.secondary};
  :focus {
    border-radius: 2px;
    outline: none;
    box-shadow: ${props => `0 0 0 1px ${props.theme.color.secondary}`};
  }
`

const StyledComponentsCollapseExamples = ({onChangeTheme}) => (
  <Fragment>
    <Title>Using Styled Components with Theming</Title>
    <Button onClick={onChangeTheme}>Change theme</Button>
    <SubTitle>Unstyled with Theming only</SubTitle>
    <Unstyled />
    <SubTitle>More complex example with Theming</SubTitle>
    <WithHintText />
  </Fragment>
)

class StyledComponentExamples extends Component {
  state = {theme: 1}

  themes = {
    1: {
      color: {
        main: '#10069f',
        secondary: '#4f5a65',
      },
      font: {main: 'Futura', secondary: 'Avenir'},
    },
    2: {
      color: {
        main: 'red',
        secondary: 'green',
      },
      font: {main: 'Avenir', secondary: 'Futura'},
    },
  }

  render() {
    return (
      <ThemeProvider theme={this.themes[this.state.theme]}>
        <StyledComponentsCollapseExamples
          onChangeTheme={() =>
            this.setState(state => ({theme: state.theme === 1 ? 2 : 1}))
          }
        />
      </ThemeProvider>
    )
  }
}

export default StyledComponentExamples
