import './styles.css'
import From from '../node_modules/core-js/library/fn/array/from'
import map from '../node_modules/core-js/library/fn/array/map'

const look = require('./look')

document.body.insertAdjacentHTML('afterbegin', look())

var a = map( From(document.querySelectorAll('*')), (element, index) => {
	element.setAttribute(`data-id`, index)
	return element
})

import f from '../node_modules/fingerprintjs2'

new f().get((result, components) => {
	document.body
	.insertAdjacentHTML('beforeend', `<h1>Fingerprint: ${result}</h1>`)

	console.log('components', components)
})
