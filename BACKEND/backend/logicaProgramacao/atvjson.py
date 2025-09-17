import json

estoque_categoria = []
estoque_produto = []

id_categoria = 0
id_produto = 0

def menu():
    print("\n1) Cadastrar categoria")
    print("2) Cadastrar produto")
    print("3) Listar produtos")
    print("4) Sair")

def cadastrar_categoria():
    global id_categoria
    print("\nCadastro de categoria:")
    nome_categoria = input("Nome: ")
    id_categoria = id_categoria + 1


    categoria = {
        "id_categoria": id_categoria,
        "nome_categoria": nome_categoria
    }

    estoque_categoria.append(categoria)
    print(f"Categoria '{nome_categoria}' cadastrada com sucesso!")

def cadastrar_produto():
    global id_produto

    if not estoque_categoria:
        print("Erro: Nenhuma categoria cadastrada. Cadastre uma categoria primeiro.")
        return

    print("\nCategorias disponíveis:")
    for categoria in estoque_categoria:
        print(f"ID: {categoria['id_categoria']} - Nome: {categoria['nome_categoria']}")

    id_produto = id_produto +1
    nome_produto = input("Nome do produto: ")
    preco = float(input("Preço do produto: "))
    id_categoria_associado = int(input("ID da categoria associada: "))

    categoria_valida = False
    for categoria in estoque_categoria:
        if categoria['id_categoria'] == id_categoria_associado:
            categoria_valida = True
            break

    if not categoria_valida:
        print("Erro: Categoria associada inválida!")
        return

    produto = {
        "id_produto": id_produto,
        "nome_produto": nome_produto,
        "preco": preco,
        "id_categoria_associado": id_categoria_associado
    }

    estoque_produto.append(produto)
    print(f"Produto '{nome_produto}' cadastrado com sucesso!")

def listar_produtos():
    if not estoque_produto:
        print("\nNenhum produto cadastrado.")
        return

    print("\nLista de Produtos:")
    for produto in estoque_produto:
        categoria_nome = ""
        for categoria in estoque_categoria:
            if categoria['id_categoria'] == produto['id_categoria_associado']:
                categoria_nome = categoria['nome_categoria']
                break
        print(f"ID Produto: {produto['id_produto']} | Nome: {produto['nome_produto']} | Preço: {produto['preco']} | Categoria: {categoria_nome}")

def executar_programa():
    while True:
        menu()
        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            cadastrar_categoria()
        elif opcao == "2":
            cadastrar_produto()
        elif opcao == "3":
            listar_produtos()
        elif opcao == "4":
            print("Saindo do programa...")
            break
        else:
            print("Opção inválida. Tente novamente.")

executar_programa()
