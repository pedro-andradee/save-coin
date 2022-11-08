const changeAccordion = (mes) => {
  console.log("OPENED");

  const accordionContainer = document.getElementById(
    `accordionContent__${mes}`
  );

  const accordionIcon = document.getElementById("accordionIcon");

  if (accordionContainer.classList[0] === "displayblock") {
    // SE TIVERMOS MOSTRANDO VAMOS REMOVER A DIV DA VISÃO

    accordionContainer.classList.add("displaynone");
    accordionContainer.classList.remove("displayblock");

    accordionIcon.classList?.remove("bi-caret-up-fill");
    accordionIcon.classList?.add("bi-caret-down-fill");
  } else {
    // SE TIVERMOS NÃO MOSTRANDO VAMOS MOSTRAR A DIV

    accordionContainer.classList.add("displayblock");

    accordionIcon.classList?.add("bi-caret-up-fill");
    accordionIcon.classList?.remove("bi-caret-down-fill");

    accordionContainer.classList?.remove("displaynone");
  }
};


//CHART BAR:
//CHAT BAR GANHOS

  var dataGanhos = {
    labels: ["Salário" , "Ganho 2","Ganho 3","Ganho 4"],
    datasets: [{
      label: 'Ganhos',
      data: [900,400,100,700],
      backgroundColor: [
       '#39ce6b',
      ],
      borderColor: [
       'green',
      ],
      borderWidth: [2
      ]
    }]
  };

  var configGanhos = {
    type: 'bar',
    data: dataGanhos,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  var ChartBarGanhos = new Chart(
    document.getElementsByClassName('ChartBarGanhos'),
    configGanhos
  );

  

//CHAT BAR GASTOS

var dataGastos = {
  labels: ["Brinquedo" , "Gasto 2","Gasto 3","Gasto 4"],
  datasets: [{
    label: 'Gastos',
    data: [900,400,100,700],
    backgroundColor: [
     '#d8454a',
    ],
    borderColor: [
     'red',
    ],
    borderWidth: [2
    ]
  }]
};

var configGastos = {
  type: 'bar',
  data: dataGastos,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

var ChartBarGastos = new Chart(
  document.getElementsByClassName('ChartBarGastos'),
  configGastos
);


//grafico linha 2

var dataGanhos2 = {
  labels: ["Salário" , "Ganho 2","Ganho 3","Ganho 4"],
  datasets: [{
    label: 'Ganhos',
    data: [400,400,300,100],
    backgroundColor: [
     '#39ce6b',
    ],
    borderColor: [
     'green',
    ],
    borderWidth: [2
    ]
  }]
};

var configGanhos2 = {
  type: 'bar',
  data: dataGanhos2,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

var ChartBarGanhos2 = new Chart(
  document.getElementsByClassName('ChartBarGanhos2'),
  configGanhos2
);



//CHAT BAR GASTOS

var dataGastos2 = {
labels: ["Brinquedo" , "Gasto 2","Gasto 3","Gasto 4"],
datasets: [{
  label: 'Gastos2',
  data: [100,200,300,400],
  backgroundColor: [
   '#d8454a',
  ],
  borderColor: [
   'red',
  ],
  borderWidth: [2
  ]
}]
};

var configGastos2 = {
type: 'bar',
data: dataGastos2,
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
},
};

var ChartBarGastos2 = new Chart(
document.getElementsByClassName('ChartBarGastos2'),
configGastos2
);

