<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
		color: aliceblue;
	}

	/* img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	} */

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script>
  import Calendar from "../components/Calendar.svelte";
  import StockTickerTape from "../components/StockTickerTape.svelte";
  import MarketOverview from "../components/MarketOverview.svelte";
  import MarketData from "../components/MarketData.svelte";
</script>

<svelte:head>
	<title>EMCloud.co | Trend Trading Signals</title>
</svelte:head>

<figure>
	<figcaption>
  <h2><span><img src="Vector.jpg" alt="logo" height="40" width="40"></span>
  <span>EMCloud.co | Trend Trading Signals</span></h2>
  </figcaption>
</figure>


<div class="container" style="height: 100%">

  <div class="row">
    <div class="col">

<StockTickerTape />

    </div>
  </div>
  <div class="row" style="height: 700px">
    <div class="col" style="height: 700px">

<Calendar />

    </div>
    <div class="col" style="height: 700px">

<MarketOverview />

    </div>
  </div>
  <div class="row">
    <div class="col">
	<MarketData />
    </div>
  </div>

</div>





