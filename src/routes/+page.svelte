<script type="ts">
  import type { ActionData } from './$types';
  import { enhance } from '$app/forms';
  export let form: ActionData;


</script>

<h1 class="uppercase text-4xl m-2 text-bold">svelte kit zod validation</h1>
<form method="post" use:enhance>
  <div class="error">




    {#if form?.error}

      <ul class="notice-error">

        {#each form.errors as error}

          <li>{error.message}</li>

        {/each}

      </ul>

    {/if}


  </div>
  <div>
    <label>Name</label>
    <input type="text" name="name" />
  </div>
  <div>
    <label>Age</label>
    <input type="text" name="email" />
  </div>
  <div>
    <button type="submit">Submit</button></div>
</form>
