import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface ChartComponentProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: any;
      borderColor: string[];
      borderWidth: number;
    }[];
  };
  centerText: string;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  data,
  centerText,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current!.getContext("2d")!;

    // Custom plugin to draw text in the center
    const centerTextPlugin = {
      id: "centerText",
      beforeDraw(chart: any) {
        const { width, height, ctx } = chart;
        ctx.restore();
        const fontSize = (height / 250).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = "middle";

        const textX = Math.round(
          (width - ctx.measureText(centerText).width) / 2.9
        );
        const textY = height / 2;

        ctx.fillStyle = "#4B5563";
        ctx.fillText(centerText, textX, textY);
        ctx.save();
      },
    };

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              generateLabels(chart) {
                const data = chart.data;
                if (data.labels && data.datasets.length) {
                  return data.labels.map((label, index) => {
                    const dataset = data.datasets[0];
                    const value = dataset.data[index];
                    return {
                      text: `${label}: ${value}`,
                      fillStyle: dataset.backgroundColor[index],
                      hidden: !chart.getDataVisibility(index),
                      index,
                      pointStyle: "circle",
                      strokeStyle: "transparent", // Make the border of the circles transparent
                    };
                  });
                }
                return [];
              },
            },
          },
        },
      },
      plugins: [centerTextPlugin],
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, centerText]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
