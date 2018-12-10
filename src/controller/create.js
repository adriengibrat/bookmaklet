const jwt = require('jwt-simple')
const { text } = require('micro')
const { getClientIp } = require('request-ip')
const comments = require('../_utils/comments')
const compile = require('../_utils/compile')
const { secret, url } = require('../_utils/env')

module.exports = async (req, res) => {
	const ip = getClientIp(req)
	const source = await text(req)
	const js = compile(source)
	const { title, description: desc, author, author_url: link, version } = comments(source)
	res.setHeader('Location', `${url}/bookmarklet/${jwt.encode({ js, ip, title, desc, author, link, version, at: Date.now() }, secret)}`)
	res.end()
}
