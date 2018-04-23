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

// export function getBg (callback) {
//   console.log('Calling API getBg')
//   request
//     .get(bgUrl)
//     .end((err, res) => {
//       callback(err, res.body)
//     })
// }
//From Zengie branch of react to web api exercise.  This is here another
//API is used and called.