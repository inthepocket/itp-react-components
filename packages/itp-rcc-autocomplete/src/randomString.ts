/**
 * We're using this method for input name attributes
 * as another workaround for Chrome's stubborn autofill / autocomplete features
 */
export default (prefix: string) => `${prefix}-${Math.random()}`;