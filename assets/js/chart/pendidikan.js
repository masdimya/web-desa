new Chart(document.getElementById("chart-pendidikan"), {
  type: "doughnut",
  data: {
    labels: ["Tidak Sekolah", "SD", "SMP", "SMA/SMK", "Diploma", "Sarjana"],
    datasets: [
      {
        label: "Pendidikan",
        backgroundColor: [
          "#36b9cc",
          "#1cc88a",
          "#6f42c1",
          "#e74a3b",
          "#fd7e14",
          "#f6c23e"
        ],
        data: [10, 20, 30, 40, 50, 60],
      },
    ],
  },
  options: {
    title: {
      display: false
    },
  },
});
