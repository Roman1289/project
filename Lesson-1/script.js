const goods = [
    { id: "1", title: 'Чизбургер', price: 150, image: "img/Cheeseburger.png" },
    { id: "2", title: 'Гамбургер', price: 250, },
    { id: "3", title: 'Чикенбургер', price: 223, },
    { id: "4", title: 'Фишбургер', price: 180, },
    { id: "5", title: 'Биг-Бургер', price: 294, },
    { id: "6", title: 'Двойной Чизбургер', price: 226, },
    { id: "7", title: 'Лонг-Бургер', price: 286, },
    { id: "8", title: 'Сырный Гамбургер', price: 222, },
    { id: "9", title: 'Джуниор', price: 135, },
    { id: "10", title: 'Тройной Гамбургер', price: 626, },
    { id: "11", title: 'Гриль_Бургер', price: 624, },
    { id: "12", title: 'Ролл-Джуниор', price: 266, },
];

const renderGoodsItem = (id = 0000, title = "title", price = 0, image = "img/Cheeseburger.png") =>
    `<div  id="${id}" class="goods-item">
    <img class="goods-img" src= ${image} alt=${title}>
    <h3 class = "goods-title">${title}</h3>
    <p class = "goods-price">$${price}</p>
    <button class = "by-btn">В корзину</button>
    </div>`;


const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.id, item.title, item.price, item.image)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);

