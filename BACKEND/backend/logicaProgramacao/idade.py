idade = int(input("Digite a sua idade:"))

match idade:
    case x if x >=12 and x < 18 :
        print("voce é um adolecente")

    case x if x <=12 :
        print("voce é uma crianca")

    case x if x >=18 and x < 60 :
        print("voce é um adulto")

    case x if x >=60 and x < 100:
        print("voce é um idoso")

    case x if x >=100 :
        print("voce é uma mumia")
   


   
