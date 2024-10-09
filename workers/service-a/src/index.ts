import { WorkerEntrypoint } from 'cloudflare:workers';

export default class extends WorkerEntrypoint {
	async add(a: number, b: number): Promise<number> {
		return a + b;
	}

	async getNumber(): Promise<number> {
		return 7;
	}

	async fetch(): Promise<Response> {
		return new Response('');
	}
}
