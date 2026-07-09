describe('testes em API', () => {
    context('Testes em rotas com usuário autorizado', () => {
        beforeEach(() => {
            cy.env(['email', 'senha', 'api_login']).then(({ email, senha, api_login }) => {
                cy.loginApi(email, senha, api_login)
            })
        })

        it('Get via url front para teste em resposta da home', () => {
            cy.request('GET', '/').should((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Deve verificar se o token de autenticação é retornado após login via POST na API', () => {
            cy.get('@token').should('exist')
        })
    })
})

