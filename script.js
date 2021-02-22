//- Створити масив автівок з полями id , model, producer ,tankVolume, horsePower, image. 15 об'єктів.
// Вивести увесь масив в документ застилізувавши його по 2 елементи в ряд

let cars = [{
    id: 1,
    model: '500L',
    producer: 'Fiat',
    tankVolume: 1.3,
    horsePower: 85,
    image: 'https://cdn0.riastatic.com/photosnew/auto/photo/fiat_500l__375941945fx.webp'
}, {
    id: 2,
    model: '500X',
    producer: 'Fiat',
    tankVolume: 2.4,
    horsePower: 180,
    image: 'https://cdn3.riastatic.com/photosnew/auto/photo/fiat_500x__375663218fx.webp'
}, {
    id: 3,
    model: 'Passat B8',
    producer: 'Volkswagen',
    tankVolume: 2,
    horsePower: 150,
    image: 'https://cdn1.riastatic.com/photosnew/auto/photo/volkswagen_passat-b8__375640036fx.webp'
}, {
    id: 4,
    model: 'Touareg',
    producer: 'Volkswagen',
    tankVolume: 3,
    horsePower: 340,
    image: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volkswagen-touareg__1073864-620x465x70.webp'
}, {
    id: 5,
    model: 'Malibu',
    producer: 'Chevrolet',
    tankVolume: 2.4,
    horsePower: 169,
    image: 'http://cs.copart.com/v1/AUTH_svc.pdoc00001/PIX333/5083f24b-907f-466b-bbdd-8e00a3c54d9d.JPG'
}, {
    id: 6,
    model: 'Camaro',
    producer: 'Chevrolet',
    tankVolume: 3.6,
    horsePower: 323,
    image: 'https://autompv.ru/wp-content/uploads/2013/04/Chevrolet-Camaro-SS-2014.jpg'
}, {
    id: 7,
    model: 'Octavia',
    producer: 'Skoda',
    tankVolume: 1.6,
    horsePower: 102,
    image: 'https://cdn1.riastatic.com/photosnew/auto/photo/skoda_octavia-a5__374312631fx.webp'
}, {
    id: 8,
    model: 'Superb',
    producer: 'Skoda',
    tankVolume: 1.8,
    horsePower: 160,
    image: 'https://cdn1.riastatic.com/photosnew/auto/photo/skoda_superb__375974351fx.webp'
}, {
    id: 9,
    model: 'X5',
    producer: 'BMW ',
    tankVolume: 3,
    horsePower: 400,
    image: 'https://cdn0.riastatic.com/photosnew/auto/photo/bmw_x5__351041185fx.webp'
}, {
    id: 10,
    model: '550',
    producer: 'BMW',
    tankVolume: 4.4,
    horsePower: 407,
    image: 'https://cdn1.riastatic.com/photosnew/auto/photo/bmw_550__371662071fx.webp'
}, {
    id: 11,
    model: 'Outlander',
    producer: 'Mitsubishi',
    tankVolume: 2.4,
    horsePower: 170,
    image: 'https://cdn2.riastatic.com/photosnew/auto/photo/mitsubishi_outlander__375289602fx.webp'
}, {
    id: 12,
    model: 'Eclipse Cross',
    producer: 'Mitsubishi',
    tankVolume: 1.5,
    horsePower: 150,
    image: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/mitsubishi-eclipse-cross__880238-620x465x70.webp'
}, {
    id: 13,
    model: 'A4',
    producer: 'Audi',
    tankVolume: 2,
    horsePower: 190,
    image: 'https://cdn4.riastatic.com/photosnew/auto/photo/audi_a4__375208094fx.webp'
}, {
    id: 14,
    model: 'Q5',
    producer: 'Audi',
    tankVolume: 3,
    horsePower: 272,
    image: 'https://cdn4.riastatic.com/photosnew/auto/photo/audi_q5__371146494fx.webp'
}, {
    id: 15,
    model: 'A6',
    producer: 'Audi',
    tankVolume: 2,
    horsePower: 190,
    image: 'https://cdn1.riastatic.com/photosnew/auto/photo/audi_a6__294537636fx.webp'
}]

for (let i = 0; i < cars.length; i++) {
    document.write(`
        <div class='cars-item'>
            <h2>${cars[i].producer} - ${cars[i].model}</h2>
            <h3>обєм ${cars[i].tankVolume} л., потужність ${cars[i].horsePower} к.с.</h3>
            <img src="${cars[i].image}" alt="${cars[i].model}">
        </div>
    `);
}