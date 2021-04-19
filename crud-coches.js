const cars = [
    {
        id: 0,
        brand: 'Mazda',
        model: 'Fiesta',
        color: 'rojo',
        year: '2018',
        price: '$20.000',
        picture:'./images/car1.jpeg',
        
    },

    {
        id: 1,
        brand: 'Mercedes benz',
        model: 'Furious',
        color: 'gris',
        year: '2030',
        price: '$25.000',
        picture:'./images/car2.jpeg',
        
    },
];
const edit = false;
function printCars(dataCars) {
    const container = document.getElementById('cars-container');
    container.innerHTML = '';
    dataCars.forEach((car) => {
        const htmlCar = `<tr>
                            <td>${car.brand}</td>
                            <td>${car.model}</td>
                            <td>${car.color}</td>
                            <td>${car.year}</td>
                            <td>${car.price}</td>
                            <td>
                            <img src="${car.picture}" alt="" width="100px">                   
                            </td>
                            
                            <td>
                                <button class="btn btn-secondary" onclick="deleteCar(${car.id})">Eliminar</button>
                                <button class="btn btn-dark" onclick="editCar(${car.id})">Actualizar</button>
                            </td>
                        </tr>`;
        container.innerHTML += htmlCar;
    });
}

/* ---arriba primera parte que me salga el mazda, mas los botones y formulario--- */

const EDIT = 'edit';
const CREATE = 'create';

function addCar() {
    // Podemos acceder al value en una sola línea
    const brandCar = document.getElementById('brand').value;
    const modelCar = document.getElementById('model').value;
    const colorCar = document.getElementById('color').value;
    const yearCar = document.getElementById('year').value;
    const priceCar = document.getElementById('price').value;
    const pictureCar = document.getElementById('picture').value;


    const newCar = {
        id: generateId(),
        brand: brandCar,
        model: modelCar,
        color: colorCar,
        year: yearCar, 
        price: priceCar,
        picture: pictureCar,
    }

    cars.push(newCar);
    printCars(cars);
    resetForm();
    HideFormContainer();
}

function generateId() {
    let biggerId = 0;
    cars.forEach((car) => {
        if(car.id > biggerId) {
            biggerId = car.id;
        }
    });
    return biggerId += 1;
}

function deleteCar(id) {
    const index = cars.findIndex((car) => car.id === id);
    cars.splice(index, 1);
    printCars(cars);
}

function editCar(id) {
    const index = cars.findIndex((car) => car.id === id);
    const car = cars[index];
    document.getElementById('brand').value = car.brand;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;
    document.getElementById('picture').value = car.picture;
    showFormContainer();
    changeEditbutton();  
}

function resetForm() {
    document.getElementById('car-form').reset();
}

function HideFormContainer() {
    document.getElementById('create-car-container').classList.add('d-none');
}

function showFormContainer() {
    document.getElementById('create-car-container').classList.remove('d-none');
    changeCreatebutton();
}

function changeEditbutton() {   
    const button = getFormCarButton();
    button.innerHTML = 'Editar'
    button.classList.remove('btn-info');
    button.classList.add('btn-dark');
    button.value = EDIT;
}

function changeCreatebutton() {
    const button = getFormCarButton();
    button.innerHTML = 'Guardar'
    button.classList.add('btn-info');
    button.classList.remove('btn-dark');
    button.value = CREATE;
}

function car() {
    const buttonValue = getFormCarButton().value
    if(buttonValue === EDIT){
        alert('Editamos')
    } else {
        addCar();
    }
}

function getFormCarButton() {
    return document.getElementById('btn-car-form');
}

printCars(cars);