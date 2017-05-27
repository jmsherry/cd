// Export Constants
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const TOGGLE_MENU = 'TOGGLE_MENU';

// Export Actions
export function toggleMenu() {
  console.log('in toggleMenu');
  return {
    type: TOGGLE_MENU,
  };
}
