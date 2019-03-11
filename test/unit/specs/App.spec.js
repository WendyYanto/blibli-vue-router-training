import {mount} from '@vue/test-utils'
import App from '@/App'
import store from '@/store'
import i18n from '@/i18n'

describe('App.vue', () => {
  
  it('oke', () => {
    expect(1).toEqual(1)
  })

  it('mount well', () => {
    const wrapper = mount(App, {
      store,
      i18n
    })
  })

  
})
