document.addEventListener('DOMContentLoaded', () => {
  
    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
    const wholeGraphCtx = document.getElementById('wholeGraph').getContext('2d');
    
    // Example data
    const pieData = {
        labels: ['Sector 44', '21-C', 'Ankhir Chowk'],
        datasets: [{
            label: 'Accidents',
            data: [18, 14, 08],
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
        }]
    };
    
    const wholeGraphData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Monthly Casualties',
            data: [5000, 15000, 10000, 20000, 25000],
            borderColor: '#36a2eb',
            fill: false
        }]
    };
    
    new Chart(pieChartCtx, {
        type: 'pie',
        data: pieData
    });
    
    new Chart(wholeGraphCtx, {
        type: 'line',
        data: wholeGraphData
    });

    
    // Data for the monitor wheel chart
    const monitorWheelData = {
        labels: ['Minor', 'Moderate', 'Severe', 'Fatal'],
        datasets: [{
            label: 'Accident Severity',
            data: [300, 50, 100, 25], // Example data, replace with your actual data
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Configuration for the monitor wheel chart
    const monitorWheelConfig = {
        type: 'doughnut',
        data: monitorWheelData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Accident Severity Distribution'
                }
            }
        },
    };

    // Render the monitor wheel chart
    const monitorWheelCtx = document.getElementById('monitorWheel').getContext('2d');
    const monitorWheelChart = new Chart(monitorWheelCtx, monitorWheelConfig);
});