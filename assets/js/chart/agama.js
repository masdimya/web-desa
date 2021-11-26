new Chart(document.getElementById("chart-agama"), {
  type: "doughnut",
  data: {
    labels: ["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Khonghucu"],
    datasets: [
      {
        label: "Agama",
        backgroundColor: [
          "#36b9cc",
          "#1cc88a",
          "#6f42c1",
          "#e74a3b",
          "#fd7e14",
          "#f6c23e"
        ],
        data: [60, 50, 40, 30, 20, 10],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Agama 2021",
    },
  },
});
