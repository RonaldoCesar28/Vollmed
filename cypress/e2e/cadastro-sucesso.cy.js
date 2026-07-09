describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    context('Verifica redirecionamento de página', () => {
        it('Clica no link "Cadastra-se" e redireciona para a página de cadastro da clínica', () => {
            cy.get('[href="/cadastro"]').click();
            cy.location('pathname').should('equal', '/cadastro')

        })
    })

    context('Primeira parte da sessão de cadastro', () => {
        it('Digita dados da clínica e exibe a área para inserção de dados técnicos', () => {
            cy.get('[href="/cadastro"]').click();
            cy.get('[data-test="inputNome"]').type('Ronaldo Cesar');
            cy.get('[data-test="inputCNPJ"]').type('2485817251');
            cy.get('[data-test="inputEmail"]').type('ronaldo28@email.com');
            cy.get('[data-test="inputSenha"]').type('Senha12345');
            cy.get('[data-test="inputSenhaVerificada"]').type('Senha12345');
            cy.get('.sc-bcXHqe').click();
            cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible')
            cy.get('.sc-laZRCg').should('exist').should('be.visible')
        })
    })

    context('Sessão de cadastro completa', () => {
        it('Cadastra uma clínica', () => {
            cy.get('[href="/cadastro"]').click();
            cy.get('[data-test="inputNome"]').type('Ronaldo Cesar');
            cy.get('[data-test="inputCNPJ"]').type('2485817251');
            cy.get('[data-test="inputEmail"]').type('ronaldo28@email.com');
            cy.get('[data-test="inputSenha"]').type('Senha12345');
            cy.get('[data-test="inputSenhaVerificada"]').type('Senha12345');

            cy.get('.sc-bcXHqe').click()

            cy.get('[data-test="inputTelefone"]').type('47988541249');
            cy.get('[data-test="inputCEP"]').type('89230630');
            cy.get('[data-test="inputRua"]').type('José Clara de Oliveira');
            cy.get('[data-test="inputNumero"]').type('93');
            cy.get('[data-test="inputComplemento"]').type('Casa');
            cy.get('[data-test="inputEstado"]').type('SC');

            cy.contains('Cadastrar').click()
            cy.location('pathname').should('equal', '/login')
        })
    })
})
