const goToRoute = (link) => {
  window.location.href = link;
};

const reset = () => {
  const tajertas = [
    {
      numero: "0909224849",
      pin: "2022",
      quetzales: "10000",
      dolares: "2000",
    },
  ];
  localStorage.setItem("tarjetas", JSON.stringify(tajertas));
  alert("Reiniciado tarjetas");
};
