document.addEventListener("DOMContentLoaded", () => {

    new Chart(
        document.getElementById("goalChart"),
        {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [84, 16],
                    backgroundColor: [
                        "#D2042D", // amarelo
                        "#F3EBDD"  // fundo
                    ],
                    borderWidth: 0,
                    borderRadius: 20
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,

                rotation: -90, // começa na esquerda
                circumference: 180, // meia lua

                cutout: "80%",

                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        }
    );

});