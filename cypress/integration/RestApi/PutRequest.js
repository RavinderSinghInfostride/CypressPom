it('Put request', () => {
    cy.request({
        methos: 'PUT',
        url: 'https://reqres.in/api/users/2'
    }).then(function (response) {
        expect(response.status).to.eq(200)
    })
})