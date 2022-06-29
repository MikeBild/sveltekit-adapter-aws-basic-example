# SvelteKit Adapter AWS Basic Example

Demonstrates a basic deployed sample webapp on AWS https://sveltekit-adapter-aws-basic-demo.mikebild.com using [SvelteKit Adapter AWS](https://github.com/MikeBild/sveltekit-adapter-aws).

1. Setup your AWS Account using the [AWS-CLI](https://github.com/aws/aws-cli) or [AWS-Vault](https://github.com/99designs/aws-vault)
2. Clone the repo and install dependencies
```
git clone git@github.com:MikeBild/sveltekit-adapter-aws-basic-example.git
cd sveltekit-adapter-aws-basic-example
yarn add aws-cdk sveltekit-adapter-aws
yarn && yarn build
```
3. Setup and deploy to AWS
**svelte.config.js**
```typescript
import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'sveltekit-adapter-aws-basic-demo.example.com',
			stackName: 'sveltekit-adapter-aws-basic-demo'
		})
	}
};
```