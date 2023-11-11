let angka = 5
const MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(angka == 5){
            resolve('ini angka 5')
        }else{
            reject('ini bukan angka 5')
        }
    }, 10000)    
})

const panggilPromise = (angka, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(angka == 5){
                resolve(`ini angka 5, berjalan setelah ${time}`)
            }else{
                reject(`ini bukan angular 5, berjalan setelah ${time}`)
            }
        }, time)
    })
}

function delay(time) {
    return new Promise((resolve) => {
        console.log(`Data akan muncul dalam ${time} detik`);
        setTimeout(() => {
            resolve('Data sudah siap');
        }, time * 1000);
    });
}


module.exports = {
    MyPromise,
    panggilPromise,
    delay,
}