class AnagajatIT {
    constructor(cnp, nume, prenume, vechime, departament) {
        this.cnp = cnp;
        this.nume = nume;
        this.prenume = prenume;
        this.vechime = vechime;
        this.departament = departament;
    }

    afiseazaVarsta() {
        let varsta;
        if (this.cnp[0] == "1" || this.cnp[0] == "2") {
            varsta = 2021 - (1900 + parseInt(this.cnp[1] + this.cnp[2]));
        } else {
            varsta = 2021 - (2000 + parseInt(this.cnp[1] + this.cnp[2]));
        }
        console.log(this.prenume + " " + this.nume + " are " + varsta + " de ani");
    }

    afiseazaAnulAngajarii() {
        console.log(this.prenume + " " + this.nume + " a fost angajat in anul " + (2021 - this.vechime));
    }

    lucreaza() {
        console.log("Neimplementat");
    }
}


class QA extends AnagajatIT {
    constructor(cnp, nume, prenume, vechime, departament) {
        super(cnp, nume, prenume, vechime, departament);
    }

    lucreaza() {
        console.log(this.prenume + " " + this.nume + " testeaza software");
    }
}


class Developer extends AnagajatIT {
    constructor(cnp, nume, prenume, vechime, departament) {
        super(cnp, nume, prenume, vechime, departament);
    }

    lucreaza() {
        console.log(this.prenume + " " + this.nume + " scrie cod");
    }
}


async function getRandomPerson() {
    document.getElementById('person-img').setAttribute('src', 'loader.gif');
    const URL = "https://randomuser.me/api/";
    const result = await fetch(URL);
    const data = await result.json();
    document.getElementById('person-img').setAttribute('src', data.results[0].picture.medium);
    console.log("Name: " + data.results[0].name.first + " " + data.results[0].name.last);
    console.log("Gender: " + data.results[0].gender);
    console.log("E-mail: " + data.results[0].email);
    console.log("Age: " + data.results[0].dob.age);
}


document.getElementById("fetch-person-button").addEventListener('click', getRandomPerson);

let array = [];
for (let i = 0; i <= 10; i++) {
    array.push(i);
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i] + array[i] * 15);
}

array.forEach(x => console.log(x + x * 15)); //Nu stiu daca la asta se refera 'arrow functions și iteratori specifici ES6'

const [...rest] = array;
rest[2] = 22;
rest[6] = 66;
console.log(array);
console.log(rest);
