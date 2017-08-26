const User = require('../../models/user');

module.exports = {
  findUsers: function(req, reply) {
    const name = req.params.name;
    const query = name ? { name } : {};

    User.find(query)
      .then(docs => {
        const n = docs.length;

        if (n > 1) {
          const names = docs.map(doc => doc.name).join();
          return reply(names).code(200);
        } else if (n === 1) {
          return reply(docs[0]).code(200);
        }

        return reply('0 users found').code(200);
      })
      .catch(err => reply().code(500));
  },
  createUser: function(req, reply) {
    const name = req.payload && req.payload.name;

    if (!name) {
      return reply().code(400);
    }

    const newUser = new User({ name });
    newUser.save()
      .then(doc => reply(`New user ${doc.name} created`).code(200))
      .catch(err => reply().code(500));
  },
  updateUser: function(req, reply) {
    const newName = req.payload && req.payload.name;
    const oldName = req.params && req.params.name;

    if (!newName || !oldName) {
      return reply().code(400);
    }

    User.findOneAndUpdate({ name:oldName }, { name:newName }, { new:true })
      .then(doc => reply(`${oldName} changed name to ${doc.name}`).code(200))
      .catch(err => reply().code(500));
  },
  deleteUser: function(req, reply) {
    const name = req.params && req.params.name;

    if (!name) {
      return reply().code(400);
    }

    User.findOneAndRemove({ name })
      .then(doc => reply(`${doc.name} deleted`))
      .catch(err => reply().code(500));
  }
};
