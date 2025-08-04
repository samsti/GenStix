import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { createClient } from "@supabase/supabase-js"

// Supabase klient
const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL as string,
    process.env.REACT_APP_SUPABASE_ANON_KEY as string
)

interface WeeklyPerformance {
    week: string
    successRate: number
}

export function PerformanceChart() {
    const [data, setData] = useState<WeeklyPerformance[]>([])

    useEffect(() => {
        const fetchPerformanceData = async () => {
            // Data za posledních 4 týdny
            const { data: calls, error } = await supabase
                .from("call_logs_table")
                .select("timestamp, success_evaluation")
                .gte("timestamp", new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString())

            if (error) {
                console.error("Chyba při načítání výkonových dat:", error.message)
                return
            }

            // Rozdělení na 4 týdny zpětně
            const weeklyBuckets = [0, 0, 0, 0]      // celkem hovorů
            const weeklySuccess = [0, 0, 0, 0]      // úspěšné hovory

            calls?.forEach((log) => {
                const date = new Date(log.timestamp)
                const weekIndex = Math.floor(
                    (Date.now() - date.getTime()) / (7 * 24 * 60 * 60 * 1000)
                )
                const index = 3 - Math.min(3, weekIndex) // poslední 4 týdny zpět

                if (index >= 0) {
                    weeklyBuckets[index] += 1

                    // Úspěšný hovor = všechno kromě "Chyba"
                    if (log.success_evaluation !== "Chyba") {
                        weeklySuccess[index] += 1
                    }
                }
            })

            const chartData: WeeklyPerformance[] = weeklyBuckets.map((total, i) => ({
                week: `Týden ${i + 1}`,
                successRate:
                    total > 0 ? parseFloat(((weeklySuccess[i] / total) * 100).toFixed(1)) : 0,
            }))

            setData(chartData)
        }

        fetchPerformanceData()
    }, [])

    return (
        <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    📈 Trendy úspěšnosti
                    <span className="text-sm font-normal text-muted-foreground">Poslední 4 týdny</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <XAxis
                            dataKey="week"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                            domain={[0, 100]}
                            tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px",
                                color: "hsl(var(--foreground))",
                            }}
                            formatter={(value) => [`${value}%`, "Míra úspěšnosti"]}
                        />
                        <Line
                            type="monotone"
                            dataKey="successRate"
                            stroke="hsl(248 100% 68%)"
                            strokeWidth={3}
                            dot={{ fill: "hsl(248 100% 68%)", strokeWidth: 2, r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
