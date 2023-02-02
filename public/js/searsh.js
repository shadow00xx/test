

const charactersList = document.getElementById('charactersList')
const searchbar = document.getElementById('search');
const button = document.querySelector('button')
let hpCharacter = []

// loud the characters
const loadCharacter = async () => {
    try {
        const res = await fetch('characters.json')
        hpCharacter = await res.json()
        displayCharacter(hpCharacter)
        // console.log(hpCharacter);

    } catch (error) {
        console.error(error);
    }
}

// display the charcters
const displayCharacter = (character) => {
    const htmlString = character
        .map((character) => {
            return `
        <li class='card'>
        <h3 class='card-head'> name: ${character.name} </h3>
        <h3 class='card-body'> house: ${character.house} </h3>
        <h3 class='card-body'> gender: ${character.gender} </h3>
        <h3 class='card-body'> ancestry: ${character.ancestry} </h3>
        </li>
        `
        })
        .join('')
    charactersList.innerHTML = htmlString
}
loadCharacter()


// search

button.addEventListener('click', (e) => {
    e.preventDefault()
    const sv = searchbar.value.toLowerCase();
    const fh = hpCharacter.filter(character => {
        return (character.name.toLowerCase().includes(sv) ||
            character.house.toLowerCase().includes(sv) ||
            character.gender.toLowerCase().includes(sv) ||
            character.ancestry.toLowerCase().includes(sv))

    })
    displayCharacter(fh)
})


