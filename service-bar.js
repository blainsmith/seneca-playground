require('seneca')()
	.use('redis-transport')
	.add({role: 'bar', cmd: 'beerMe'}, function (args, done) {
		done(null, {
			brewery: 'Druthers',
			beer: 'Blonde Ale'
		});
	})
	.listen({type: 'redis'});
