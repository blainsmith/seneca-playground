var seneca = require('seneca')();

seneca
	.use('rabbitmq-transport')
	.add({role: 'foo', cmd: 'save'}, function (args, done) {
		done(null, {thing: args.thing});
	})
	.listen({type: 'rabbitmq'});

seneca
	.client({type: 'rabbitmq'})
	.sub({role: 'bar'}, console.log);
