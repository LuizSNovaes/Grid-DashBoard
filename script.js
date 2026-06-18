document.addEventListener("DOMContentLoaded", () => {

    new Chart(
        document.getElementById("goalChart"),
        {
            type: "doughnut",
            data: {
                datasets: [{
                    data: [84, 16],
                    backgroundColor: ["#D2042D", "#F3EBDD"],
                    borderWidth: 0,
                    borderRadius: 20
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                rotation: -90,
                circumference: 180,
                cutout: "80%",
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            }
        }
    );

    new Chart(
        document.getElementById("growthChart"),
        {
            type: "line",
            data: {
                labels: [
                    "2016",
                    "2017",
                    "2018",
                    "2019",
                    "2020",
                    "2021",
                    "2022",
                    "2023"
                ],
                datasets: [{
                    label: "Growth",
                    data: [8, 10, 35, 55, 8, 15, 60, 100],
                    borderColor: "#D2042D",
                    backgroundColor: "rgba(210, 4, 45, .15)",
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    }
                },

                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    );

});

new Chart(
    document.getElementById("statesChart"),
    {
        type: "bar",
        data: {
            labels: ["NY", "MA", "NH", "OR"],
            datasets: [{
                data: [120, 80, 70, 50],
                backgroundColor: "#c5193b",
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            indexAxis: "y",

            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: false
                }
            },

            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    }
);

const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const text = document.getElementById("theme-text");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "light_mode";
    text.textContent = "Light Mode";
}

toggle.addEventListener("click", (e) => {
    e.preventDefault();

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
        icon.textContent = "light_mode";
        text.textContent = "Light Mode";

        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "bedtime";
        text.textContent = "Dark Mode";

        localStorage.setItem("theme", "light");
    }
});