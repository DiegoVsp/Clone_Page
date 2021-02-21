let conteudo = document.querySelector('.conteudo')

    const produtos = [{
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-St7cXKUhYmqqOQMj14zRHNu6Lbad4hv1g&usqp=CAU',
        name: 'Thanos Action Figure',
        price: '1.359,00',
        price2: '123,40',
        price3: '1234,00'
      },
      {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPcHi0L5vRN2sgDSX-JinY0uvLUJw8Tr2zg&usqp=CAU',
        name: 'POP THANOS',
        price: '99,90',
        price2: '8,36',
        price3: '93,50'
      },
      {
        id: 3,
        img: 'data:image/jpeg;base64,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',
        name: 'Thanos Action Figure',
        price: '1.359,00',
        price2: '123,40',
        price3: '1234,00'
      },
      {
        id: 4,
        img: 'data:image/jpeg;base64,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',
        name: 'Thanos Action Figure',
        price: '1.359,00',
        price2: '123,40',
        price3: '1234,00'
      },
      {
        id: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTPdhL8iL4C5Qmf6o3xfWFSFsLsAtX0vsbQ&usqp=CAU',
        name: 'Thanos Action Figure',
        price: '1.359,00',
        price2: '123,40',
        price3: '1234,00'
      },
      {
        id: 6,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7EZdssY0kzs-h5ekef9Bt3l-G0Z_L3hRAw&usqp=CAU',
        name: 'Thanos Action Figure',
        price: '1.359,00',
        price2: '123,40',
        price3: '1234,00'
      },
      {
        id: 7,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-St7cXKUhYmqqOQMj14zRHNu6Lbad4hv1g&usqp=CAU',
        name: 'Thanos Action Figure',
        price: '1.359,00',
        price2: '123,40',
        price3: '1234,00'
      
      },
      {
        id: 8,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-St7cXKUhYmqqOQMj14zRHNu6Lbad4hv1g&usqp=CAU',
        name: 'Thanos Action Figure',
        price: '1.359,00',
        price2: '123,40',
        price3: '1234,00'
      
      },
      {
        id: 9,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-St7cXKUhYmqqOQMj14zRHNu6Lbad4hv1g&usqp=CAU',
        name: 'Thanos Action Figure',
        price: '1.359,00',
        price2: '123,40',
        price3: '1234,00'
      
      }
    ]
    
    for (let prod of produtos) {
      let produto = document.createElement('div')
      produto.setAttribute('class', 'product')
      let item = document.createElement('div')
      item.setAttribute('class', 'item')

      item.innerHTML = `
      <img src="${prod.img}" alt="Soggy Doggy">
      <div class="price">
              <h1>${prod.name}</h1>
              <p>
                <span>R$ ${prod.price}</span>
              </p>
              <small>ou 12x R$ ${prod.price2}</small>
              <small>ou R$ ${prod.price3} no depósito</small>
      </div>
      `
      produto.appendChild(item)
      conteudo.appendChild(produto)
    }