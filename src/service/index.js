import axios from 'axios';
import { useCookies } from 'vue3-cookies';
import store from '@/store';

const { cookies } = useCookies();
const url = 'https://vue3-course-api.hexschool.io';
const apiPath = 'ken888686';
const config = {
  headers: {
    authorization: store.state.token,
  },
};

/**
 * 登入及驗證
 */
const auth = {
  /**
   * 登入
   * @param {string} account 帳號
   * @param {string} password 密碼
   * @returns Promise
   */
  login(account, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/admin/signin`, {
          username: account,
          password,
        })
        .then((res) => {
          config.headers.authorization = res.data.token;
          cookies.set('token', res.data.token);
          cookies.set('isLogin', true);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * 登出
   * @returns Promise
   */
  logout() {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/logout`, {}, config)
        .then((res) => {
          cookies.set('token', '');
          cookies.set('isLogin', false);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * 驗證是否登入成功
   * @returns Promise
   */
  check() {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/api/user/check`, {}, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

/**
 * 管理控制台
 */
const admin = {
  /**
   * 取得產品
   * @param {number} page 頁數
   * @param {string} category 分類
   * @returns Promise
   */
  getProducts(page = 1, category = '') {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${url}/v2/api/${apiPath}/admin/products?page=${page}&category=${category}`,
          config,
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * 新增產品
   * @param {any} data 產品資訊
   * @returns Promise
   */
  addProduct(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/api/${apiPath}/admin/product`, { data }, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * 刪除產品
   * @param {string} id 產品id
   * @returns Promise
   */
  deleteProduct(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}/v2/api/${apiPath}/admin/product/${id}`, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  /**
   * 編輯產品
   * @param {object} data 產品資訊
   * @returns Promise
   */
  updateProduct(data) {
    return new Promise((resolve, reject) => {
      axios
        .put(
          `${url}/v2/api/${apiPath}/admin/product/${data.id}`,
          { data },
          config,
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

/**
 * 客戶購物
 */
const customer = {
  /**
   * 取得產品列表
   * @param {Number} page 頁數
   * @param {String} category 分類
   * @returns Promise
   */
  getProducts(page = 1, category = '') {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${url}/v2/api/${apiPath}/products?page=${page}&category=${category}`,
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * 取得產品資訊
   * @param {String} id 產品id
   * @returns Promise
   */
  getProduct(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/v2/api/${apiPath}/product/${id}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * 加入購物車
   * @param {String} productId 產品id
   * @param {Number} quantity 數量
   * @returns Promise
   */
  addProduct(productId, quantity = 1) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${url}/v2/api/${apiPath}/cart`,
          {
            data: {
              product_id: productId,
              qty: quantity,
            },
          },
          config,
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * 更新購物車資訊
   * @param {String} productId 產品id
   * @param {Number} quantity 數量
   * @returns Promise
   */
  updateProduct(productId, quantity) {
    return new Promise((resolve, reject) => {
      axios
        .put(
          `${url}/v2/api/${apiPath}/cart/${productId}`,
          {
            data: {
              product_id: productId,
              qty: quantity,
            },
          },
          config,
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * 取得購物車
   * @returns Promise
   */
  getCart() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/v2/api/${apiPath}/cart`, {}, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * 清除購物車
   * @param {String} productId 產品id
   * @returns Promise
   */
  removeCart(productId = '') {
    const reqUrl = productId === ''
      ? `${url}/v2/api/${apiPath}/carts`
      : `${url}/v2/api/${apiPath}/cart/${productId}`;

    return new Promise((resolve, reject) => {
      axios
        .delete(reqUrl, {}, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  submitOrder(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/v2/api/${apiPath}/order`, { data }, config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export { auth, admin, customer };
