new Chart(document.getElementById("chart-status"), {
  type: "doughnut",
  data: {
    labels: ["Belum Menikah", "Menikah", "Bercerai"],
    datasets: [
      {
        label: "Status",
        backgroundColor: ["#6f42c1", "#e74a3b", "#fd7e14"],
        data: [60, 50, 40],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Status 2021",
    },
  },
});
