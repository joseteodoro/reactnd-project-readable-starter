import { LOAD_CATEGORIES } from './action-types'

export function loadCategories () {
  return {
    type: LOAD_CATEGORIES,
    categories: []
  }
}
