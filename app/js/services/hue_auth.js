module.exports = function(app) {
  app.factory('hueAuth', ['$http', function($http) {
    return {
    //fix this indentation
    getToken: function() {
      return window.localStorage.token;
    },
    removeToken: function() {
      this.token = null;
      this.username = null;
      $http.defaults.headers.common.token = null;
      window.localStorage.removeItem('token');
    }
  };
  }]);
};
