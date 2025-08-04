import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const automationData = [
  { name: "Lead Nurturing", value: 45, color: "hsl(248 100% 68%)" },
  { name: "Customer Support", value: 28, color: "hsl(142 76% 36%)" },
  { name: "Scheduling", value: 18, color: "hsl(38 92% 50%)" },
  { name: "Follow-ups", value: 9, color: "hsl(340 82% 52%)" },
]

export function AutomationChart() {
  return (
    <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          ⚡ Automation Distribution
          <span className="text-sm font-normal text-muted-foreground">This week</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <ResponsiveContainer width="60%" height={200}>
            <PieChart>
              <Pie
                data={automationData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {automationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--foreground))'
                }}
                formatter={(value) => [`${value}%`, 'Usage']}
              />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="flex flex-col space-y-3 flex-1">
            {automationData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.value}% usage</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}