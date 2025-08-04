import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { LucideIcon } from "lucide-react"

interface MetricsCardProps {
    title: string
    value: string | number
    change?: string
    icon: LucideIcon
    trend?: "up" | "down" | "neutral"
    variant?: "revenue" | "roi" | "savings"
}

export function MetricsCard({
                                title,
                                value,
                                change,
                                icon: Icon,
                                trend = "neutral",
                                variant = "revenue"
                            }: MetricsCardProps) {
    const variantClasses = {
        revenue: "bg-gradient-revenue text-white",
        roi: "bg-gradient-roi text-white",
        savings: "bg-gradient-savings text-white"
    }

    // fallback to revenue if no variant
    const cardClass = variantClasses[variant] || variantClasses["revenue"]

    const trendColors = {
        up: "text-success",
        down: "text-destructive",
        neutral: "text-white/70"
    }

    return (
        <Card className={`border-none ${cardClass}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className="h-4 w-4 opacity-80" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                {change && (
                    <p className={`text-xs ${trendColors[trend]} mt-1`}>
                        {change}
                    </p>
                )}
            </CardContent>
        </Card>
    )
}
