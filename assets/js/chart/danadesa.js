new Chart(document.getElementById("chart-dana-desa"), {
  type: "bar",
  data: {
    labels: ["Pendapatan", "Belanja", "Pembiayaan"],
    datasets: [
      {
        label: "Dana Desa",
        backgroundColor: ["#36b9cc",
          "#1cc88a",
          "#d9232d"
        ],
        data: [10000000, 6000000, 4000000],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Dana Desa 2021",
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  },
});

new Chart(document.getElementById("chart-dana-desa-circle"), {
  type: "doughnut",
  data: {
    labels: ["Pendapatan", "Belanja", "Pembiayaan"],
    datasets: [
      {
        label: "Dana Desa",
        backgroundColor: ["#36b9cc",
          "#1cc88a",
          "#d9232d"
        ],
        data: [10000000, 6000000, 4000000],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Dana Desa 2021",
    }
  },
});
