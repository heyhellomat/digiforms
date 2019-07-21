/*The digiforms run using Heroku, Github, ExpressJS and ReactJS*/
/*You can see the code with MIT license on Github repository: https://github.com/heyhellomat/digiforms/ */
/*You can see the digiforms running on digiformsapp.herokuapp.com */

const express = require('express')
const app = express()
const port = process.env.PORT || 8080
app.use(express.static('assets'))
app.set('view engine', 'ejs')

const adresses = {
	pages: {
		home: '/',
		donate: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=46SELTSHVKN58&source=url',
		digiformsApp: '/digiforms-app',
		about: '/about'
	}
}




app.get(adresses.pages.home,(req, res)=>{
	res.render('index',{pageName: 'home', adresses: adresses})
})
app.get(adresses.pages.digiformsApp,(req, res)=>{
	res.render('digiformsApp',{pageName: 'digiformsApp', adresses: adresses})
})
app.get(adresses.pages.about,(req, res)=>{
	res.render('about',{pageName: 'about',adresses: adresses})
})

app.listen(port, ()=>{console.log('The digiforms is running.')})