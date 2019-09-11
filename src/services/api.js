export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 2,
            content: 'Tomar uns latão com os amigos',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 3,
            content: 'Estudar mais um pouco',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 4,
            content: 'Fazer uma hora de caminhada',
            labels: ['#54e1f7'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 5,
            content: 'Programar um portifólio',
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
            content: 'Recriando clone de um organizador de tarefas famoso',
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
            id: 7,
            content: 'Estudar para concursos',
            labels: ['#7159c1'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 8,
            content: 'Sair em festas',
            labels: ['#54e1f7'],
            user: 'https://i.ibb.co/GJZ4t77/6974630.jpg'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
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
            id: 10,
            content: 'Testar como enviar projeto ReactJS para heroku',
            labels: [],
          },
          {
            id: 12,
            content: 'Baixar curso de Node.js',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Aprender como usar o Git ',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }
  