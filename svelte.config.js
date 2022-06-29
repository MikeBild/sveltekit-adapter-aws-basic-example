import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'sveltekit-adapter-aws-basic-demo.mikebild.com',
			stackName: 'sveltekit-adapter-aws-basic-demo'
		})
	}
};
