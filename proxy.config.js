// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/api/todos'(req, res) {
    setTimeout(() => {
      res.json({
        success: true,
        data: [
          {
            id: 1,
            text: 'Learn antd',
            isComplete: true,
          },
          {
            id: 2,
            text: 'Learn ant-tool',
          },
          {
            id: 3,
            text: 'Learn dora',
          },
        ],
      });
    }, 500);
  },
};
