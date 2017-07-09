const pull = require('pull-stream'),
      connect = require('pull-net/client')

const stream = connect(9999, '127.0.0.1')

pull(
  pull.once(new Buffer('Hello World')),
  stream,
  pull.log()
)
