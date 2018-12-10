const { createError } = require('micro')
const jwt = require('jwt-simple')
const { secret/*, url*/ } = require('../_utils/env')

module.exports = (req) => {
	const url = req.query.url
	const { pathname } = new URL(url)
	const [_, path, token] = pathname.split('/')
	if (path !== 'bookmarklet' || !token) // TODO: check url scheme & domain
		throw createError(400, `Only bookmarklet url can be embed, ${url} is invalid`)
	const { title, author: author_name, link: author_url, version } = jwt.decode(token, secret)
	return {
		url,
		type: 'video',
		provider_name: 'Bookmarklet',
		title,
		version,
		author_name,
		author_url,
		html: `<iframe src="${ url }"></iframe>`,
	}
}