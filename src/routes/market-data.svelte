<svelte:head>
	<title>Market Data</title>
</svelte:head>


<div class="container" style="height: 700px">
  <div class="row" style="height: 700px">
    <div class="col" style="height: 700px">
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://uk.tradingview.com/markets/indices/" rel="noopener" target="_blank"><span class="blue-text">Indices</span></a>, <a href="https://uk.tradingview.com/markets/futures/" rel="noopener" target="_blank"><span class="blue-text">Commodities</span></a> <span class="blue-text">and</span> <a href="https://uk.tradingview.com/markets/currencies/" rel="noopener" target="_blank"><span class="blue-text">Forex</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js" async>
  {
  "width": "100%",
  "height": "100%",
  "symbolsGroups": [
    {
      "name": "Indices",
      "originalName": "Indices",
      "symbols": [
        {
          "name": "OANDA:SPX500USD",
          "displayName": "S&P 500"
        },
        {
          "name": "OANDA:NAS100USD",
          "displayName": "Nasdaq 100"
        },
        {
          "name": "FOREXCOM:DJI",
          "displayName": "Dow 30"
        },
        {
          "name": "INDEX:NKY",
          "displayName": "Nikkei 225"
        },
        {
          "name": "INDEX:DEU30",
          "displayName": "DAX Index"
        },
        {
          "name": "OANDA:UK100GBP",
          "displayName": "FTSE 100"
        }
      ]
    },
    {
      "name": "Commodities",
      "originalName": "Commodities",
      "symbols": [
        {
          "name": "CME_MINI:ES1!",
          "displayName": "E-Mini S&P"
        },
        {
          "name": "CME:6E1!",
          "displayName": "Euro"
        },
        {
          "name": "COMEX:GC1!",
          "displayName": "Gold"
        },
        {
          "name": "NYMEX:CL1!",
          "displayName": "Crude Oil"
        },
        {
          "name": "NYMEX:NG1!",
          "displayName": "Natural Gas"
        },
        {
          "name": "CBOT:ZC1!",
          "displayName": "Corn"
        }
      ]
    },
    {
      "name": "Forex",
      "originalName": "Forex",
      "symbols": [
        {
          "name": "FX:EURUSD"
        },
        {
          "name": "FX:GBPUSD"
        },
        {
          "name": "FX:USDJPY"
        },
        {
          "name": "FX:USDCHF"
        },
        {
          "name": "FX:AUDUSD"
        },
        {
          "name": "FX:USDCAD"
        }
      ]
    }
  ],
  "locale": "uk"
}
  </script>
</div>
<!-- TradingView Widget END -->

    </div>
  </div>
</div>