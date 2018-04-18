modules.exports = {
    getItems
}


var items = [{
    id: 101,
    budget: 10.00, 
    money_saved: 4.01,
    date: new Date()
  }, {
    id: 102,
    budget: 5.00, 
    money_saved: 0.50,
    date: new Date()
}]

function getItems() {
    return items
}