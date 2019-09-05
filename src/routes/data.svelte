<script>
  import { onMount } from "svelte";
  let characters = []; // Use the Star Wars API, Luke
  let obj;

  onMount(async () => {
    const apiResponse = await fetch("https://swapi.co/api/people/");
    const swPeopleJSON = await apiResponse.json();

    const apiLocal = await fetch("https://emcloud-7901.nodechef.com/api/users");

    const result = await apiLocal.json(); 
    console.warn(result);
    obj = JSON.stringify(result);
    

    // result.body.getReader().read().then(({ done, value }) => {
    //   console.warn(value);
    // });

    characters = swPeopleJSON.results;

    return () => console.log('Destroyed');
  });
</script>

Local API: [{obj}]
<ul>
  {#each characters as { name, height, birth_year }}
    <li>
      <strong>{name}</strong>
      (height: {height}cm, birth year: {birth_year})
    </li>
  {:else}
    <p>Loading...</p>
  {/each}
</ul>
