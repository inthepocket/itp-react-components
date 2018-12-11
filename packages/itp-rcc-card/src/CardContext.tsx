import { createContext } from 'react';
import CardStylesInterface from './CardStylesInterface';

interface CardContextInterface {
  prefixCss?: string | null;
  size: 'small' | 'default' | 'large';
  styles?: CardStylesInterface | null;
}

/**
 * Card Context
 */
const CardContext =
  createContext<CardContextInterface>({ prefixCss: 'card', size: 'default', styles: null });

export default CardContext;
