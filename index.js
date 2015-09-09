var seneca = require('seneca')();

seneca.use('mem-store');

// Subscribe to all identity commands
seneca.sub({ role: 'identity' }, function(args, done) {
  console.log('Identity command heard for: ' + args.name);
});

// Subscribe to ALL commands (useful for stats)
seneca.sub({ role: '*' }, function(args, done) {
  console.log('Command heard in role: ' + args.role);
});

/*
  Add on some things
*/
seneca.add({ role: 'identity', cmd: 'createUser' }, function(args, done) {
  var user = seneca.make('identity/user');
  user.name = args.name;

  user.save$(done);
});

seneca.add({ role: 'catalog', cmd: 'fetchVideo' }, function(args, done) {
  var video = seneca.make('catalog/video');

  video.load$({ id: args.id }, done);
});


/*
  Act on some things
*/
seneca.act({ role: 'identity', cmd: 'createUser', name: 'Blain Smith' }, function(err, result) {
  console.log('New user: ' + result);
});

seneca.act({ role: 'catalog', cmd: 'fetchVideo', id: 'not-found' }, function(err, result) {
  console.log('Video: ' + result);
});

seneca.act({ role: 'identity', cmd: 'createUser', name: 'Austin Smith' }, function(err, result) {
  console.log('New user: ' + result);
});
