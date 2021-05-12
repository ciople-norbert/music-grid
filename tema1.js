class AngajatIT {
    constructor(cnp, nume, prenume, vechime, departament) {
        this.cnp = cnp;
        this.nume = nume;
        this.prenume = prenume;
        this.vechime = vechime;
        this.departament = departament;
    }

    afiseazaVarsta() {
        let varsta;
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        console.log("Day: ", currentDay);
        if (this.cnp[0] == "1" || this.cnp[0] == "2") {
            varsta = currentYear - (1900 + parseInt(this.cnp[1] + this.cnp[2]));
        } else {
            varsta = currentYear - 2021 - (2000 + parseInt(this.cnp[1] + this.cnp[2]));
        }
        if (currentMonth < parseInt(this.cnp[3] + this.cnp[4])) {
            varsta--;
        } else if (currentMonth == parseInt(this.cnp[3] + this.cnp[4])
            && currentDay < parseInt(this.cnp[5] + this.cnp[6])) {
            varsta--;
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


class QA extends AngajatIT {
    constructor(cnp, nume, prenume, vechime, departament) {
        super(cnp, nume, prenume, vechime, departament);
    }

    lucreaza() {
        console.log(this.prenume + " " + this.nume + " testeaza software");
    }
}


class Developer extends AngajatIT {
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
    const person = data.results[0];
    document.getElementById('person-img').setAttribute('src', person.picture.medium);
    document.getElementById('person-first-name').innerHTML = 'First name: ' + person.name.first;
    document.getElementById('person-last-name').innerHTML = 'Last name: ' + person.name.last;
    document.getElementById('person-gender').innerHTML = 'Gender: ' + person.gender;
    document.getElementById('person-email').innerHTML = 'E-mail: ' + person.email;
    document.getElementById('person-age').innerHTML = 'Age: ' + person.dob.age;
}

document.getElementById("fetch-person-button").addEventListener('click', getRandomPerson);

let array = [];
for (let i = 0; i <= 10; i++) {
    array.push(i);
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i] + array[i] * 15);
}

array.forEach(x => console.log(x + x * 15));
array.map(x => console.log(x + x * 15));


let [...rest] = array;
rest = rest.map(x => x == 2 || x == 6 ? x *= 11 : x = x);
console.log(array);
console.log(rest);
