const salon = {
    name:'Fashion Pets',
    phone: '(867)530-9898',
    address:{
        street:"Yordle st",
        number:'1313-5'
    },
    workingHours:{
        days:'Mon - Fri',
        open: '8:00 am',
        close: '5:00 pm'
    },
    pets:[],
    count: function(){
        alert('You have ' + this.pets.length + ' in service');
    }
}

let{name,phone,address:{street,number}, workingHours:{days, open, close}} = salon;

document.querySelector('.info').innerHTML = `<h1>Welcome to ${name}</h1> <p>Contact Number: ${phone} <br>${street} ${number} <br> It is open from ${open} till ${close}</p>`;
document.querySelector('footer .info').innerHTML = `<p>Contact Number${phone} <br>${street} ${number} <br> It is open from ${open} till ${close}</p>`;

var petc = 0;

class Pet {
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.id = "Pet" + petc;
        petc += 1;
        console.log(this.id)

    }
    ownerContact = function(){
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.contactPhone)
    }
}

var textName = document.getElementById('name');
var textAge = document.getElementById('age');
var textType = document.getElementById('type');
var textGender = document.getElementById('gender');
var textBreed = document.getElementById('breed');
var textService = document.getElementById('service');
var textOwnerName = document.getElementById('ownerName');
var textContactPhone = document.getElementById('contactPhone');

function register(){
    
    const thePet = new Pet(textName.value, textAge.value , textType.value , textGender.value , textBreed.value , textService.value , textOwnerName.value , textContactPhone.value);
    salon.pets.push(thePet);
    clearForm();
    alert("You successfully registered a pet");
    // display(thePet);
    displayTable(thePet);
}

function clearForm(){
    document.getElementById('petInput').reset();
}

// function display(aPet){
//     var list = document.getElementById('petList');
//     var li = document.createElement('li');
//     li.innerText = `${aPet.name} -- ${aPet.age} -- ${aPet.type} -- ${aPet.service} -- ${aPet.ownerName}`
//     li.setAttribute("class", "list-group-item")
//     list.appendChild(li);
// }

function displayTable(aPet){
    var tBody = document.getElementById('listBody');
    var row =` <tr id="${aPet.id}">
    <td>${aPet.name}</td>
    <td>${aPet.age}</td>
    <td>${aPet.type}</td>
    <td>${aPet.gender}</td>
    <td>${aPet.breed}</td>
    <td>${aPet.service}</td>
    <td>${aPet.ownerName}</td>
    <td>${aPet.contactPhone}</td>
    <td><button onclick='remove("${aPet.id}");'>Remove</button</td>
</tr>`;

    tBody.innerHTML += row;
}

function remove(petId){
    console.log('Are you sure you want to Remove ' + petId);
    var tr = document.getElementById(petId);
    var indexDelete = 0;
    for ( var i = 0; i < salon.pets.length; i += 1){
        var indexPets = salon.pets[i];
        if(indexPets.id == petId){
            indexDelete = i;
        }
    }

    salon.pets.splice(indexDelete,1);
    tr.remove();
}

function search(){
    var searchString = document.getElementById('search').value;
    var theFoundedPet; 
    for(var j = 0; j < salon.pets.length; j++){
        var searchPet = salon.pets[j];
        if(searchPet.name == searchString){
            theFoundedPet = j;
            document.getElementById('Pet' + theFoundedPet).setAttribute('class', 'selected');
        }
    }
}