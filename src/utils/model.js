import request from './request'
import api from './api'

const model = {
  login: async (data) => {
    const success = await request.get(api.login, data)
    return success
  },
  actionForm: async (data) => {
    const success = await request.post(api.actionForm, data)
    return success
  }
}
export default model
