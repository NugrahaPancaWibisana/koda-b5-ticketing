export const userApi = (data, time, cb) => {
  const callback = cb(data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (callback.ok) {
        resolve(callback.data);
      } else {
        reject(callback.error);
      }
    }, time);
  });
};
