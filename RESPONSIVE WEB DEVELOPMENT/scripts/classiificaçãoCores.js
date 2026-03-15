const cores = [
  {
    id: "1",
    classe: "Cores Primárias",
    cores: [
      { id: "1", name: "Vermelho", hex: "#FF0000" },
      { id: "2", name: "Azul", hex: "#0000FF" },
      { id: "3", name: "Amarelo", hex: "#FFFF00" },
    ],
  },
  {
    id: "2",
    classe: "Cores Secundárias",
    cores: [
      { id: "5", name: "Verde", hex: "#00FF00" },
      { id: "4", name: "Laranja", hex: "#F8C000" },
      { id: "6", name: "Roxo", hex: "#800080" },
    ],
  },
  {
    id: "3",
    classe: "Cores Terciárias",
    cores: [
      { id: "7", name: "Laranja", hex: "#F8C000" },
      { id: "8", name: "Oliva", hex: "#808000" },
      { id: "9", name: "Turquesa", hex: "#00FFFF" },
      { id: "10", name: "Celeste", hex: "#0F0F0F" },
      { id: "11", name: "Violeta", hex: "#800080" },
      { id: "12", name: "Rosa", hex: "#FFC0CB" },
    ],
  },
];

const listarCores = (cores) => {
  const listaPrincipal = document.createElement("ul");

  cores.forEach((grupo) => {
    const itemPrincipal = document.createElement("li");

    const titulo = document.createElement("h3");
    titulo.textContent = grupo.classe;

    const subLista = document.createElement("ol");

    grupo.cores.forEach((cor) => {
      const itemCor = document.createElement("li");
      itemCor.textContent = cor.name;
      // itemCor.style.color = cor.hex;

      subLista.appendChild(itemCor);
    });

    itemPrincipal.appendChild(titulo);
    itemPrincipal.appendChild(subLista);

    listaPrincipal.appendChild(itemPrincipal);
  });

  document.getElementById("lista-cores").appendChild(listaPrincipal);
};

listarCores(cores);
