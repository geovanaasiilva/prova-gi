salario_mensal =  float (input("digite seu salario:"))

salario_anual = salario_mensal * 12
print ("salario_anual:" , salario_anual)

if (salario_mensal >= 5000 ):
    imposto = salario_mensal * 0.12
    print(f"voce devera pagar {imposto:.2f} de imposto (12%),")

elif (salario_mensal >= 2000 and salario_mensal <= 4999):
    imposto = salario_mensal * 0.7
    print(f"voce devera pagar {imposto:.2f} de imposto (7%),")
    
elif (salario_mensal < 2000 ):
    imposto = salario_mensal * 0.3
    print(f"voce devera pagar {imposto:.2f} de imposto (3%),")

imposto_anual = imposto * 12

print ("Imposto anual:", imposto_anual)