# hapi-test
Exploring the node hapi server

# todos
- [x] basic setup
- [x] routes
- [x] query, params, payload
- [x] basic REST api
- [ ] plugin/middleware i.e some silly auth and logger
- [x] the mysterious `reply` *The payload may be a string, a buffer, a JSON serializable object, or a stream*
- [x] parse POST body
- [ ] serve/stream html
- [ ] error handling
- [ ] server.log
- [x] autogenerate docs w lout or swagger
- [x] edit data w mongoose
- [ ] cookies
- [ ] try [cache option](https://github.com/hapijs/hapi/blob/master/API.md#requestseturlurl-stripTrailingSlash)

# api test
Requires mongo running. See `curl.js` for api details.

```bash
# run with PM2
$ npm start
# test api
$ node curl.js <method> <path> [<data>]
```

# swagger
Because the UI looks like shit and I can't find a way to pass params - I'm just gonna save the setup below
```bash
# https://github.com/glennjones/hapi-swagger
$ npm i hapi-swagger inert vision
# pass each module to `server.register` and add `description` and `notes` under config in routes
```

# license
MIT
