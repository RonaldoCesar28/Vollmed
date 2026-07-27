describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('')
        cy.contains('Entrar').click()
    })
    it('Digita email e senha corretos para efetuar o login', { browser: 'edge' }, () => {
        cy.env(['email', 'senha']).then(({ email, senha }) => {
            cy.login(email, senha)
        })
        cy.url().should('eq', 'http://localhost:3000/dashboard')
    })
})