const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

//User Regristration==============================
describe('Registration...........', function (){
    it('User Registration', async function (){
        const response = await request
            .post('/authaccount/registration')
            .send({
                "name":'Bond 007',
                "email":"bond007@test.com",
                "password":'jamesbond'
            });

        console.log(response.body);
        expect(response.status).to.eql(200);
        expect(response.body.data.Name).to.eql('Bond 007');
        expect(response.body.data.Email).to.eql('bond007@test.com');
        
    })
})