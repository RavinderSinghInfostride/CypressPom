it('Get request', () => {
    cy.request({
        methos: 'GET',
        url: 'https://reqres.in/api/users?page=2'
    }).then(function (response) {
        expect(response.status).to.eq(200)
        cy.screenshot()
    })
})