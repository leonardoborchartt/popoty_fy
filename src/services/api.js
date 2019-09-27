export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Conteúdo 01 ',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 2,
            content: 'Conteúdo 02',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 3,
            content: 'Conteúdo 03',
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
            labels: [],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 7,
            content: 'Conteúdo 07',
            labels: [],
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
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/42t6bzQ/IMG-20180126-193907.jpg'
          },
          {
            id: 9,
            content: 'Conteúdo 09',
            labels: ['#54e1f7'],
            user: 'https://i.ibb.co/42t6bzQ/IMG-20180126-193907.jpg'
          },
          {
            id: 10,
            content: 'Conteúdo 10',
            labels: [],
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
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }
  