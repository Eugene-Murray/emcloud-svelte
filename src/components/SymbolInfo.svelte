<script>
  export let symbol;
  let mysymbol = `"${symbol}"`;
  console.warn('symbol ###', mysymbol);
  let url = `https://uk.tradingview.com/symbols/${symbol}/`;

  let test = JSON.stringify( {
  "symbol": symbol, 
  "width": "100%",
  "locale": "uk",
  "colorTheme": "dark",
  "isTransparent": false
});
</script>

<p>test: {symbol} {test}</p>

{#if test}

<p>symbol: {symbol}</p>
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container" >
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="{url}" rel="noopener" target="_blank"><span class="blue-text">{symbol} Symbol Info</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js" async>
{
  "symbol": "NYSE:AXP", 
  "width": "100%",
  "locale": "uk",
  "colorTheme": "dark",
  "isTransparent": false
}
  </script>
</div>
<!-- TradingView Widget END -->
{/if}