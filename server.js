const pull = require('pull-stream'),
      createServer = require('pull-net/server')

createServer( (stream) => pull(stream.source, stream.sink))
  .listen(9999, '127.0.0.1')
