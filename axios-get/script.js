const getData = input => {
	// Using fetch API
	// fetch(`https://rickandmortyapi.com/api/character?name=${input}`)
	// 	.then(response => {
	// 		return response.json()
	// 	})
	// 	.then(data => {
	// 		console.log(data)
	// 	})

	// Using axios 
	axios.get(`https://rickandmortyapi.com/api/character?name=${input}`)
		.then(response => {
			console.log(response)
			const character = response.data.results[0]

			// Update DOM
			document.querySelector("#name span").innerText = character.name
			document.querySelector("#status span").innerText = character.status
			document.querySelector("#species span").innerText = character.species
			document.querySelector("img").setAttribute("src", character.image)
		})
		.catch(err => console.log(err))
}

document.querySelector("button").addEventListener("click", () => {
	const input = document.querySelector("input").value
	console.log(input)

	// Get data from rick and morty API
	getData(input)
})
