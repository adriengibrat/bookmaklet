const parseComments = require('comment-parser')
const parseAuthor = require('parse-author')

module.exports = (source) => {
	const parsed = parseComments(source, { parsers: [
		(str, _data) => str.includes('@author') ?
			{ source: str, data: { tag: 'author', ... parseAuthor(str.replace('@author', '').trim()) } } :
			null,
		(str, _data) => str.includes('@version') ?
			{ source: str, data: { tag: 'version', name: str.replace('@version', '').trim() } } :
			null,
	] } ).shift()
	if(!parsed) return {}
	const { description, tags } = parsed
	const lines = description.split('\n')
	const title = lines.shift().trim()
	const version = tags.find((item) => item.tag === 'version')
	const author = tags.find((item) => item.tag === 'author')
	return {
		title,
		description: lines.join('\n').trim(),
		author: author && `${author.name}${author.email ? ' <' + author.email + '>' : ''}`,
		author_url: author && author.url,
		version: version && version.name,
	}
}