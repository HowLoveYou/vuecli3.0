import api from '@/api';
//请求灯杆数据
let queryAllData = (data) => api.post('/light/gisController/queryFilterDdyxzt',data);
export default {
	queryAllData
}
