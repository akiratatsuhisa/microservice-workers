/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Env } from '../worker-configuration';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const x = await env.SERVICE_A.add(1, 2);

		console.log(`x: ${x}`);

		const y = await env.SERVICE_B.getNumber();

		console.log(`y: ${y}`);

		const z = await env.SERVICE_B.subtract(x, y);

		console.log(`z: ${z}`);

		return new Response(`test ${x} ${y} ${z}`);
	},
} satisfies ExportedHandler<Env>;
