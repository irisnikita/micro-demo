import request from '@/utility/request'

export const getUserInfoApi = (): Promise<any> => {
	return request({
		method: 'GET',
		url: '/merchant/info',
	})
}
