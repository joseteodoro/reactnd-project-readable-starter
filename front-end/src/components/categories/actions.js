
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function loadCategories () {
  return {
    type: LOAD_CATEGORIES,
    categories: []
  }
}
