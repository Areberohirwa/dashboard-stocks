const ctx1 = document.getElementById('chart1').getContext('2d');
const ctx2 = document.getElementById('chart2').getContext('2d');
const ctx3 = document.getElementById('chart3').getContext('2d');
const ctx4 = document.getElementById('chart4').getContext('2d');

const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Points',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Rebounds',
        data: [5, 10, 8, 15, 6, 8, 12],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const data3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Assists',
        data: [7, 11, 5, 8, 12, 9, 15],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const data4 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Steals',
        data: [3, 2, 1, 5, 4, 6, 7],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

const chart1 = new Chart(ctx1, {
    type: 'bar',
    data: data1,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const chart2 = new Chart(ctx2, {
    type: 'line',
    data: data2,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const chart3 = new Chart(ctx3, {
    type: 'radar',
    data: data3,
    options: {
        scales: {
            r: {
                beginAtZero: true
            }
        }
    }
});

const chart4 = new Chart(ctx4, {
    type: 'pie',
    data: data4,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
