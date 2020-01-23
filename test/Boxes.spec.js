import { shallowMount } from '@vue/test-utils'
import Boxes from '@/components/Boxes.vue'

describe('Logo', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Boxes)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('accepts the correct props', () => {
    const wrapper = shallowMount(Boxes, {
      propsData: {
        quantity: 6
      }
    })

    expect(wrapper.props().quantity).toBe(6)
  })

  it('displays the correct number of boxes according to its props', () => {
    const wrapper = shallowMount(Boxes, {
      propsData: {
        quantity: 6
      }
    })

    expect(wrapper.findAll('button').length).toBe(6)
  })
})
