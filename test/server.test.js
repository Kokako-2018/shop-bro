import request from 'supertest'
import cheerio from 'cheerio'

const server = require('../server/server')

test('tests are working', () => {
    expect(true).toBe(true)
})

test('Check the title is correct', (done) => {
    request(server) //Arrange
    .get('/') //Act  
    .expect(302)
    .end(function(err, res){
        //Assert
        console.log(res.text)
        var $ = cheerio.load(res.text)
        expect($('title').text()).toEqual('Shop Bro') 
        done()
    })
})