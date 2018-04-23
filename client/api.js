import request from 'superagent'

const shopBroUrl = '/api'  //shop-bro needs to be added to the URL here

export function getItems (callback) {
  request
    .get(shopBroUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function appendItem (item, callback) {
  console.log('send', item)
  request
    .post(shopBroUrl)
    .send(item)
    .end((err, res) => {
      callback(err)
    })
}
export function deleteItem (id, callback) {
  request
   .del(shopBroUrl)
   .send({id:id})
   .end((err, res) => {
     callback(err)
   })
}