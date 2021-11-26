const app = require('./express');
const config = require('./server/config/config');

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
