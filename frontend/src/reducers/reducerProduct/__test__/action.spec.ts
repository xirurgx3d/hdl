import * as actions from '../action'
import types from '../constants'

describe('action', () => {
  test('SortProdList', () => {
    expect(actions.SortProdList({})).toEqual({
      type:types.SORT_PRODUCT,
      payload:{}
    })
  })
})

export {}