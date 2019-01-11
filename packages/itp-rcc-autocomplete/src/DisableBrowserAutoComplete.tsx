import * as React from 'react';

const style = {
  display: 'none',
};

/**
 * Disables browser autocomplete
 * https://gist.github.com/niksumeiko/360164708c3b326bd1c8
 */
const DisableBrowserAutoComplete = ({
  className = 'disable-browser-autocomplete',
  children = null,
}) => (
  <form autoComplete="off" className={className}>
    <input autoComplete="false" name="hidden" style={style} type="text" />
    {children}
  </form>
);

interface DisableBrowserAutoCompleteProps {
  className?: string;
  children: React.ReactNode;
}

export default DisableBrowserAutoComplete;
