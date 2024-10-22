class Expense {
    constructor(id, description, amount, category, date){
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.category = category;
        this.date = date;
    }
}
class ExpenseReport {
    constructor(){
        this.expenses = [];
    }
    addExpense(expense){
        this.expenses.push(expense);
    }
    getTotalByCategory(category){
        const total = this.expenses
        .filter(expense => expense.category === category)
        .reduce((sum, expense) => sum + expense.amount, 0);
        return total; 
    }
}

const report = new ExpenseReport();

const expense1 = new Expense(2,'taxi al aeropuerto',30.00,'transporte','2024-03-02');
const expense2 = new Expense(1,'almuerzo de negocios',55.50,'comida','2024-03-01');
const expense3 = new Expense(3,'merienda',25.50,'comida','2024-03-01');
report.addExpense(expense1);
report.addExpense(expense2);
report.addExpense(expense3);

const totalComida = report.getTotalByCategory('comida');
console.log('total gastos en comida', totalComida);
const totalTransporte = report.getTotalByCategory('transporte');
console.log('total gastos en transporte', totalTransporte);
