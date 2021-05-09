const URL = "https://dog.ceo/api/breeds/image/random"

async function getRandomDog(){
    document.getElementById('dog').setAttribute('src', 'loader.gif');
    const result = await fetch(URL);
    const data = await result.json();
    console.log(data);
    document.getElementById('dog').setAttribute('src', data.message);
}

document.getElementById('fetch').addEventListener('click', getRandomDog);