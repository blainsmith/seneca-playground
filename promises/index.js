var Promise = require('bluebird');
var seneca = require('seneca')();
var act = Promise.promisify(seneca.act, seneca);

seneca.add({cmd: 'resolved'}, function (args, done) {
	done(null, {message: 'resolved'});
});

seneca.add({cmd: 'rejected'}, function (args, done) {
	done(new Error('rejected'));
});

seneca.add({cmd: 'timeout'}, function (args, done) {
	setTimeout(function () {
		done(null, {message: 'resolved'});
	}, 20000);
});

act({cmd: 'resolved'}).then(console.log).catch(console.error);
act({cmd: 'rejected'}).then(console.log).catch(console.error);
act({cmd: 'timeout'}).then(console.log).catch(console.error);
