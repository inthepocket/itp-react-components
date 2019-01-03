import React, { PureComponent } from 'react';
import AutoComplete from '@inthepocket/itp-rcc-autocomplete';

import './variables.css';
import './styles.css';

/**
 * The AutoComplete component should be controlled
 * so we need a HOC or something like redux to control value & isLoading
 */
class Controller extends PureComponent {
  state = {
    isLoading: false,
    value: '',
  };

  handleChangeValue = ({ value }) => {
    this.setState({
      isLoading: this.props.isLoading,
      value,
    });

    // Set loading state simulation
    if (this.props.isLoading) {
      setTimeout(this.unsetLoading, 1000);
    }
  }

  // Unset loading state simulation
  unsetLoading = () => {
    this.setState({
      isLoading: false,
    });
  }

  render () {
    const { isLoading, value } = this.state;
    const { isLoading: _omit, ...props } = this.props;

    return (
      <AutoComplete
        {...props}
        isLoading={isLoading}
        onChange={this.handleChangeValue}
        value={value}
      />
    );
  }
}

export default Controller;
