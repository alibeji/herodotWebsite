export const state = () => ({
  confirmed: false,
})
export const mutations = {
  confirm(state) {
    localStorage.setItem('confirmed', true)
    state.confirmed = true
  },
}
