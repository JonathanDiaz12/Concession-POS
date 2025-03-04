function calculateTotal() {
    // Get the quantity of each item, or 0 if no value is entered
    let pizza = parseFloat(document.getElementById('Pizza').value) || 0;
    let nachos = parseFloat(document.getElementById('Nachos').value) || 0;
    let hotdog = parseFloat(document.getElementById('Hotdog').value) || 0;
    let candyBar = parseFloat(document.getElementById('CandyBar').value) || 0;
    let popcorn = parseFloat(document.getElementById('Popcorn').value) || 0;
    let soda = parseFloat(document.getElementById('Soda').value) || 0;

    // Calculate the total
    let total = (pizza * 2.00) + (nachos * 1.50) + (hotdog * 2.50) + (candyBar * 1.25) + (popcorn * 1.25) + (soda * 2.00);
    let finalTotal = total+(total*0.0825);
       // Update the subtotal element
       document.getElementById('Subtotal').innerHTML = `Subtotal: $${total.toFixed(2)}`;
        document.getElementById('FinalTotal').innerHTML = `Final Total: $${finalTotal.toFixed(2)}`;
}
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});
function resetTotals() {
    let total = "Final Total: $0.00";
    let Subtotal = "Subtotal: $0.00";
    document.getElementById('Subtotal').innerHTML = Subtotal;
    document.getElementById('FinalTotal').innerHTML = total;
}