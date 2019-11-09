<script>
  import ForexHeatMap from "../components/ForexHeatMap.svelte";
  import ForexRates from "../components/ForexRates.svelte";
  import ForexScreener from "../components/ForexScreener.svelte";
</script>

<svelte:head>
  <title>Forex Tools</title>
</svelte:head>

<div class="container" >
  
  <div class="row" style="height: 700px">
    <div class="col" style="height: 700px">

<ForexScreener />

    </div>
  </div>

  
  <div class="row" style="height: 700px">
    <div class="col" style="height: 700px">

      <ForexHeatMap />

    </div>

    <div class="col">

      <ForexRates />

    </div>

  </div>
</div>
