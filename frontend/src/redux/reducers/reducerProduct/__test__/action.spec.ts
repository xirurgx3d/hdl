import * as actions from '../action'
import types from '../constants'

describe('action', () => {
  test('getProdListRequest', () => {
    expect(actions.getProdListRequest()).toEqual({
      type:types.GET_PRODUCT
    })
  })
})

export {}
