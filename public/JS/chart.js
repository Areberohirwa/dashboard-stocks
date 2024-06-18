// import { fetch } from "undici-types";

const chart1 = document.querySelector(".chart1");
const chart2 = document.querySelector(".chart2");
const chart3 = document.querySelector(".chart3");
const chart4 = document.querySelector(".chart4");
const chart5 = document.querySelector(".chart5");

const backgroundColours = [
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "orange",
  "pink",
  "bisque",
  "burlywood",
  "aliceblue",
  "cyan",
  "darkgrey",
  "deeppink",
  "firebrick",
  "goldenrod",
  "indigo",
  "lavender",
  "navy",
  "springgreen",
];

const chart1Url = "http://localhost:8000/forex";
const chart2Url = "http://localhost:8000/stocks";
const chart3Url = "http://localhost:8000/crypto";
const chart4Url = "http://localhost:8000/commodity";
function fetchWithDelay(url, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }, delay);
  });
}

const delay = 1000; // 1-second delay

fetchWithDelay(chart4Url, 0)
  .then((byteData) => {
    const comData = byteData;
    const comLabels = [];
    const comSets = [];
    for (let t = 0; t < comData[0].data.length; t++) {
      const comDat = comData[2].data[t];
      comLabels.push(comDat.date);
    }

    for (let teller = 0; teller < comData.length; teller++) {
      const comDat = comData[teller];
      const come = [];
      for (let x = 0; x < comDat.data.length; x++) {
        const com = comDat.data[x];
        come.push(com.price);
      }

      comSets.push({
        backgroundColor: backgroundColours[teller],
        label: comDat.commodity,
        data: come,
        borderWidth: 3,
        borderColor: backgroundColours[teller],
      });
    }

    createChart3(chart3, comLabels, comSets);
    return fetchWithDelay(chart3Url, delay);
  })
  .then((bytesData) => {
    const cryptoData = bytesData;
    const cryptoLabels = [];
    const cryptoSets = [];
    for (let t = 0; t < cryptoData[0].data.length; t++) {
      const cryptoDat = cryptoData[2].data[t];
      cryptoLabels.push(cryptoDat.date);
    }
    for (let count = 0; count < cryptoData.length; count++) {
      const cryptoDat = cryptoData[count];
      const cryptoe = [];
      for (let x = 0; x < cryptoDat.data.length; x++) {
        const crypto = cryptoDat.data[x];
        cryptoe.push(crypto.price);
      }

      cryptoSets.push({
        backgroundColor: backgroundColours[count],
        label: cryptoDat.crypto,
        data: cryptoe,
        borderWidth: 3,
        borderColor: backgroundColours[count],
      });
    }

    createChart2(chart4, cryptoLabels, cryptoSets);
    return fetchWithDelay(chart2Url, delay);
  })
  .then((forexData) => {
    const forexLabels = [];
    const forexSets = [];
    for (let c = 0; c < forexData[0].data.length; c++) {
      const forexDat = forexData[0].data[c];
      forexLabels.push(forexDat.date);
    }

    for (let counter = 0; counter < forexData.length; counter++) {
      const forexDat = forexData[counter];
      const forexe = [];
      for (let x = 0; x < forexDat.data.length; x++) {
        const forex = forexDat.data[x];
        forexe.push(forex.price);
      }

      forexSets.push({
        backgroundColor: backgroundColours[counter],
        label: forexDat.stock,
        data: forexe,
        borderWidth: 3,
        borderColor: backgroundColours[counter],
      });
    }

    createChart1(chart2, forexLabels, forexSets);
    return fetchWithDelay(chart1Url, delay);
  })
  .then((stockData) => {
    const labels = [];
    const dataSets = [];
    for (let i = 0; i < stockData[0].data.length; i++) {
      const stockDat = stockData[0].data[i];
      labels.push(stockDat.date);
    }
    for (let index = 0; index < stockData.length; index++) {
      const stockDat = stockData[index];
      const data = [];
      for (let j = 0; j < stockDat.data.length; j++) {
        const dat = stockDat.data[j];
        data.push(dat.rate);
      }

      dataSets.push({
        backgroundColor: backgroundColours[index],
        label: stockDat.pair,
        data: data,
        borderWidth: 3,
        borderColor: backgroundColours[index],
      });
    }
    createChart2(chart1, labels, dataSets);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });


function createChart1(canvasElement, labels, dataSets) {
  new Chart(canvasElement, {
    type: "bar",
    data: {
      labels: labels,
      datasets: dataSets,
    },
    options: {
      borderRadius: 9,
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        line: {
          borderWidth: 9,
          fill: false,
          tension: 0.3,
        },
      },
    },
  });
}

function createChart3(canvasElement, labels, dataSets) {
  new Chart(canvasElement, {
    type: "line",
    data: {
      labels: labels,
      datasets: dataSets,
    },
    options: {
      borderRadius: 9,
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        line: {
          borderWidth: 9,
          fill: false,
          tension: 0.3,
        },
      },
    },
  });
}

function createChart2(canvasElement, labels, dataSets) {
  new Chart(canvasElement, {
    type: "bar",
    data: {
      labels: labels,
      datasets: dataSets,
    },
    options: {
      borderRadius: 9,
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        line: {
          borderWidth: 9,
          fill: false,
          tension: 0.3,
        },
      },
    },
  });
}
