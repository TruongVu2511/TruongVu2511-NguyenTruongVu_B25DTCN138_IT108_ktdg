let products = [
    { id : "P01" , name : "Laptop MacBook Pro M3", price : 2000, categary : "Laptop", inStock : true },
    { id : "P02" , name : "Chuột không dây Logitech", price : 45, categary : "Phụ kiện", inStock : true },
    { id : "P03" , name : "Bàn phím cơ Keychron", price : 95, categary : "Phụ kiện", inStock : false },
    { id : "P04" , name : "Màn hình Dell UltraSharp", price : 450 , categary : "Màn hình", inStock : true },  
    { id : "P05" , name : "Tai nghe Sony WH-1000XM5", price : 350, categary : "Phụ kiện", inStock : true },
]
const totalValue = () => {
    let filPro = products.filter(product => product.inStock === true);
    let total = filPro.reduce((sum, product) => sum + product.price, 0);
    console.log(`Tổng giá trị sản phẩm trong kho: ${total}`);
}
totalValue();

const filterProducts = () => {
    let filPro = products.filter(product => product.inStock === true);
    let SortPro = filPro.sort((a, b) => b.price - a.price);
    console.log(`Sản phẩm còn hàng, sắp xếp theo giá giảm dần:`);
    console.log(SortPro);
}
filterProducts();

const infomation = () => {
    let filPro = products.filter(product => product.categary === "Phụ kiện");
    let namePro = filPro.map(product => product.name);
    console.log(`Tên sản phẩm thuộc danh mục Phụ kiện:`);
    console.log(namePro);
}
infomation();