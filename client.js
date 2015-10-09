var seneca = require('seneca')();

seneca
  .use('rabbitmq-transport')
  .client({type: 'rabbitmq'})
  .act({role: 'foo', cmd: 'save', thing: {num: 13}}, console.log)
  .act({role: 'bar', cmd: 'beerMe'}, console.log);
