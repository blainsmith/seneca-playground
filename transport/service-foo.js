var seneca = require('seneca')();

seneca
	.use('rabbitmq-transport')
	.sub({role: 'bar'}, function(args) {
		console.log('BAR:', args);
	})
	.add({role: 'foo', cmd: 'create'}, function (args, done) {
		console.log('FOO:', args);
		done(null, {thing: args.thing});
	})
	.listen({type: 'rabbitmq'});
