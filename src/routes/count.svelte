<script>
  import { store } from "../store";
  import Incrementer from "../components/Incrementer.svelte";
  import Decrementer from "../components/Decrementer.svelte";

  let countValue;

  store.subscribe(value => (countValue = value));
</script>

<h1>The count is {countValue}</h1>

<Incrementer />
<Decrementer />