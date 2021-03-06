//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
import APIkey from './nasa-api.js'

const title = document.querySelector('#picture-title')
const image = document.querySelector('img')
const video = document.querySelector('iframe')
const description = document.querySelector('#description')
const mediaDate = document.querySelector('#date')
const btn = document.querySelector('button')
const url = 'https://api.nasa.gov/planetary/apod'

btn.addEventListener('click', () => {
	const date = document.querySelector('#input-date').value
	image.src = ''
	video.src = ''
	console.log(date)
	fetch(`${url}?api_key=${APIkey}&date=${date}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			title.innerText = data.title
			description.innerText = data.explanation
			mediaDate.innerText = data.date
			if (data.media_type === 'image') {
				image.src = data.url
			} else if ((data.media_type = 'video')) {
				video.src = data.url
			}
		})
		.catch(err => console.log(err))
})
