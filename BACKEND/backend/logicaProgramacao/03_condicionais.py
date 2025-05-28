nome = input("Digite seu nome:")
print("Ola", nome) 

valor1 = int (input("Digite o primeiro valor:"))
valor2 = int (input("Digite o segundo valor:"))

if(valor1 > valor2):
    print("o valor1 é maior que o valor2")

elif(valor2 > valor1):
    print("o valor2 é maior que o valor1")

else:
    print("os valores são iguais")

nota1 = int (input("Digite a primeira nota:"))
nota2 = int (input("Digite a segunda nota:"))
nota3 = int (input("Digite a terceira nota:"))
nota4 = int (input("Digite a quarta nota:"))

media= (nota1+nota2+nota3+nota4)/4

if(media == 100):
    print("exelente")

elif(media >= 80 and media <=99):
    print("muito bem")

elif(media >= 70 and media <=79 ):
    print("na raspa")

elif(media <= 70):
    print("precisa melhorar")

else:
    print("valores invalidos")


