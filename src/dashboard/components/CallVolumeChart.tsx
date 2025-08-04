import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { createClient } from "@supabase/supabase-js"

// Supabase klient
const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL as string,
    process.env.REACT_APP_SUPABASE_ANON_KEY as string
)

interface HourlyCalls {
    time: string
    calls: number
    successful: number
}

export function CallVolumeChart() {
    const [data, setData] = useState<HourlyCalls[]>([])

    useEffect(() => {
        const fetchCallData = async () => {
            // Hovory z posledních 24 hodin
            const { data: calls, error } = await supabase
                .from("call_logs_table")
                .select("timestamp, success_evaluation")
                .gte("timestamp", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())

            if (error) {
                console.error("Chyba při načítání dat pro graf hovorů:", error.message)
                return
            }

            // Inicializace hodin (6–21h jako v původním grafu)
            const hours = ["6", "9", "12", "15", "18", "21"]
            const hourlyData: HourlyCalls[] = hours.map((h) => ({
                time: `${h}:00`,
                calls: 0,
                successful: 0,
            }))

            // Naplnění dat
            calls?.forEach((log) => {
                const date = new Date(log.timestamp)
                const hour = date.getHours()

                // Najdeme nejbližší bucket (6, 9, 12...)
                const bucketIndex = hours.findIndex((h) => parseInt(h) === Math.floor(hour / 3) * 3)
                if (bucketIndex !== -1) {
                    hourlyData[bucketIndex].calls += 1
                    if (log.success_evaluation === "Schůzka") {
                        hourlyData[bucketIndex].successful += 1
                    }
                }
            })

            setData(hourlyData)
        }

        fetchCallData()
    }, [])

    return (
        <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    📞 Objem hovorů dnes
                    <span className="text-sm font-normal text-muted-foreground">Po hodinách</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis
                            dataKey="time"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px",
                                color: "hsl(var(--foreground))",
                            }}
                            formatter={(value, name) => [
                                value,
                                name === "calls" ? "Hovory celkem" : "Úspěšné hovory",
                            ]}
                        />
                        <Bar
                            dataKey="calls"
                            fill="hsl(248 100% 68%)"
                            radius={[4, 4, 0, 0]}
                            opacity={0.8}
                        />
                        <Bar
                            dataKey="successful"
                            fill="hsl(142 76% 36%)"
                            radius={[4, 4, 0, 0]}
                            opacity={0.9}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
