const { url } = require('../_utils/env')
const tpl = require('../tpl/home.tpl')
const { title, howTo, commentTip, copied, curl, disclaimer } = require('../messages/messages.en')

module.exports = () => tpl({
	lang: 'en',
	title: title(),
	howTo: howTo,
	commentTip: commentTip(),
	copied: copied(),
	url, 
	filename: 'my-bookmarklet-code.ts',
	curl,
	disclaimer: disclaimer(),
})