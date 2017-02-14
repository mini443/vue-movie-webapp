/**
 * Created by sheyunsi on 2017/2/5.
 */
// import axios from 'axios'

const BASE_URL = 'https://api.douban.com/v2/movie/'
// 热映
const POPULAR_API = BASE_URL + 'in_theaters'
// 待映
const COMING_API = BASE_URL + 'coming_soon'
// top
// const TOP_API = BASE_URL + 'top250'
// // 影片详情
// const FILMDETAIL_API = BASE_URL + 'subject/'
// // 人物详情
// const PERSONDETAIL_API = BASE_URL + 'celebrity/'

export default {
  /**
   * 热映列表
   * @param params
   * {city:城市,start:分页起始,count:每次请求数量}
   */
  popular (params) {
    return axios.jsonp(POPULAR_API, params)
  },
  /**
   * 待映
   */
  coming (params) {
    return axios.jsonp(COMING_API, params)
  }
}
