#o bloco try/except é usado para capturar e tratar exceções permitindo que o programa continue a execução mesmo quando ocorrem erros

#O bloco try except permite que você “tente” executar um bloco de código e, caso ocorra um erro, “capture” essa exceção e execute um código alternativo
try:
    x = int(input("Digite um número: "))
    y = int(input("Digite outro número: "))
    resultado = x / y
    print(f"O resultado é: {resultado}")
except ZeroDivisionError:
    print("Erro: Não é possível dividir por zero!")
except ValueError:
    print("Erro: Entrada inválida! Por favor, digite um número.")

#Neste exemplo, o bloco try tenta executar a divisão de dois números fornecidos pelo usuário. Se o usuário tentar dividir por zero, o except ZeroDivisionError captura essa exceção e exibe uma mensagem de erro. Além disso, se o usuário digitar algo que não seja um número, o except ValueError captura essa exceção e exibe uma mensagem de erro apropriada. 


#Aqui tentamos dividir 10 por 0 gerando um ZeroDivisionError

lista = [1, 2, 3]
print(lista[5])

#Neste caso tentamos acessar o índice 5 de uma lista que só possui 3 elementos gerando um IndexError