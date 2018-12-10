module.exports = {
	title: () => 'Create bookmarklet like a pro',
	howTo: ({ url }) => `Just POST your bookmarklet file content to ${ url }.`,
	commentTip: () => 'You may add comments to describe your bookmarklet.',
	curl: ({ url, filename }) => `curl -v --data-binary @${ filename } ${ url }`,
	copied:() => 'copied in you clipboard',
	disclaimer: () => `For security concerns, your IP and the date will be stored with your js code.`,
	uploaded: ({ name }) => `uploaded by ${ name }`
}