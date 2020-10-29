import service from '../utils/request'

export function user_info() {
  return service({
    url: '/user/',
    method: 'get',
  })
}
