<script>
	export let segment;
</script>

<svelte:head>
  <title>Signals</title>
</svelte:head>

<h1>Signals List</h1>
<div class="container">
  <div class="p-4" style="border-style: solid">

    <table border="1">
      <tr>
        <td colspan="3">Todays Signals</td>
      </tr>
      <tr>
        <td>Symbol</td>
        <td>Time Frame</td>
        <td>Time</td>
      </tr>
      <tr>
        <td />
        <td />
        <td />
      </tr>
    </table>

  </div>

  <div class="p-4" style="border-style: solid">

    <table border="1">
      <tr>
        <td colspan="4">1 FX Day Signals</td>
      </tr>
      <tr>
        <td />
        <td>Symbol</td>
        <td>Date/Time</td>
        <td>Details</td>
      </tr>
      <tr>
        <td>1.</td>
        <td>OIL</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>2.</td>
        <td>GOLD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>3.</td>
        <td>SILVER</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>4.</td>
        <td>DAX 30</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>5.</td>
        <td>FSTE 100</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>6.</td>
        <td>SPX 500</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>7.</td>
        <td>NASDAQ 100</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>8.</td>
        <td>DOW 30</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>9.</td>
        <td>AUDNZD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>10.</td>
        <td>AUDUSD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>11.</td>
        <td>CADCHF</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>12.</td>
        <td>CADJPY</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>13.</td>
        <td>CHFJPY</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>14.</td>
        <td>EURCAD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>15.</td>
        <td>EURCHF</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>16.</td>
        <td>EURGBP</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>17.</td>
        <td>EURJPY</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>18.</td>
        <td>EURUSD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>19.</td>
        <td>GBPCHF</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>20.</td>
        <td>GBPCAD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>21.</td>
        <td>GBPJPY</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>22.</td>
        <td>GBPUSD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>23.</td>
        <td>USDCAD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>24.</td>
        <td>USDCHF</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>25.</td>
        <td>USDJPY</td>
        <td />
        <td />
      </tr>
    </table>

  </div>

    <div class="p-4" style="border-style: solid">

    <table border="1">
      <tr>
        <td colspan="4">1 Week FX Signals</td>
      </tr>
      <tr>
        <td />
        <td>Symbol</td>
        <td>Date/Time</td>
        <td>Details</td>
      </tr>
      <tr>
        <td>1.</td>
        <td>OIL</td>
        <td />
        <td ><a class='{segment === "signals/fx/oil" ? "signals/fx/oil" : ""}' href='signals/fx/oil'>details</a></td>
      </tr>
      <tr>
        <td>2.</td>
        <td>GOLD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>3.</td>
        <td>SILVER</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>4.</td>
        <td>DAX 30</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>5.</td>
        <td>FSTE 100</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>6.</td>
        <td>SPX 500</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>7.</td>
        <td>NASDAQ 100</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>8.</td>
        <td>DOW 30</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>9.</td>
        <td>AUDNZD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>10.</td>
        <td>AUDUSD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>11.</td>
        <td>CADCHF</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>12.</td>
        <td>CADJPY</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>13.</td>
        <td>CHFJPY</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>14.</td>
        <td>EURCAD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>15.</td>
        <td>EURCHF</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>16.</td>
        <td>EURGBP</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>17.</td>
        <td>EURJPY</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>18.</td>
        <td>EURUSD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>19.</td>
        <td>GBPCHF</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>20.</td>
        <td>GBPCAD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>21.</td>
        <td>GBPJPY</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>22.</td>
        <td>GBPUSD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>23.</td>
        <td>USDCAD</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>24.</td>
        <td>USDCHF</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>25.</td>
        <td>USDJPY</td>
        <td />
        <td />
      </tr>
    </table>

  </div>

    <div class="p-4" style="border-style: solid">

    <table border="1">
      <tr>
        <td colspan="4">1 Week Signals - US Equity</td>
      </tr>
      <tr>
        <td />
        <td>Symbol</td>
        <td>Date/Time</td>
        <td>Details</td>
      </tr>
      <tr>
        <td>1.</td>
        <td>ABT - Abbott Laboratories</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>2.</td>
        <td>ACM - Aecom</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>3.</td>
        <td>AIG - American International Group Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>4.</td>
        <td>AMZN - Amazon.com, Inc.</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>5.</td>
        <td>AXP - American Express Company</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>6.</td>
        <td>AAPL - Apple Inc.</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>7.</td>
        <td>BAC - Bank of America Corp</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>8.</td>
        <td>BLK - BlackRock, Inc.</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>9.</td>
        <td>BA - Boeing Co</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>10.</td>
        <td>CAT - Caterpillar Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>11.</td>
        <td>CVX - Chevron Corporation</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>12.</td>
        <td>C - Citigroup Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>13.</td>
        <td>KO - Coca-Cola Co</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>14.</td>
        <td>DIS - Walt Disney Co</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>15.</td>
        <td>FB - Facebook, Inc. Common Stock</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>16.</td>
        <td>FDX - FedEx Corporation</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>17.</td>
        <td>BEN - Franklin Resources, Inc.</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>18.</td>
        <td>GS - Goldman Sachs Group Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>19.</td>
        <td>HLF - Herbalife Nutrition Ltd</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>20.</td>
        <td>HD - Home Depot Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>21.</td>
        <td>IBM - IBM Common Stock</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>22.</td>
        <td>INTC - Intel Corporation</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>23.</td>
        <td>IVZ - Invesco Ltd.</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>24.</td>
        <td>MSFT - Microsoft Corporation</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>25.</td>
        <td>NFLX - Netflix Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>26.</td>
        <td>NBL - Nike Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>27.</td>
        <td>NBL - Noble Energy, Inc.</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>28.</td>
        <td>SWN - Southwestern Energy Company</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>29.</td>
        <td>TSLA - Tesla Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>30.</td>
        <td>TWTR - Twitter Inc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>31.</td>
        <td>UNP - Union Pacific Corporation</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>32.</td>
        <td>V - Visa Inc</td>
        <td />
        <td />
      </tr>
       <tr>
        <td>33.</td>
        <td>MS - Morgan Stanley</td>
        <td />
        <td />
      </tr>
    </table>

  </div>

    <div class="p-4" style="border-style: solid">

    <table border="1">
      <tr>
        <td colspan="4">1 Week Signals - UK Equity</td>
      </tr>
      <tr>
        <td />
        <td>Symbol</td>
        <td>Date/Time</td>
        <td>Details</td>
      </tr>
      <tr>
        <td>1.</td>
        <td>AJB - AJ Bell PLC</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>2.</td>
        <td>AV. - AVIVA PLC</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>3.</td>
        <td>BARC - Barclays PLC</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>4.</td>
        <td>PRSM - Blue Prism Group PLC</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>5.</td>
        <td>BP. - BP plc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>6.</td>
        <td>GSK - GlaxoSmithKline plc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>7.</td>
        <td>HSBA - HSBC Holdings plc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>8.</td>
        <td>LGEN - Legal & General Group Plc</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>9.</td>
        <td>RBS - Royal Bank of Scotland Group plc</td>
        <td />
        <td />
      </tr>
    </table>

  </div>

  <div class="p-4" style="border-style: solid">

    <table border="1">
      <tr>
        <td colspan="4">1 Day Signals - iShares ETFs</td>
      </tr>
      <tr>
        <td />
        <td>Symbol</td>
        <td>Date/Time</td>
        <td>Details</td>
      </tr>
      <tr>
        <td>1.</td>
        <td>ILF - iShares S&P Latin America 40</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>2.</td>
        <td>EWA - iShares MSCI Australia</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>3.</td>
        <td>EWZ - iShares MSCI Brazil</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>4.</td>
        <td>EWC - iShares MSCI Canada</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>5.</td>
        <td>EWG - iShares MSCI Germany</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>6.</td>
        <td>EWH - iShares MSCI Hong Kong</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>7.</td>
        <td>EWS - iShares MSCI Singapore</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>8.</td>
        <td>EWY - iShares MSCI South Korea</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>9.</td>
        <td>EWT - iShares MSCI Taiwan</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>10.</td>
        <td>THD - iShares MSCI Thailand</td>
        <td />
        <td />
      </tr>
      <tr>
        <td>11.</td>
        <td>EWU - iShares MSCI United Kingdom</td>
        <td />
        <td />
      </tr>
    </table>

  </div>

</div>
