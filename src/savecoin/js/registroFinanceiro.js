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
