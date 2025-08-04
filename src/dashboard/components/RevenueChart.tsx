import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { createClient } from "@supabase/supabase-js"

// Inicializace Supabase
const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL as string,
    process.env.REACT_APP_SUPABASE_ANON_KEY as string
)

// Pomocná funkce pro formát měny
const formatCurrency = (value: number) =>
    value.toLocaleString("cs-CZ", { style: "currency", currency: "CZK" })

interface RevenuePoint {
  date: string
  revenue: number
  calls: number
}

export function RevenueChart() {
  const [data, setData] = useState<RevenuePoint[]>([])

  useEffect(() => {
    const fetchRevenueData = async () => {
      // Načteme všechny hovory za posledních 30 dní
      const { data: calls, error } = await supabase
          .from("call_logs_table")
          .select("timestamp, success_evaluation")
          .gte("timestamp", new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())

      if (error) {
        console.error("Chyba při načítání dat pro graf:", error.message)
        return
      }

      // Převedeme záznamy na souhrn po dnech
      const dailyMap: Record<string, { revenue: number; calls: number }> = {}

      calls?.forEach((log) => {
        const date = new Date(log.timestamp).toLocaleDateString("cs-CZ", {
          day: "2-digit",
          month: "2-digit",
        })

        if (!dailyMap[date]) {
          dailyMap[date] = { revenue: 0, calls: 0 }
        }

        dailyMap[date].calls += 1
        if (log.success_evaluation === "Schůzka") {
          dailyMap[date].revenue += 2000
        }
      })

      // Převod na pole a seřazení podle data
      const revenueData = Object.entries(dailyMap)
          .map(([date, { revenue, calls }]) => ({
            date,
            revenue,
            calls,
          }))
          .sort((a, b) => {
            const [dayA, monthA] = a.date.split(".")
            const [dayB, monthB] = b.date.split(".")
            return (
                new Date(2024, parseInt(monthA) - 1, parseInt(dayA)).getTime() -
                new Date(2024, parseInt(monthB) - 1, parseInt(dayB)).getTime()
            )
          })

      setData(revenueData)
    }

    fetchRevenueData()
  }, [])

  return (
      <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            💰 Vývoj tržeb
            <span className="text-sm font-normal text-muted-foreground">Posledních 30 dní</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(248 100% 68%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(248 100% 68%)" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  tickFormatter={(value) => formatCurrency(value)}
              />
              <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                  formatter={(value) => [formatCurrency(Number(value)), "Tržby"]}
              />
              <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(248 100% 68%)"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
  )
}
