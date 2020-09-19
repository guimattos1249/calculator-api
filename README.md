Comandos para execução:

Comando para instalar todas as dependências: npm install;
Comando para executar o node: npm start;

---------------------------------------------------------

Rotas:

/somar: POST - 
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser): 
      `{
          "values": [1, 5, 6, 9]
        }`

/subtrair: POST - 
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser): 
      `{
          "values": [5, 10]
        }`
    - Retorna um array com os valores da subtração

/dividir: POST -
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser): 
      `{
          "values": [5, 10]
        }`
    - Retorna um array com os valores da divisão

multiplicar: POST - 
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser): 
      `{
          "values": [1, 5, 6, 9]
        }`

raizquadrada: POST - 
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser): 
      `{
          "values": [1, 5, 6, 9]
        }`

potencia: POST - 
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser):   
      `{
          "values": [1, 5, 6, 9]
        }`
    - Cada valor do array vai fazer a potência com ele mesmo.

mediaaritmetica: POST - 
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser): 
      `{
          "values": [1, 5, 6, 9]
        }`

mediaharmonica: POST - 
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser): 
      `{
          "values": [1, 5, 6, 9]
        }`

moda: POST - 
    - Entrada realizada por JSON.
    - Exemplo de entrada (Quantos elementos no array quiser): 
      `{
          "values": [1, 5, 6, 9]
        }`
