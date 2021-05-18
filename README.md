# test-compasso-rest-api

## Rodar a aplicação: 

`npm i`

Crie o arquivo .env e edite as variáveis de acordo com o seu ambiente. Use o arquivo .env_example como modelo.

### Insira o usuário na base do mongo: 

`npm run migration:user`

#### Dados do usuário:
#### user: admin
#### password: gd2D2@cjwcvneSMs2Sc_ew

### Caso queira inserir todas as cidades do Brasil na base de dados execute:

#### Obs: esse passo não é necessário, execute somente caso queira popular a base com todas as cidades e seus respectivos estados

`npm run migration:cities`

### Para iniciar a aplicação execute:

`npm run dev`

### Após o comando interior a aplicação estará disponível em: http://localhost:3000

### Para acessar a documentação acesse: http://localhost:3000/api/v1/docs

# TODO:
- Implementar o env-cmd ✓
- Implementar lint ✓
- Implementar o mongoose ✓
- Middleware de tratamento de erros ✓
- **CRUD cidade e cliente:** 
 Cadastrar cidade e cliente; ✓
 Consultar cidade pelo nome, estado, ✓
 Consultar cliente pelo nome e Id; ✓
 Remover cliente; ✓
 Alterar o nome do cliente; ✓
- **Considere o cadastro com dados básicos:** 
 Cidades: nome e estado; ✓
 Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora. ✓
- Migration do usuário admin e de todas as cidades do Brasil. ✓
- Validações com Joi ✓
- Documentação com Swagger
- Logs com Winston ✓
- Audit fix ✓

**NODE: v14.16.0**
