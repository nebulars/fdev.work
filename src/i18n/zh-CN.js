export default util => {
  return {
    lang: '中文',

    global: {
      ok: '确定',
      cancel: '取消',
      rename: '重命名',
      delete: '删除',
      send: '发送',
      open: '开启',
      close: '关闭',
      search: '搜索',
      edit: '编辑',
      placeholder: '请输入关键字',
    },

    admin: {
      channel: {
        user: '账户管理',
        role: '角色管理',
        permission: '权限管理',
      },
    },

    account: {
      login: '登录',
      logout: '登出',
      profile: '修改资料',
    },

    welcome: {
      slogan: '欢迎使用 FinQA 问答系统',
    },

    start: {
      create: '新对话',
      note: '文档翻译',
      summary: '会议纪要',
      tablex: '复杂表格',
    },

    menus: {
      title: '删除对话',
      delete: '是否确认删除此对话？',
    },

    prompt: {
      placeholder: '请随时提问！若能输入清晰的问题主体和时间，将帮助模型更准确地为您解答～',
      rag_false: '常规问答',
      rag_true: '深度思考',
    },

    atte: {
      thinks: '次思考',
      references: '个引用',
      workflows: '工作流',
    },

    chat: {
      process: '思考中',
    },

    produce: {
      thinks: '思考',
      references: '引用',
      workflows: '工作流',
    },

    replenish: {
      tip: 'FinQA 也可能会犯错。请核查重要信息！',
    },

    table: {
      undefined: '',
      key: '操作',
      id: 'ID',
      file_name: '文件名',
      file_key: '秘钥',
      meeting_id: '转记 TOKEN',
      time: '时长',
      origin: '来源',
      status: '状态',
      update_time: '更新时间',
    },

    summary: {
      upload: '文件上传',
      download: {
        markdown: '纪要下载',
        audio: '音频下载',
        eye: '详情',
        edit: '编辑',
        delete: '删除',
      },
    },

    tablex: {
      create: '创建表格',
      icons: {
        view: '查看表格',
        delete: '删除表格',
      },
    },
  };
};
