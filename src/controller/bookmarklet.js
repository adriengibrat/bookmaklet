const jwt = require('jwt-simple')

const { secret, url } = require('../_utils/env')
const tpl = require('../tpl/bookmarklet.tpl')
const { uploaded } = require('../messages/messages.en')
const escape = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

module.exports = (req) => {
	const { js, title, desc, author, link, version, at } = jwt.decode(req.params.token, secret)
	return tpl({
		lang: 'en',
		escape,
		uploaded,
		desc,
		author: author || 'anonymous',
		at,
		link,
		version,
		title: title || 'bookmarklet',
		js: `!function(){${ js }}()`,
		url: `${url}${req.url}`,
	})
}