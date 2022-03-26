export const state = () => ({
    showContactForm: false,
    showApplyForm: false
})

export const mutations = {
    setShowModal(state, args) {
        state[args.key] = args.val
    },
}