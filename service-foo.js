require('seneca')()
	.use('redis-transport')
	.sub({role: 'bar'}, function (args, done) {
	  console.log('Service Foo: So you like beer?');
	})
	.add({role: 'foo', cmd: 'save'}, function (args, done) {
		var thing = seneca.make('foo/thing');

		thing = args.thing;

		thing.save$(done);
	})
	.listen({type: 'redis'});
