import { createContext } from 'react';
import AutoCompleteStylesInterface from './AutoCompleteStylesInterface';

interface AutoCompleteContextInterface {
  prefixCss?: string | null;
  styles?: AutoCompleteStylesInterface | null;
}

/**
 * AutoComplete Context
 */
const AutoCompleteContext =
  createContext<AutoCompleteContextInterface>({ prefixCss: 'card', styles: null });

export default AutoCompleteContext;
