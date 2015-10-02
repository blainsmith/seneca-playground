require('seneca')()
  .use('redis-transport')
  .client({type: 'redis'})
  .act({role: 'foo', cmd: 'save', thing: {num: 13}})
  .act({role: 'bar', cmd: 'beerMe'}, function (err, result) {
  	if (err) {
  		console.log(err);
  	}
  	console.log('Beer: ' + result);
  });
