var lineOptions = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "pressão",
      data: [20, 22, 18, 19, 20, 22, 22, 21, 20],
    },
  ],
  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
};
var radialBar = {
  series: [2.16],
  chart: {
    height: 300,
    type: "radialBar",
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: "#fff",
        strokeWidth: "80%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "17px",
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: "#111",
          fontSize: "36px",
          show: true,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ABE5A1"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Bar"],
};

var radialMCA = {
  series: [22],
  chart: {
    height: 300,
    type: "radialBar",
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: "#fff",
        strokeWidth: "80%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "17px",
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: "#111",
          fontSize: "36px",
          show: true,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ABE5A1"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["MCA"],
};

var line = new ApexCharts(document.querySelector("#line"), lineOptions);
var radialMCA = new ApexCharts(document.querySelector("#radialMCA"), radialMCA);
var radialBar = new ApexCharts(document.querySelector("#radialBar"), radialBar);

radialMCA.render();
radialBar.render();
line.render();
