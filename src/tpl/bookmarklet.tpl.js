	uploaded: (name) => `uploaded by ${ name }`
module.exports = ({ lang, escape, uploaded, author, link, version, desc, url, js, title, at }) => `<!DOCTYPE html>
<html lang="${ lang }">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" href="/static/style.css"/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
		<link rel="canonical" href="${ url }" />
		<link rel="alternate" type="application/json+oembed" href="/oembed.json?url=${ encodeURIComponent(url) }" title="${ escape(title) }" />
		<meta name="description" content="${ escape(title) }. ${ escape(desc) }"/>
		<meta property="og:locale" content="${ lang }" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="${ escape(title) }" />
		<meta property="og:description" content="${ escape(desc) }" />
		<meta property="og:url" content="${ url }" />
		<meta property="og:site_name" content="Bookmarklet" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="${ escape(title) }" />
		<meta name="twitter:description" content="${ escape(desc) }" />
		<meta name="twitter:site" content="Bookmarklet" />
		${ author ? '<meta property="article:publisher" content="' + escape(author) + '" />' : '' }
	</head>
	<body>
		<section class="header">
			<h1>${ desc }</h1>
		</section>
		<section class="content"><a class="bookmarklet" href="javascript:${ encodeURIComponent(js) }">${ escape(title) }${ escape(version) ? ' v' + version : '' }</a></section>
		<p class="footer">${ uploaded({ name: (link ? ' <a href="' + escape(link) + '">' : '') + escape(author) + (link ? '</a>' : '') }) } ${new Date(at).toLocaleDateString(lang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
	</body>
</html>`