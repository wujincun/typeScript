let myName: string = "wujincun";
console.log(myName)

let aa: any = "123";
aa = 123;

function getStock() {
    return {
        code: 'ibm',
        price: '100'
    }
}

let {code, price} = getStock();
console.log(code, price)
