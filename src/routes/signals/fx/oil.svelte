<svelte:head>
  <title>Oil</title>
</svelte:head>

<div class="container">
  <div class="row">
    <div class="col">
    <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div id="tradingview_8fd7e" />
  <div class="tradingview-widget-copyright">
    <a
      href="https://uk.tradingview.com/symbols/OANDA-WTICOUSD/"
      rel="noopener"
      target="_blank">
      <span class="blue-text">WTICOUSD Chart</span>
    </a>
    by TradingView
  </div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js">

  </script>
  <script type="text/javascript">
    new TradingView.widget({
      width: 1400,
      height: 700,
      symbol: "OANDA:WTICOUSD",
      interval: "D",
      timezone: "Europe/London",
      theme: "Dark",
      style: "8",
      locale: "uk",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      news: ["headlines"],
      studies: [
        "MASimple@tv-basicstudies",
        "MASimple@tv-basicstudies",
        "MASimple@tv-basicstudies",
        "Volume@tv-basicstudies",
        "MACD@tv-basicstudies",
        "RSI@tv-basicstudies"
      ],
      container_id: "tradingview_8fd7e"
    });
  </script>
</div>
<!-- TradingView Widget END -->
    </div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>
