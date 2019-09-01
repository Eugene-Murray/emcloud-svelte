<script>
  import { store } from "../store";

  function increment() {
    store.update(n => n + 1);
  }
</script>

<button on:click={increment}>+</button>
