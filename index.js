const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/send', async (req, res) => {
  
	const wbm = require('wbm');


	await wbm.start().then(async () => {
	    const contacts = [
	        { phone: '89275699861', text: "asdzxc" },
	     
	    ];
	    const message = '{{text}}';

	    await wbm.send(contacts, message);
	    await wbm.end();
	}).then(()=> {
		console.log("MB")
	}).catch(err => console.log(err));





  res.send('Hello Worl123d!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
