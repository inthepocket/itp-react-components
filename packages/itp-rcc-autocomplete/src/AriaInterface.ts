/**
 * Interface with WAI-ARIA types
 * https://www.w3.org/WAI/PF/aria/states_and_properties
 */
export default interface AriaInterface {
  'aria-activedescendant'?: string; // Relationship Attributes
  'aria-atomic'?: boolean | 'false' | 'true'; // Live Region Attributes
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'; // Widget Attributes
  'aria-busy'?: boolean | 'false' | 'true'; // Live Region Attributes
  'aria-checked'?: boolean | 'false' | 'true' | 'mixed'; // Widget Attributes
  'aria-controls'?: string; // Relationship Attributes
  'aria-describedby'?: string; // Relationship Attributes
  'aria-disabled'?: boolean | 'false' | 'true'; // Widget Attributes
  'aria-dropeffect'?: // Drag-andDrop Attributes
    'none' | 'link' | 'copy' | 'execute' | 'move' | 'popup';
  'aria-expanded'?: boolean | 'false' | 'true'; // Widget Attributes
  'aria-flowto'?: string; // Relationship Attributes
  'aria-grabbed'?: boolean | 'false' | 'true'; // Drag-andDrop Attributes
  'aria-haspopup'?: // Widget Attributes
    boolean | 'false' | 'true' | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
  'aria-hidden'?: boolean | 'false' | 'true'; // Widget Attributes
  'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'; // Widget Attributes
  'aria-label'?: string; // Widget Attributes
  'aria-labelledby'?: string; // Relationship Attributes
  'aria-level'?: number; // Widget Attributes
  'aria-live'?: 'off' | 'assertive' | 'polite'; // Live Region Attributes
  'aria-multiline'?: boolean | 'false' | 'true'; // Widget Attributes
  'aria-multiselectable'?: boolean | 'false' | 'true'; // Widget Attributes
  'aria-orientation'?: 'horizontal' | 'vertical'; // Widget Attributes
  'aria-owns'?: string; // Relationship Attributes
  'aria-posinset'?: number; // Relationship Attributes
  'aria-pressed'?: boolean | 'false' | 'true' | 'mixed'; // Widget Attributes
  'aria-readonly'?: boolean | 'false' | 'true'; // Widget Attributes
  'aria-relevant'?: // Live Region Attributes
    'text' | 'additions' | 'additions text' | 'all' | 'removals';
  'aria-required'?: boolean | 'false' | 'true'; // Widget Attributes
  'aria-selected'?: boolean | 'false' | 'true'; // Widget Attributes
  'aria-setsize'?: number; // Relationship Attributes
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'; // Widget Attributes
  'aria-valuemax'?: number; // Widget Attributes
  'aria-valuemin'?: number; // Widget Attributes
  'aria-valuenow'?: number; // Widget Attributes
  'aria-valuetext'?: string; // Widget Attributes
  // Other attributes
  'data-toggle'?: string;
  role?: string;
}
