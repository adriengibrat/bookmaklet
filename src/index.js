const { router, get, post } = require('microrouter')
const { send } = require('micro')
const readFile = require('fs').promises ? require('fs').promises.readFile : require('util').promisify(require('fs').readFile)

const bookmarklet = require('./controller/bookmarklet')
const create = require('./controller/create')
const home = require('./controller/home')
const oembed = require('./controller/oembed')

module.exports = router(
	get('/', home),
	post('/', create),
	get('/bookmarklet/:token', bookmarklet),
	get('/oembed.json', oembed),
	//TODO use https://github.com/zeit/serve-handler for static assets
	get('/static/:file', (req) => readFile(`${__dirname}/static/${req.params.file}`, 'utf8')),
	get('/*', (_req, res) => send(res, 404, 'Not found')),
)
