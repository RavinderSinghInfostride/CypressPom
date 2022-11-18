it('Post request', () => {
    cy.request({
        methos: 'POST',
        url: 'https://reqres.in/api/users'
    }).then(function (response) {
        expect(response.status).to.eq(200)
    })
})