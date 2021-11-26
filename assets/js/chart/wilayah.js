new Chart(document.getElementById("chart-wilayah"), {
  type: "bar",
  data: {
    labels: ["Dusun A", "Dusun B", "Dusun C"],
    datasets: [
      {
        label: "Jiwa",
        backgroundColor: "#36b9cc",
        data: [5000, 6000, 7000],
      },
      {
        label: "Laki-Laki",
        backgroundColor: "#1cc88a",
        data: [500, 600, 700],
      },
      {
        label: "Perempuan",
        backgroundColor: "#fd7e14",
        data: [700, 600, 500],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Wilayah 2021",
    },
  },
});
