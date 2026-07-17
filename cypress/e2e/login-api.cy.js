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

    context('Requisições de usuário clinica em especialistas', () => {
        beforeEach(() => {
            cy.fixture('especialistas.json').as('especialistas')
        })

        it('POST em especialistas', () => {

            cy.env(['api_clinica']).then(({ api_clinica }) => {

                cy.get('@especialistas').then((dados) => {
                    const especialista = dados.especialistas[0]

                    cy.request({
                        method: 'POST',
                        url: api_clinica,
                        body: {
                            nome: especialista.nome,
                            email: especialista.email,
                            senha: especialista.senha,
                            endereco: {
                                cep: especialista.cep,
                                rua: especialista.rua,
                                numero: especialista.numero,
                                complemento: especialista.complemento,
                                estado: especialista.estado
                            }
                        }
                    }).then((response) => {
                        if (response.status !== 201) {
                            cy.log(`O status ${response.status} não é o padrão 201`)
                        }
                        expect(response.body).to.have.property('id') // Verifica se a resposta possui a propriedade "id"
                        expect(response.body).to.have.property('nome')
                        expect(response.body).to.have.property('email') // Verifica se a propriedade "email" é igual ao valor enviado na requisição
                    })
                })
            })
        })
    })
})
