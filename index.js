
const products = [ 
    {
        nome: "Uva Crimson",
        preço: 44.99
    },
    {
        nome: "Vinho Canção",
        preço: 17.98
    },
    {
        nome: "Água de coco",
        preço: 8.99
    }
]

function lista(produto){

    const body = document.querySelector("body")
    const title = document.createElement("h1")

    const main = document.createElement("main")
    const divItem = document.createElement("div")
    const pItem = document.createElement("p")
    const pValor = document.createElement("p")

    const tag_ul = document.createElement("ul")
    const section = document.createElement("section")
    const divTotal = document.createElement("div")
    const total = document.createElement("p")
    const valorTotal = document.createElement("p")
    const buttonEnd = document.createElement("button")
    
    produto.forEach((item) => {
        
        const tag_li = document.createElement("li")
        const nomeItem = document.createElement("p")
        const valorItem = document.createElement("p")
    
        nomeItem.innerText = item.nome
        valorItem.innerText = item.preço
        pItem.innerText = "Item"
        pValor.innerText = "Valor"
        tag_li.appendChild(nomeItem)
        tag_li.appendChild(valorItem)
        tag_ul.appendChild(tag_li)
    });
    
    let soma = 0
    for(let i = 0; i < produto.length; i++){
        soma += produto[i].preço
    }        
    
    valorTotal.innerText = `R$ ${soma.toFixed(2)}`
    
    divItem.classList.add("item")
    tag_ul.classList.add("compras")  
    divTotal.classList.add("total")  
    
    
    title.innerText = "Virtual Market"
    main.appendChild(title)
    

    divItem.appendChild(pItem)
    divItem.appendChild(pValor)
    main.appendChild(divItem)
    
    
    main.appendChild(tag_ul)
    
    
    total.innerText = "Total"
    buttonEnd.innerText = "Finalizar Compra"
    
    divTotal.appendChild(total)
    divTotal.appendChild(valorTotal)
    section.appendChild(divTotal)
    section.appendChild(buttonEnd)
    main.appendChild(section)
    body.appendChild(main)
    
    
    return main
    
}lista(products)


