import { shallow } from '@vue/test-utils'
import Increment from '@/components/Increment.vue'

describe('Increment.vue', () => {
    it('Init component', () => {
        expect(Increment.data().increm).toBe(0)
    });

    // it('Check increment action', () => {
    //     const wrapper = shallow(Increment)
    //     const btn = wrapper.find('button')
    //     var initIncr = Increment.data().increm
    //
    //     btn.trigger('click');
    //     expect(wrapper.data().increm).toBe(++initIncr)
    // })
});