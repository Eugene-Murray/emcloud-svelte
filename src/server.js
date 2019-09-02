import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const API = 'https://hnpwa.com/api/v0';
const dev = NODE_ENV === 'development';

function load(type) {
	return fetch(`${API}/${type}.json`).then(r => r.json());
}

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.get('/:type?', async (req, res) => {
		let type = req.params.type || 'news';
		let data = await load(type).catch(err => {
			send(res, 404);
		});
		send(res, 200, data);
	})
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
