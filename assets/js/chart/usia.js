new Chart(document.getElementById("chart-usia"), {
  type: "bar",
  data: {
    labels: [
      "< 10 Tahun",
      "11 - 20 Tahun",
      "21 - 30 Tahun",
      "31 - 40 Tahun",
      "41 - 50 Tahun",
      "> 50 Tahun",
    ],
    datasets: [
      {
        label: "",
        backgroundColor: [
          "#36b9cc",
          "#1cc88a",
          "#6f42c1",
          "#e74a3b",
          "#fd7e14",
          "#f6c23e",
        ],
        data: [10, 20, 30, 40, 50, 60],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Usia 2021",
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

