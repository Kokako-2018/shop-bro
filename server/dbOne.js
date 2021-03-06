module.exports = {
    getItems,
    saveItem,
    removeItem,
    updateItem
    //because you're not exporting update item
}


var items = [{
    id: 1,
    item: 'milk', 
    cost: 3.49,
    shopping_id: 101
  }, {
    id: 2,
    item: 'bread', 
    cost: 2.50,
    shopping_id: 101
  }, {
    id: 3,
    item: 'cheese', 
    cost: 4.50,
    shopping_id: 102,
}]

function getItems() {
    return items
}

function saveItem (item) {
    item.id = items.length + 1
    items.push(item)
  }

function removeItem (item) {
    var newArr = items.filter(each => { return item.id != each.id})
    return items = newArr
}

function updateItem (newItem) {
  items.map((item) => {
    return item.id == newItem.id ? newItem : item
  })
 }