import api from '@/api'

let waterfall = (params) => api.get('/api/defect/waterfall', params);

export default {
  waterfall
}