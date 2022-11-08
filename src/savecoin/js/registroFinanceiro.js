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

  const dataGanhos = {
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

  const configGanhos = {
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

  const ChartBarGanhos = new Chart(
    document.getElementsByClassName('ChartBarGanhos'),
    configGanhos
  );


//CHAT BAR GASTOS

const dataGastos = {
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

const configGastos = {
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

const ChartBarGastos = new Chart(
  document.getElementsByClassName('ChartBarGastos'),
  configGastos
);

