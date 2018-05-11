import { shallow } from '@vue/test-utils'
import Chat from '@/components/Chat.vue'
import store from '@/store/store'

describe('Chat.vue', () => {
    it('renders message-bubble for each msg in messages', () => {
        const items = ['', '']
        const wrapper = shallow(Chat, {
            computed: { messages: () => items }
        })
        expect(wrapper.findAll('.message-bubble')).toHaveLength(items.length)
    })

    it('call sendMessage on press button', () => {
        const stub = jest.fn()
        const wrapper = shallow(Chat, {
            computed: { messages: () => [] },
            methods: {sendMessage: stub}
        })

        wrapper.find('button').trigger('click')

        expect(stub).toBeCalled()
    })

    it('call sendMessage on press enter', () => {
        const stub = jest.fn()
        const wrapper = shallow(Chat, {
            computed: { messages: () => [] },
            methods: {sendMessage: stub}
        })

        wrapper.find('input').trigger('keypress', {key: 'Enter'})

        expect(stub).toBeCalled()
    })

    it('matches snapshot', () => {
        const items = [
            { text: 'text 1', author: 'author 1', color: '#ff0000'},
            { text: 'text 2', author: 'author 2', color: '#ff0000'},
        ]
        const wrapper = shallow(Chat, {
            computed: { messages: () => items }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    describe('Tests with store', () => {
        const wrapper = shallow(Chat, {
            store,
            data: { text: "test"}
        })
        wrapper.vm.sendMessage()

        it('text returns to empty', () => {
            expect(wrapper.vm.$data.text).toBe('')
        })
        it('sendMessage add a new msg for render', () => {
            expect(wrapper.findAll('.message-bubble')).toHaveLength(1)
        })
    })
});