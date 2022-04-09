/* eslint-disable no-empty-pattern */
// import axios from '@/libs/api.request';

export default {
  namespaced: true,

  state: {},

  mutations: {},

  actions: {
    // 会员信息
    async vipInfo({}, params) {
      // alert(11)
      const response = await axios.request({
        url: "/parameter/query",
        data: params,
      });
      return response;
    },
  },
};
