module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://nodejs-backend:5000",
      },
    },
  },
};
