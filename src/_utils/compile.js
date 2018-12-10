const ts = require('typescript')
const uglify  = require('uglify-es')

module.exports = (source) => {
	const { outputText: transpiled } = ts.transpileModule(source, { compilerOptions: {
		allowJs: true,
		module: ts.ModuleKind.ESNext,
		target: ts.ScriptTarget.ES2018,
	}})
	const { error, code: minified } = uglify.minify(transpiled)
	if (error) throw error
	return minified
}