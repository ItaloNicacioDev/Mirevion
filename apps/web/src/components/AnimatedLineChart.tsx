import { useEffect, useRef, useState } from "react";

interface LineChartDataPoint {
  label: string;
  value: number;
}

interface AnimatedLineChartProps {
  data: LineChartDataPoint[];
  height?: number;
  width?: number;
  lineColor?: string;
  fillColor?: string;
}

export default function AnimatedLineChart({
  data,
  height = 160,
  width = 320,
  lineColor = "#1f3a5f",
  fillColor = "rgba(31, 58, 95, 0.1)",
}: AnimatedLineChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const getX = (index: number) =>
    padding + (index / (data.length - 1)) * chartWidth;
  const getY = (value: number) =>
    padding + chartHeight - ((value - minValue) / (maxValue - minValue || 1)) * chartHeight;

  // Gerar string do path com animação de traço
  const pathPoints = data
    .map((point, index) => `${getX(index)},${getY(point.value)}`)
    .join(" ");
  const pathLength = data.length * 2; // aproximação simples

  return (
    <div className="w-full h-full">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={lineColor} />
            <stop offset="100%" stopColor={fillColor} />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => {
          const y = padding + (chartHeight / 3) * i;
          return (
            <line
              key={i}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="#e2e8f0"
              strokeWidth={1}
              className="dark:stroke-slate-700"
            />
          );
        })}
        {/* Area fill */}
        <path
          d={`M${padding},${padding + chartHeight} L${pathPoints} L${getX(
            data.length - 1
          )},${padding + chartHeight} Z`}
          fill={fillColor}
          fillOpacity={0.2}
        />
        {/* Line */}
        <path
          d={`M${pathPoints}`}
          fill="none"
          stroke={lineColor}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-slate-300"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: animate ? 0 : pathLength,
            transition: "stroke-dashoffset 1.5s ease-out",
          }}
        />
        {/* Points */}
        {data.map((point, index) => (
          <circle
            key={index}
            cx={getX(index)}
            cy={getY(point.value)}
            r={4}
            fill={lineColor}
            className="dark:fill-slate-300"
            style={{
              opacity: animate ? 1 : 0,
              transition: `opacity 0.5s ease-out ${index * 100}ms`,
            }}
          />
        ))}
        {/* Labels Y */}
        {[0, 1, 2, 3].map((i) => {
          const value = minValue + ((maxValue - minValue) / 3) * i;
          const y = padding + (chartHeight / 3) * i;
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
        {/* Labels X */}
        {data.map((point, index) => {
          const x = getX(index);
          return (
            <text
              key={`x${index}`}
              x={x}
              y={padding + chartHeight + 20}
              fontSize={10}
              fill="#64748b"
              className="dark:text-slate-400"
              textAnchor="middle"
            >
              {point.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
