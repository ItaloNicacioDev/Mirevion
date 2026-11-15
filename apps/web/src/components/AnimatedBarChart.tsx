import { useEffect, useState } from "react";

interface BarChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

interface AnimatedBarChartProps {
  data: BarChartDataPoint[];
  height?: number;
  width?: number;
  barColor?: string;
}

export default function AnimatedBarChart({
  data,
  height = 160,
  width = 320,
  barColor = "#1f3a5f",
}: AnimatedBarChartProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map((d) => d.value));
  const padding = 50;
  const chartWidth = width - padding;
  const chartHeight = height - 40;
  const barWidth = chartWidth / data.length * 0.6;
  const gap = (chartWidth / data.length - barWidth) / 2;

  return (
    <div className="w-full h-full">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
      >
        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => {
          const y = (chartHeight / 3) * i;
          return (
            <line
              key={i}
              x1={padding}
              y1={y}
              x2={width}
              y2={y}
              stroke="#e2e8f0"
              strokeWidth={1}
              className="dark:stroke-slate-700"
            />
          );
        })}
        {/* Bars */}
        {data.map((bar, index) => {
          const barHeight = (bar.value / maxValue) * chartHeight;
          const x = padding + index * (chartWidth / data.length) + gap;
          const y = chartHeight - barHeight;
          const barColorValue = bar.color || barColor;

          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={barColorValue}
                className="dark:fill-slate-400"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "bottom",
                  transition: `all 0.6s ease-out ${index * 80}ms`,
                }}
              />
              <text
                x={x + barWidth / 2}
                y={chartHeight + 18}
                fontSize={10}
                fill="#64748b"
                className="dark:text-slate-400"
                textAnchor="middle"
              >
                {bar.label}
              </text>
            </g>
          );
        })}
        {/* Labels Y */}
        {[0, 1, 2, 3].map((i) => {
          const value = (maxValue / 3) * i;
          const y = (chartHeight / 3) * i;
          return (
            <text
              key={i}
              x={padding - 10}
              y={y + 4}
              fontSize={10}
              fill="#64748b"
              className="dark:text-slate-400"
              textAnchor="end"
            >
              {value.toFixed(0)}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
