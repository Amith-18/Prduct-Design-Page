

let productImg = document.getElementById('product-img');
let btn = document.getElementsByClassName('btn');
// console.log(btn.length);


for (let i = 1; i <= 3; i++) {
    btn[i-1].onclick = function () {
        productImg.src = `images/image${i}.png`;

        for (let j = 0; j < btn.length; j++) {
            btn[j].classList.remove('active');
        }

        btn[i-1].classList.add('active');
    };
}


