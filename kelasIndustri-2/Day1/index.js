let bulat = 12;
let pecah  = 3.14;

let teks = 'rawr';
let teks1 = 'r0rr';

let benar = true;
let salah = false;

let nilai = "";
let nilai1 = null;

let noNilai = null;
let noIsi;

const simbolUnik = Symbol("Deskripsi simbol");
// console.log(simbolUnik);

let angka = [1, 2, 3, 4, 5]

function tambahFunc(a, b) {
    return a ** b;
}
// console.log(tambahFunc(2, 4));

let siswa = {
    name: 'Arfan',
    age: 16,
    occupation: 'Student'
}
// console.log(siswa.name, siswa.occupation);

let tambah = angka[0] + angka[1];
let kali = angka[0] * angka[1];
let kurang = angka[3] - angka[1];
let bagi = angka[2] - angka[1];
let mod = angka[3] % angka[1];

let tru = 10 > 2;
let fek = 10 < 2;

let konsumen = {
    name: 'Kevin',
    member: false,
}

if (konsumen.member) {
    // console.log(konsumen.name + ' adalah seorang member')
}

if (konsumen.member) {
    // console.log(konsumen.name + ' adalah seorang member')
} else if (!konsumen.member) {
    // console.log(konsumen.name + ' bukan seorang member')
} else {
    // console.log(konsumen.name + ' bukan konsumen')
}

let warna = 'Red';
let gWarna;

switch (warna) {
    case 'Yellow':
        gWarna = 'The color is yellow'
        break;
    case 'Red':
        gWarna = 'The color is red'
        break;
    case 'Blue':
        gWarna = 'The color is blue'
        break;
    case 'Purple':
        gWarna = 'The color is purple'
        break;
}

// console.log(gWarna)

function calculatePPN(price) {
    return price * 0.10
}
// console.log(calculatePPN(10))

let sum = (a, b) => {
    return a + b
}

// alert(sum(1, 2))

const say = function(name, kelas) {
    console.log('Hi! ' + name + ' from ' + kelas)
}

const sayHi = say
// sayHi('Arfan', 'PPLG-XI-4')

const sayHalo = function(name = 'Pengunjung') {
    console.log('Halo! ' + name)
}

// sayHalo()
// sayHalo('Ujang')

let hargaSatuan;
let hargaSatuan2;

let jumlah = 10
let total = jumlah + (hargaSatuan || 0)

let harga = hargaSatuan2 !== undefined ? hargaSatuan2 : 0;
// console.log(harga)

const doubles = angka.map((angka) => angka * 2)
// console.log(doubles)

const angka2 = [1, 3, 2, 4, 6, 8, 10 ,11]

const even = angka2.filter((angka2) => angka2 % 2 == 0);
// console.log(even)

const odd = angka2.filter((angka2) => angka2 % 2 !== 0);
// console.log(odd)

const numberReduce = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(numberReduce)

// const fruits = ['apple', 'banana', 'cherry']
// fruits.forEach((fruit) => console.log(fruit))

// fruits.sort();

const cari = angka.find((angka) => angka > 3)
// console.log(cari)

const fruits = ['apel', 'pisang', 'ceri', 'anggur']
const angkas = [1,2,3,4,5]
// const strPisah = fruits.join(', ');




