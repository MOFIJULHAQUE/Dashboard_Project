import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Jan",
    BTC: 4000,
    ETH: 2400,
  },
  {
    name: "Feb",
    ETH: 3000,
    BTC: 1398,
  },
  {
    name: "Mar",
    ETH: 2000,
    BTC: 9800,
  },
  {
    name: "Apr",
    ETH: 2780,
    BTC: 3708,
  },
  {
    name: "May",
    ETH: 1890,
    BTC: 6000,
  },
  {
    name: "June",
    ETH: 2390,
    BTC: 3800,
  },
  {
    name: "July",
    ETH: 5590,
    BTC: 4300,
  },
];
// it is not constant data

const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export function MainChart() {
  return (
    <div className="main_chart_container">
      <LineChart
        width={750}
        height={330}
        data={data}
        margin={{
          top: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ETH" stroke="#8884d8">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="BTC" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
