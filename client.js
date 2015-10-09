var seneca = require('seneca')();

seneca
  .use('rabbitmq-transport')
  .client({type: 'rabbitmq'})
  .act({role: 'foo', cmd: 'create', thing: 13})
  .act({role: 'bar', cmd: 'beerMe'}, function(err, res) {
    if (err) { console.log('BAR ERROR:', err); }
    console.log('BAR:', res);
  });
