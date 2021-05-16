const Person = {
    name: 'Paul',
    age: 25,
    skills: function(){
        console.log(this.name + " can read");
    },
    canRead: () => {
        console.log(this.name + " can read");
    }
}

Person.skills();
Person.canRead();