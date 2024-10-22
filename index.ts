interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
class Inventory {
    private products: Product[] = [];
    addProduct(product: Product): void {
        this.products.push(product);
    }
    updateStock(id: number, newQuantity: number): void{
        const product = this.products.find(p => p.id === id);
        if (product){
            product.quantity = newQuantity;
        }
    }
    getTotalValue(): number {
        return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
    getLowStockProducts(threshold: number): Product[]{
        return this.products.filter(product => product.quantity < threshold);
    }
}


const inventory = new Inventory();
inventory.addProduct({id: 1, name: 'headphone razer', price: 45000, quantity: 20});
inventory.addProduct({id: 2, name: 'mouse razer  tx200', price: 65700, quantity:30});
inventory.addProduct({id: 3, name: 'micro sd 256gb', price:25000, quantity:100});

inventory.updateStock(1,10);
inventory.updateStock(2,20);

console.log('total del valor del inventario', inventory.getTotalValue());

console.log('bajo stock', inventory.getLowStockProducts(10));
