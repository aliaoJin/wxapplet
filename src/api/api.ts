import request from '@/utils/request'; 
// 获取工地详情
export const getWorkSiteDateils = (data?: any) => {
    return request('/work_site_detail', 'get', data);
};
