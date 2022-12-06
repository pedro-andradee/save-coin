let fontesDespesa = 0;
let fontesLucro = 0;
let totalDespesa = 0;
let totalLucro = 0;
let total = 0;
let registrosAlocados = {};
let mainObject = {};


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

    mainObject = getUserData

    
    if(!mainObject){
        mainObject = {}
    }else{
        const todosRegistros = [];

        for (const [key, value] of Object.entries(mainObject)) {
            todosRegistros.push(...value.registros)
        }

        for(let i=0; i<todosRegistros.length; i++){
            const {valor ,desc, id : elementID, tipo, mes} = todosRegistros[i];

            // adicionar os ganhos na lista
            // adicionar as despesas na lista
            let divMes = document.getElementById(`${mes}${tipo}`);
            if(!divMes){
                divMes = document.createElement("div");
                divMes.setAttribute("id", `${mes}${tipo}`)

                divMesDesc = document.createElement("h3");
                divMesDesc.setAttribute("id", `${mes}${tipo}desc`)
                divMesDesc.innerHTML = mes

                divMes.append(divMesDesc)
            }
            const divSalario = document.createElement("div");
            const salarioP = document.createElement("p");
            salarioP.innerHTML = desc ;
            divSalario.append(salarioP);

            const divValor = document.createElement("div");
            divValor.classList.add("salariosecaovalores")
            const valorP = document.createElement("p");
            valorP.innerHTML = `${valor} R$`;
            divValor.append(valorP);

            const deleteButton = document.createElement("i");
            deleteButton.classList.add("fa-solid","fa-trash","redicon")
            deleteButton.addEventListener("click",() => { removeElement(`${elementID}${tipo}`,tipo,valor,mes)})
            divValor.append(deleteButton)

            const mainContainer = document.createElement("div")
            mainContainer.classList.add("salariosecao");
            mainContainer.append(divSalario,divValor)
            mainContainer.setAttribute("id", `${elementID}${tipo}`)

            divMes.append(mainContainer)
            const containerGanhos  = document.getElementById(`Container${tipo}`)
            containerGanhos.append(divMes)

            if(tipo === "Lucro"){
                fontesLucro++;
                totalLucro+=Number(valor);
                total+=Number(valor);
            }else{
                fontesDespesa++;
                totalDespesa+=Number(valor);
                total-=Number(valor);
            }
        }

        const fonteDespesaHtml = document.getElementById(`fonteDespesa`);
        fonteDespesaHtml.innerHTML = fontesDespesa

        const fonteLucroHtml = document.getElementById(`fonteLucro`);
        fonteLucroHtml.innerHTML = fontesLucro

        const resumoLucroHtml = document.getElementById(`resumoLucro`);
        resumoLucroHtml.innerHTML = totalLucro  + " R$"

        const resumoDespesaHtml = document.getElementById(`resumoDespesa`);
        resumoDespesaHtml.innerHTML = totalDespesa + " R$"

        const resumoTotal = document.getElementById(`resumoTotal`);
        resumoTotal.innerHTML = total + " R$"
    }
  }
  


// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    const d = new Date().getTime();//Timestamp
    const d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

const removeElement = (idToRemove, lucroOuDespesa, valor, mes) => {
    const findElement = document.getElementById(idToRemove)
    findElement.remove()

    if(lucroOuDespesa === "Lucro"){
        fontesLucro--;
        totalLucro -= Number(valor);
    }else{
        fontesDespesa--;
        totalDespesa -=Number(valor);
    }

    let objectRemoved = {...mainObject}

    const lucroOuDespesas = 0;
    

    for(let i=0; i< mainObject?.[mes]?.registros?.length;i++){
        if(`${mainObject[mes].registros[i].id}${lucroOuDespesa}` == idToRemove){
            objectRemoved[mes].registros.splice(i, 1)
        } else if(mainObject[mes].registros[i].tipo === lucroOuDespesa){
            lucroOuDespesas++;
        }
    }

    const removerMesDesc = document.getElementById(`${mes}${lucroOuDespesa}`)

    if(lucroOuDespesas === 0){
        removerMesDesc.remove()
    }

    if(objectRemoved[mes].registros.length === 0){
        removerMesDesc.remove()
        delete objectRemoved[mes]
    }

    mainObject = {...objectRemoved}

    
    const fonteLucro = document.getElementById(`fonte${lucroOuDespesa}`);
    fonteLucro.innerHTML = lucroOuDespesa === "Lucro" ? fontesLucro : fontesDespesa 

    const fonteComValores = document.getElementById(`resumo${lucroOuDespesa}`);
    fonteComValores.innerHTML = lucroOuDespesa === "Lucro" ? totalLucro : totalDespesa 

    fonteComValores.innerHTML +=" R$"

    const resumoTotal = document.getElementById("resumoTotal");
    const saldoTotal = totalLucro - totalDespesa
    resumoTotal.innerHTML = saldoTotal + " R$" 
}

const adicionarLucro = (event, lucroOuDespesa) => {
   // PEGAR DESC   
   const desc = document.getElementById(`desc${lucroOuDespesa}`).value
   // PEGAR VALOR
   const valor = document.getElementById(`valor${lucroOuDespesa}`).value

   if(desc == "" || valor === "")
   return

    if(lucroOuDespesa === "Lucro"){
        fontesLucro++;
        totalLucro += Number(valor);
    }else{
        fontesDespesa++;
        totalDespesa +=Number(valor);
    }

    event.preventDefault()
    const e = document.getElementById(`mes${lucroOuDespesa}`);
    // CRIAR UM ID UNICO PRA CADA ELEMENTO
    const elementID = generateUUID();
    // PEGAR MES
    const text = e.options[e.selectedIndex].text;

    const divSalario = document.createElement("div");
    const salarioP = document.createElement("p");
    salarioP.innerHTML = desc;
    divSalario.append(salarioP);

    const divValor = document.createElement("div");
    divValor.classList.add("salariosecaovalores")
    const valorP = document.createElement("p");
    valorP.innerHTML = `${valor} R$`;
    divValor.append(valorP);

    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-solid","fa-trash","redicon")

    deleteButton.addEventListener("click",() => { removeElement(`${elementID}${lucroOuDespesa}`,lucroOuDespesa,valor,text)})
    divValor.append(deleteButton)

    const mainContainer = document.createElement("div")
    mainContainer.classList.add("salariosecao");

    mainContainer.append(divSalario,divValor)
    mainContainer.setAttribute("id", `${elementID}${lucroOuDespesa}`)


    let divMes = document.getElementById(`${text}${lucroOuDespesa}`);
    if(!divMes){
        divMes = document.createElement("div");
        divMes.setAttribute("id", `${text}${lucroOuDespesa}`)

        divMesDesc = document.createElement("h3");
        divMesDesc.setAttribute("id", `${text}${lucroOuDespesa}desc`)
        divMesDesc.innerHTML = text

        divMes.append(divMesDesc)
    }

    divMes.append(mainContainer)

    const containerGanhos  = document.getElementById(`Container${lucroOuDespesa}`)
    containerGanhos.append(divMes)

    // Add fontes de renda e gasto

    const fonteLucro = document.getElementById(`fonte${lucroOuDespesa}`);
    fonteLucro.innerHTML = lucroOuDespesa === "Lucro" ? fontesLucro : fontesDespesa 

    const fonteComValores = document.getElementById(`resumo${lucroOuDespesa}`);
    fonteComValores.innerHTML = lucroOuDespesa === "Lucro" ? totalLucro + " R$"  : totalDespesa + " R$" 

    const resumoTotal = document.getElementById("resumoTotal");
    const saldoTotal = totalLucro - totalDespesa
    resumoTotal.innerHTML = saldoTotal + " R$" 


    const objectToStore = {desc: desc, valor: valor, tipo: lucroOuDespesa, id: elementID, mes: text}

    if(mainObject?.[text]){
      mainObject[text].saldoTotal = saldoTotal
      mainObject[text].registros.push(objectToStore)
    }else{
      mainObject[`${text}`] ={}
      mainObject[text].saldoTotal = saldoTotal
      mainObject[text].registros = [{...objectToStore}]
    }

}

const efetuarRegistro = () => {
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrenteJSON = JSON.parse(usuarioCorrenteJSON);
    }
    const usuariosJSON = JSON.parse(localStorage.getItem('BancoUsuarios'));

    let objToReplace = {...usuariosJSON}
    console.log("MAINOBJECT", mainObject)

    for(let i=0; i < usuariosJSON.usuarios.length; i++){
        if(usuarioCorrenteJSON.id == usuariosJSON.usuarios[i].id){
            const newObj = {...usuarioCorrente, registros:{ ...mainObject}}
            objToReplace.usuarios[i] = newObj
        }
    }
    localStorage.setItem('BancoUsuarios', JSON.stringify(objToReplace));

    window.location.href = 'registroFinanceiro.html' 
}

   // CHART LINE 12 MESES

   var ctx = document.getElementsByClassName("ChartLine12M")

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
       {
         label: 'Receita mensal',
         data: [300, 200, 150, 0, 250, -100, 150, 200, 600, 0, -50, 400],
         borderWidth: 4,
         borderColor: 'rgb(65,105,225)',
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
