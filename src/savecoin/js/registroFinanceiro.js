const fetchPreviousData = () =>{
  usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
  if (usuarioCorrenteJSON) {
      usuarioCorrenteJSON = JSON.parse(usuarioCorrenteJSON);
  }
  const usuariosJSON = JSON.parse(localStorage.getItem('BancoUsuarios'));

  let getUserData; 

  for(let i=0; i < usuariosJSON.usuarios.length; i++){
      if(usuarioCorrenteJSON.id == usuariosJSON.usuarios[i].id)
      getUserData = usuariosJSON.usuarios[i].registros;
  }

  const mainObject = getUserData

  for (const [key, value] of Object.entries(mainObject)) {
    const accordionDivButton = document.createElement("div");
    accordionDivButton.addEventListener("click",() => { changeAccordion(`${key}`)})

    const accordionDivContainer = document.createElement("div");

    const monthName = document.createElement("h2");
    monthName.innerHTML = `${key}`
    const monthValue = document.createElement("h3");
    monthValue.classList.add("greenicon");
    monthValue.innerHTML = `${key}`

    const iconAccordion = document.createElement("i");
    iconAccordion.classList.add("bi","bi-caret-down-fill")
    iconAccordion.setAttribute("id", `accordionIcon__${key}`)

    accordionDivButton.setAttribute("id","accordion")

    const registroMainContainer = document.getElementById("register")

    const accordionContent = document.createElement("div");
    accordionContent.classList.add("displaynone")
    accordionContent.setAttribute("id", `accordionContent__${key}`)

    const accordionContentHeader = document.createElement("header");
    accordionContentHeader.classList.add("accordionContentItemsHeader")

    const headerDesc = document.createElement("h3");
    headerDesc.innerHTML = "Descrição"

    const innerAccordionContentHeader = document.createElement("div");
    innerAccordionContentHeader.classList.add("accordionContainer");

    const spanValor = document.createElement("span")
    const spanTipo = document.createElement("span")
    const spanEditar = document.createElement("span")
    const spanDeletar = document.createElement("span")
    spanValor.innerHTML = "Valor"
    spanTipo.innerHTML = "Tipo"
    spanEditar.innerHTML = "Editar"
    spanDeletar.innerHTML = "Deletar"

    const accordionItems = document.createElement("div");
    accordionItems.classList.add("accordionContentItems")
    accordionItems.classList.add("m-2")

    let lucroMensal = 0;
    for(let x=0; x< value.registros.length; x++ ){ 
      const maindiv = document.createElement("div");
      maindiv.classList.add("accordionContentItemsHeader")
      maindiv.classList.add("m-0")
      maindiv.classList.add("p-0")

      const DescriptionName = document.createElement("h3");
      DescriptionName.innerHTML = value.registros[x].desc

      const accordionSubContainer = document.createElement("div");
      accordionSubContainer.classList.add("accordionContainer")

      const spanValue = document.createElement("span");
      spanValue.innerHTML = value.registros[x].valor;

      const iconType = document.createElement("i");

      if(value.registros[x].tipo === "Lucro"){
        iconType.classList.add("fa-solid","fa-square-plus","fa-xl","greenicon")
        lucroMensal+=Number(value.registros[x].valor)
      }else{
        iconType.classList.add("fa-solid","fa-square-minus","fa-xl","redicon")
        lucroMensal-=Number(value.registros[x].valor)
      }

      const editButton = document.createElement("a");
      const editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid","fa-pen-to-square","fa-xl","greenicon") 
      editButton.href = '../savecoin/AddRegistroFinanceiro.html' 
      editButton.append(editIcon)

      const deleteButton = document.createElement("a");
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid","fa-trash","fa-xl","redicon")
      deleteButton.href = '../savecoin/AddRegistroFinanceiro.html' 
      deleteButton.append(deleteIcon)

      accordionSubContainer.append(spanValue, iconType, editButton, deleteButton)

      maindiv.append(DescriptionName, accordionSubContainer)

      accordionItems.append(maindiv)
    }

    monthValue.innerHTML = `${lucroMensal} R$`

    accordionDivContainer.append(monthName,monthValue)

    accordionDivButton.append(accordionDivContainer, iconAccordion);

    registroMainContainer.append(accordionDivButton)

    innerAccordionContentHeader.append(spanValor,spanTipo,spanEditar,spanDeletar)
    accordionContentHeader.append(headerDesc,innerAccordionContentHeader)
    accordionContent.append(accordionContentHeader)
    accordionContent.append(accordionItems)
    registroMainContainer.append(accordionContent)
  } 
}


const changeAccordion = (mes) => {
  const accordionContainer = document.getElementById(
    `accordionContent__${mes}`
  );

  const accordionIcon = document.getElementById( `accordionIcon__${mes}`);

  if (accordionContainer?.classList[0] === "displayblock") {
    // SE TIVERMOS MOSTRANDO VAMOS REMOVER A DIV DA VISÃO
    accordionContainer.classList.add("displaynone");
    accordionContainer.classList.remove("displayblock");

    accordionIcon.classList?.remove("bi-caret-up-fill");
    accordionIcon.classList?.add("bi-caret-down-fill");
  } else {
    // SE TIVERMOS NÃO MOSTRANDO VAMOS MOSTRAR A DIV
    accordionContainer?.classList.add("displayblock");

    accordionIcon?.classList?.add("bi-caret-up-fill");
    accordionIcon?.classList?.remove("bi-caret-down-fill");

    accordionContainer?.classList?.remove("displaynone");
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

   // CHART LINE ANUAL GASTOS

          var ctx = document.getElementsByClassName("ChartLineAnual")

          var chartGraph = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
              datasets: [{
                label: 'Gasto mensal',
                data: [100, 300, 450, 400, 50, 200, 300, 250, 200, 100, 200, 300],
                borderWidth: 4,
                borderColor: 'rgb(139,0,0)',
                backgroundColor: 'transparent',
              },
              {
                label: 'Ganho mensal',
                data: [400, 500, 600, 400, 300, 100, 550, 400, 800, 100, 150, 700],
                borderWidth: 4,
                borderColor: 'rgb(34,139,34)',
                backgroundColor: 'transparent',
              },
             
               ]
            },
            options: {
              title: {
                display: true,
                fontSize: 30,
                text: 'GRÁFICO ANUAL',
              }
            }
          });


/*
<div class="graficos-giovanny">
            <div class="DivChartBarGanhos">
              <canvas class="ChartBarGanhos"></canvas>
            </div>

            <div class="DivChartBarGastos">
              <canvas class="ChartBarGastos"></canvas>
            </div>
          </div>
           */