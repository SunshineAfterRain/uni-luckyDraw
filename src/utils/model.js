import request from './request'
import api from './api'

const model = {
  login: async (data, header) => {
    const success = await request.get(api.login, data, header)
    return success
  },
  actionForm: async (data, header) => {
    const success = await request.post(api.actionForm, data, header)
    return success
  }
}
export default model
