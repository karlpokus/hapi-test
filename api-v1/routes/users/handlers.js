const User = require('../../models/user');

module.exports = {
  findUsers: function(req, reply) {
    User.find(function(err, docs){
      const names = docs.map(doc => doc.name);
      return reply(names.join(',')).code(200);
    });
  },
  createUser: function(req, reply) {
    let newUser = new User({ name: req.payload.name });
    newUser
      .save()
      .then(reply);
  }
};
