<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 200;
		padding: 0 1em;
		background-color: #15263C;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		color: white;
		font-weight: bold;
		font-size: 15px;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>
<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a class='{segment === "about-trend-following" ? "selected" : ""}' href='about-trend-following'>about trend following</a></li>
		<li><a class='{segment === "watch-list-signals" ? "selected" : ""}' href='watch-list-signals'>watch list signals</a></li>
		<!-- <li><a class='{segment === "signals" ? "selected" : ""}' href='signals'>signals</a></li> -->
		<li><a class='{segment === "mega-trends" ? "selected" : ""}' href='mega-trends'>mega trends</a></li>
		<li><a class='{segment === "equity screener" ? "selected" : ""}' href='equity-screener'>equity screener</a></li>
		<li><a class='{segment === "forex-tools" ? "selected" : ""}' href='forex-tools'>forex tools</a></li>
		

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a></li>
		
		<li><a class='{segment === "chart" ? "selected" : ""}' href='chart'>chart</a></li>
		<!-- <li><a class='{segment === "data" ? "selected" : ""}' href='data'>external data</a></li> -->
		<li><a class='{segment === "you tube" ? "selected" : ""}' href='you-tube'>videos</a></li>
		<!-- <li><a class='{segment === "count" ? "selected" : ""}' href='count'>count</a></li> -->
		<!-- <li><a class='{segment === "flex-grid" ? "selected" : ""}' href='flex-grid'>flex-grid</a></li>
		<li><a class='{segment === "contact" ? "selected" : ""}' href='contact'>contact</a></li> -->
		
		<li><a class='{segment === "twitter" ? "selected" : ""}' href='twitter'>twitter</a></li>
		<li><a class='{segment === "data-sources" ? "selected" : ""}' href='data-sources'>data sources</a></li>
		<li><a class='{segment === "trade-plan" ? "selected" : ""}' href='trade-plan'>trade plan</a></li>
		<li><a class='{segment === "trading-investing-tools" ? "selected" : ""}' href='trading-investing-tools'>trading & investing tools</a></li>
	</ul>
</nav>