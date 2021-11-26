new Chart(document.getElementById("chart-pekerjaan"), {
  type: "doughnut",
  data: {
    labels: [
      "Tidak Bekerja",
      "Pelajar / Mahasiswa",
      "PNS",
      "TNI",
      "Petani"
    ],
    datasets: [
      {
        label: "Pendidikan",
        backgroundColor: [
          "#36b9cc",
          "#1cc88a",
          "#6f42c1",
          "#e74a3b",
          "#fd7e14",
        ],
        data: [10, 20, 30, 40, 50],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Pendidikan 2021",
    },
  },
});
