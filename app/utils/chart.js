const ctx = document.getElementById('myChart').getContext('2d');
const canvasAllData = document.getElementById('allData').getContext('2d');
const canvasCurrentByState = document.getElementById('currentByState').getContext('2d');


let myChart;
let allDataChart;
let currentByStateCanvas;

export const makeChart = (dates, positives, tipo) => {

    if (myChart) {
        myChart.destroy();
    }
    
    myChart = new Chart(ctx, {
        type: tipo,
        data: {
            labels: dates,
            datasets: [{
                label: '# of Cases',
                data: positives,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

export const makeChartAll = (dates, positives, negatives, tipo) => {

    const dsPositivos =  {
        label: "Positives",
        data: positives, 
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1,
    };

    if (allDataChart) {
        allDataChart.destroy();
    }
    
    allDataChart = new Chart(canvasAllData, {
        type: tipo,
        data: {
            labels: dates,
            datasets: [
                {
                label: "Positives",
                data: positives, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)', 
                borderColor: 'rgba(54, 162, 235, 1)', 
                borderWidth: 0.5,                
                },
                {
                    label: "Negatives",
                    data: negatives, 
                    backgroundColor: 'red', 
                    borderColor: 'red', 
                    borderWidth: 0.5                
                },              
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
};



export const makeChartCurrentByState = (deaths, hospitalizes, state, tipo) => {


    if (currentByStateCanvas) {
        currentByStateCanvas.destroy();
    }
    
    currentByStateCanvas = new Chart(canvasCurrentByState, {
        type: tipo,
        data: {
            labels: state,
            datasets: [                
                {
                    label: "Hospitalized",
                    data: hospitalizes, 
                    backgroundColor: 'green', 
                    borderColor: 'green', 
                    borderWidth: 0.5                
                },
                {
                    label: "Deaths",
                    data: deaths, 
                    backgroundColor: 'red', 
                    borderColor: 'red', 
                    borderWidth: 0.5                
                },
                
            ]
        },
        options: {
            indexAxis: 'y',
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
              bar: {
                borderWidth: 2,
              }
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                /*text: 'Seguimiento por estado actual'*/
              }
            }
          },
    });
};