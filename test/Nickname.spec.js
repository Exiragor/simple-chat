import { shallow } from '@vue/test-utils'
import Nickname from '@/components/Nickname.vue'
import store from '@/store/store'

describe('Nickname.vue', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(Nickname, {
            store
        })

        expect(wrapper.html()).toMatchSnapshot()
    })
})