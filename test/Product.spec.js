import { mount, shallowMount } from '@vue/test-utils'
import Product from '@/components/Product.vue'

describe('Product', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Product, {
      propsData: {
        title: 'some title',
        description: 'some description'
      }
    })
    expect(wrapper.text()).toMatch('some title')
  })
})

