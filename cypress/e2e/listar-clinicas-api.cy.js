describe('Teste de requisição da API para Listar Clínicas', () => {

    beforeEach(() => {
    })

    it('Deve listar todas as clínicas cadastradas', function () {
        cy.env(['api_clinica']).then(({ api_clinica }) => {
            cy.request({
                method: 'GET',
                url: api_clinica,
                failOnStatusCode: false
            }).then((response) => {

                // Verifica se o status da resposta é 200 
                expect(response.status).to.eq(200)

                // Verifica se o Corpo da resposta é um array
                expect(response.body).to.be.an('array')

                // Verifica se caso exista alguma clínica cadastrada
                if (response.body.length > 0) {

                    expect(response.body[0]).to.have.property('id')
                    expect(response.body[0]).to.have.property('nome')
                    expect(response.body[0]).to.have.property('email')
                }
            })
        })
    })
})