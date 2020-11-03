module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://nodejs-backend:5000",
      },
    },
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
        `,
      },
    },
  },
};
