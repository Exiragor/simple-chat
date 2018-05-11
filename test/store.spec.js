import { mutations, actions, getters} from '@/store/store'

describe('Store.js', () => {
    describe('Mutations', () => {
        const { CHANGE_NICKNAME, ADD_MESSAGE} = mutations

        it('CHANGE_NICKNAME', () => {
            const state = { nickname: {}}
            CHANGE_NICKNAME(state, { name: 'testName', color: 'testColor' })

            expect(state).toEqual({ nickname: { name: 'testName', color: 'testColor' } })
        })

        it('ADD_MESSAGE', () => {
            const state = { messages: []}
            ADD_MESSAGE(state, {text: 'testText', author: 'test'})

            expect(state).toEqual({ messages: [{text: 'testText', author: 'test'}] })
        })
    })

    describe('Actions', () => {
        const commit = jest.fn()

        it('changeNickName with params', () => {
            const state = {nickname: {}}
            actions.changeNickName({commit, state}, {name: 'testName', color: 'testColor'})

            expect(commit).toBeCalledWith('CHANGE_NICKNAME', {name: 'testName', color: 'testColor'})
        })

        it('changeNickName without params', () => {
            const state = {nickname: {name: 'test1', color: 'test2'}}
            actions.changeNickName({commit, state}, {})

            expect(commit).toBeCalledWith('CHANGE_NICKNAME', {name: 'test1', color: 'test2'})
        })

        it('addMessage', () => {
            const state = {messages: []}
            actions.addMessage({commit, state}, {text: 'testText', author: 'testAuthor'})

            expect(commit).toBeCalledWith('ADD_MESSAGE', {text: 'testText', author: 'testAuthor'})
        })
    })

    describe('Getters', () => {
        it('messages', () => {
            const messages = [
                {text: 'testText1', author: 'testAuthor1'},
                {text: 'testText2', author: 'testAuthor2'},
            ]
            const state = {
                messages
            }
            let res = getters.messages(state)

            expect(res).toEqual(messages)
        })

        it('nickname', () => {
            const nickname = {name: 'testName', color: 'testColor'}
            const state = {
                nickname
            }
            let res = getters.nickname(state)

            expect(res).toEqual(nickname)
        })
    })
})

