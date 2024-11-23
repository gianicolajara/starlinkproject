/**
 * Storage library to interact with the web storage API
 */
export const storage = () => {
  if (!window.localStorage) {
    return -1;
  }

  /**
   * save data in localstorage
   * with a expire variable
   * expire time is 1 day by default
   */
  const save = ({ key, data, expire = true, expireTime = 86400000 }) => {
    let insertData;

    if (expire) {
      insertData = {
        data,
        expire: Date.now() + expireTime,
      };
    }

    insertData = {
      data,
    };

    window.localStorage.setItem(key, JSON.stringify(insertData));
  };

  //delete data in local storage
  const del = (key) => {
    if (!window.localStorage.getItem(key)) {
      return null;
    }

    window.localStorage.removeItem(key);
  };

  /**
   * get data from localstorage
   * if data is expired, the data will be delete
   * and the return will be null
   */
  const get = (key) => {
    if (!window.localStorage.getItem(key)) {
      return null;
    }

    const isExpired =
      JSON.parse(window.localStorage.getItem(key)).expire <= Date.now();

    if (isExpired) {
      del(key);
      return null;
    }

    return JSON.parse(window.localStorage.getItem(key)).data;
  };

  return { save, del, get };
};
