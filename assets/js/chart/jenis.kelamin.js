new Chart(document.getElementById("chart-jenis-kelamin"), {
  type: "doughnut",
  data: {
    labels: ["Laki Laki", "Perempuan"],
    datasets: [
      {
        label: "Jenis Kelamin",
        backgroundColor: ["#36b9cc", "#1cc88a"],
        data: [1000, 2000],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Jenis Kelamin 2021",
    },
  },
});
