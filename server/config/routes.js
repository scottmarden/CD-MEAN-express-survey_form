module.exports = app => {
	app.get('/', (req, res) => {
		res.render('index');
	});
	app.post('/submit', (req, res) => {
		console.log(req.body)
		data = {
			'name': req.body.name,
			'location': req.body.location,
			'language': req.body.language,
			'comments': req.body.comments
		}
		res.render('success', data);
	})
};
