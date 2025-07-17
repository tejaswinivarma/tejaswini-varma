import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// Company Growth Chart
export const CompanyGrowthChart = () => {
  const data = {
    labels: ["2005", "2008", "2011", "2014", "2017", "2020", "2023"],
    datasets: [
      {
        label: "Projects Delivered",
        data: [12, 35, 68, 120, 180, 280, 400],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
      {
        label: "Team Size",
        data: [8, 20, 35, 50, 70, 85, 100],
        borderColor: "rgb(168, 85, 247)",
        backgroundColor: "rgba(168, 85, 247, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#e5e7eb",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Company Growth Over 20 Years",
        color: "#ffffff",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#9ca3af",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#9ca3af",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="h-80">
      <Line data={data} options={options} />
    </div>
  );
};

// Product Categories Chart
export const ProductCategoriesChart = () => {
  const data = {
    labels: [
      "Missile Systems",
      "Naval Systems",
      "Radar & Sonar",
      "Electronic Warfare",
      "Testing & Simulation",
      "Guidance Systems",
    ],
    datasets: [
      {
        data: [25, 20, 18, 15, 12, 10],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(168, 85, 247, 0.8)",
          "rgba(34, 197, 94, 0.8)",
          "rgba(251, 146, 60, 0.8)",
          "rgba(239, 68, 68, 0.8)",
          "rgba(156, 163, 175, 0.8)",
        ],
        borderColor: [
          "rgb(59, 130, 246)",
          "rgb(168, 85, 247)",
          "rgb(34, 197, 94)",
          "rgb(251, 146, 60)",
          "rgb(239, 68, 68)",
          "rgb(156, 163, 175)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#e5e7eb",
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: "Product Categories Distribution (%)",
        color: "#ffffff",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="h-80">
      <Doughnut data={data} options={options} />
    </div>
  );
};

// Services Breakdown Chart
export const ServicesBreakdownChart = () => {
  const data = {
    labels: [
      "Design & Development",
      "Indigenization",
      "Prototype Manufacturing",
      "Bulk Manufacturing",
      "Onboard Services",
      "RRC / AMC Services",
    ],
    datasets: [
      {
        label: "Service Capacity (%)",
        data: [85, 92, 78, 88, 95, 90],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Service Capabilities",
        color: "#ffffff",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: "#9ca3af",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#9ca3af",
          maxRotation: 45,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="h-80">
      <Bar data={data} options={options} />
    </div>
  );
};

// Technology Expertise Chart
export const TechnologyExpertiseChart = () => {
  const data = {
    labels: [
      "Electronics",
      "Software",
      "Mechanical",
      "Testing",
      "Quality",
      "Research",
    ],
    datasets: [
      {
        label: "Team Expertise",
        data: [95, 88, 75, 92, 96, 85],
        backgroundColor: "rgba(168, 85, 247, 0.8)",
        borderColor: "rgb(168, 85, 247)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Technology Expertise Areas",
        color: "#ffffff",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: "#9ca3af",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#9ca3af",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="h-80">
      <Bar data={data} options={options} />
    </div>
  );
};