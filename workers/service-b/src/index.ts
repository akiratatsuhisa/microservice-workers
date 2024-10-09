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

import { WorkerEntrypoint } from 'cloudflare:workers';

export default class extends WorkerEntrypoint<Env> {
	async subtract(a: number, b: number): Promise<number> {
		return a - b;
	}

	async getNumber(): Promise<number> {
		const number = await this.env.SERVICE_A.getNumber();
		console.log(`number ${number}`);

		return number;
	}

	async fetch(): Promise<Response> {
		return new Response('');
	}
}
