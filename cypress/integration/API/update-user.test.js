/// <reference types = "cypress" />

describe('Create New User', () => {
    it('Successfully create new user', () => {
    var user = {
        "name": "Putri Wahyuni",
        "job": "Pegawai Negeri Sipil"
    }
    cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.name).to.eq(user.name)
        expect(response.body.job).to.eq(user.job)
        })
    })
})