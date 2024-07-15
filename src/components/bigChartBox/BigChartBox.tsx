import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./bigChartBox.scss"

const data = [
    {
      name: "Sun",
      books: 4000,
      clothes: 2400,
      electronics: 2400,
    },
    {
        name: "Mon",
        books: 3000,
        clothes: 2000,
        electronics: 2800,
      },
      
    {
        name: "Tue",
        books: 2800,
        clothes: 2700,
        electronics: 2000,
    },
    {
        name: "Wed",
        books: 4000,
        clothes: 3500,
        electronics: 3000,
      },
{
        name: "Thu",
        books: 5000,
        clothes: 4000,
        electronics: 1000,
    },
{
        name: "Fri",
        books: 4000,
        clothes: 2400,
        electronics: 2400,
    },
{
        name: "Sat",
        books: 4000,
        clothes: 2400,
        electronics: 2400,
     },
]



const BigChartBox = () => {
    return (
        <div className="bigChartBox">
            <h1>Revenue Analytics</h1>
            <div className="chart">

            <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="electronics" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox