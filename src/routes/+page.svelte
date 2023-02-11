<script type="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<h1 class="uppercase text-4xl m-2 text-bold">svelte kit zod validation</h1>
<form method="post" use:enhance>
	<div class="error">
		{#if form?.error}
			<ul class="notice-error">
				{#each form.errors as error}
					<li class="text-red-500">
						<p>
							{error.field}: {error.message}
						</p>
					</li>
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
		<button type="submit">Submit</button>
	</div>
</form>
