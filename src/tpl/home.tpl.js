module.exports = ({ lang, title, howTo, commentTip, copied, url, filename, curl, disclaimer  }) => `<!DOCTYPE html>
<html lang="${ lang }">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" href="/static/style.css"/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
		<link rel="canonical" href="${ url }" />
		<meta name="description" content="${ title }. ${ howTo({ url }) }"/>
		<meta property="og:locale" content="${ lang }" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="${ title }" />
		<meta property="og:description" content="${ howTo({ url }) }" />
		<meta property="og:url" content="${ url }" />
		<meta property="og:site_name" content="Bookmarklet" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:description" content="${ howTo({ url }) }" />
		<meta name="twitter:title" content="${ title }" />
		<meta name="twitter:site" content="Bookmarklet" />
	</head>
	<body>
	<section class="header">
		<h1>${ title }</h1>
	</section>
	<section class="content">
		<strong class="copy bookmarklet"
			tabindex="-1"
			onblur="this.dataset.tooltip =''"
			oncopy="this.dataset.tooltip = '${ copied }'"
			onclick="document.execCommand('copy')"
		>${ curl({ url, filename: `<i>${ filename }</i>` }) }</strong>
		<p class="secondary">${ howTo({ url: `<a href="${ url }">${ url }</a>` }) }<br/>${ commentTip }</p>
		<pre><i>${ filename }</i>
		<code class="secondary">/**
 * My bookmarklet
 * 
 * Do awesome stuff!
 * 
 * @version 0.0.1
 * @author Me &lt;me@domain.tld&gt; (https://my.blog/my-awesome-bookmarklet)
 */

// My typescript (or es2018) bookmarklet code</code></pre>
	</section>
	<p class="footer secondary">${ disclaimer }</p>
	</body>
</html>`