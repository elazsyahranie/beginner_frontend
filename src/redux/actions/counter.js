export const increaseCounter = () => {
  return {
    // type - PENAMAAN FEATURE
    // payload - UNTUK MENJALANKAN PROSES AXIOS
    type: "INCREASE", // digunakan untuk proses di dalam reducer
  };
};

export const decreaseCounter = () => {
  return {
    type: "DECREASE",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET",
  };
};
