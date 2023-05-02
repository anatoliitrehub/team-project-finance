import axios from 'axios';

axios.defaults.baseURL = 'https://flat-backend.p.goit.global/api';

export default class StatisticsService {
  static getTransactions(month, year) {
    return axios.get(`/cashflow`, {
      params: { month, year },
    });
  }

  static getCategories(month, year) {
    return axios.get(`/cashflow/stat`, {
      params: { month, year },
    });
  }

  static deleteTransaction(id) {
    return axios.delete(`/cashflow/${id}`);
  }

  static updateTransaction(id) {
    return axios.put(`/cashflow/${id}`);
  }
}
