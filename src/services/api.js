export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Conteúdo 01 ',
            description:'Descrição lorem ipsum, ok !',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 2,
            content: 'Conteúdo 02',
            description:'React é menos verboso que angular.',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 3,
            content: 'Conteúdo 03',
            description:'Adicionar descrição...',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 4,
            content: 'Conteúdo 04',
            labels: ['#54e1f7'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 5,
            content: 'Conteúdo 05',
            labels: ['#54e1f7'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Conteúdo 06',
            description:"$git status $git add . $git commit -m  $ $git push",
            labels: ["green"],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 7,
            content: 'Conteúdo 07',
            labels: ["green"],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 8,
            content: 'Conteúdo 08 ',
            description:'Descrição lorem ipsum, ok !',
            labels: ['red'],
            user: 'https://i.ibb.co/42t6bzQ/IMG-20180126-193907.jpg'
          },
          {
            id: 9,
            content: 'Conteúdo 09',
            description:'Descrição lorem ipsum, ok !',
            labels: ['red'],
            user: 'https://i.ibb.co/42t6bzQ/IMG-20180126-193907.jpg'
          },
          {
            id: 10,
            content: 'Conteúdo 10',
            description:'Descrição lorem ipsum, ok !',
            labels: ['red'],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 11,
            content: 'Testar como enviar projeto ReactJS para heroku',
            labels: [],
          },
          {
            id: 12,
            content: 'Conteúdo 11',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Conteúdo 13 ',
            description:'Auto deploy feito com sucesso',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }
  