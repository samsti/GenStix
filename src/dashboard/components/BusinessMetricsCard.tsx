import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { LucideIcon } from "lucide-react"

interface BusinessMetricsCardProps {
  title: string
  value: string | number
  change?: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  gradient?: "revenue" | "roi" | "savings"
}

export function BusinessMetricsCard({
                                      title,
                                      value,
                                      change,
                                      icon: Icon,
                                      trend = "neutral",
                                      gradient
                                    }: BusinessMetricsCardProps) {
  const gradientClasses = {
    revenue: "bg-gradient-revenue",
    roi: "bg-gradient-roi",
    savings: "bg-gradient-savings"
  }

  return (
      <Card className={`border-border/20 ${gradient ? gradientClasses[gradient] : "bg-gradient-card"} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-white/90">
            {title}
          </CardTitle>
          <Icon className="h-4 w-4 text-white/80" />
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="text-2xl font-bold text-white">{value}</div>
          {change && (
              <p className="text-xs text-white/70 mt-1">
                {change}
              </p>
          )}
        </CardContent>
      </Card>
  )
}
