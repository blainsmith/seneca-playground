var seneca = require('seneca')();

seneca.add({cmd: 'no-response'}, function (args, done) {
	done();

	var timeout = Math.floor((Math.random() * 10) + 1) * 1000;
	setTimeout(function () {
		console.log('Spent time doing stuff', args.call);
	}, timeout);
});

seneca.act({cmd: 'no-response', call: 1});
seneca.act({cmd: 'no-response', call: 2});
seneca.act({cmd: 'no-response', call: 3});

console.log('Do some other things in the meantime.');

seneca.act({cmd: 'no-response', call: 4});
seneca.act({cmd: 'no-response', call: 5});

console.log('Finally finish.');
