export default ({ http, message, kitchen, json }) => {
  const state = {
    // Debugging
    debug: false,

    // Mobile
    mobile: kitchen.breakpoint === `iphone`,

    // Application Visual
    visual: false,

    // Token
    token: null,

    // ID
    id: null,

    // Roles
    roles: [],

    // User
    user: {},

    // Admin
    admin: false,
  };

  const reset = json.clone(state);

  const actions = {
    async CLEAN() {
      return {
        id: null,
      };
    },

    async APP_RENDER({}, visual) {
      return { visual };
    },

    async MSG_LISTEN({}, callback) {
      return await message.listen('FinQAChat', callback);
    },

    async TOKEN_CACHE({}, token) {
      localStorage.setItem('token', token);
      return { token };
    },

    async TOKEN_CHECK({}) {
      const { data: user } = await http.api.userInfo();
      return { user, admin: user.id === 1 };
    },

    async LOGOUT({}) {
      localStorage.removeItem('token');
      return { ...reset };
    },

    async ID_UPDATE({}, id) {
      return { id };
    },

    async MP_START({}) {
      message.send({});
    },
  };

  return { state, actions };
};
