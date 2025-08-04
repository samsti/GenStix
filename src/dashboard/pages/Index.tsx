import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../db/firebase"

import { DashboardLayout } from "../components/DashboardLayout"
import { BusinessMetricsCard } from "../components/BusinessMetricsCard"
import { MetricsCard } from "../components/MetricsCard"
import { LogsTable } from "../components/LogsTable"
import { RevenueChart } from "../components/RevenueChart"
import { CallVolumeChart } from "../components/CallVolumeChart"
import { PerformanceChart } from "../components/PerformanceChart"

import { Activity, Bot, Clock, DollarSign, TrendingUp, Users } from "lucide-react"

// Typ pro jeden log
export interface CallLog {
  id: string
  timestamp: string
  phone: string
  summary: string
  success_evaluation: string
  duration: string
}

// Inicializace Supabase klienta
const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL as string,
    process.env.REACT_APP_SUPABASE_ANON_KEY as string
)

// Pomocná funkce pro CZK
const formatCurrency = (amount: number) =>
    amount.toLocaleString("cs-CZ", { style: "currency", currency: "CZK" })

const Index = () => {
  const [logs, setLogs] = useState<CallLog[]>([])
  const [loading, setLoading] = useState(true)
  const [qualifiedLeads, setQualifiedLeads] = useState(0)

  const navigate = useNavigate()
  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login", { replace: true })
  }

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true)
      const { data, error } = await supabase
          .from("call_logs_table")
          .select("id, timestamp, phone, summary, success_evaluation, duration")
          .order("timestamp", { ascending: false })
          .limit(100)

      if (error) {
        console.error("Chyba při načítání logů:", error.message)
      } else if (data) {
        setLogs(data)
        // Qualified leads
        const leadsCount = data.filter(
            (log) => log.success_evaluation === "Schůzka"
        ).length
        setQualifiedLeads(leadsCount)
      }

      setLoading(false)
    }

    fetchLogs()
  }, [])

  // Byznys metriky
  const revenue = qualifiedLeads * 2000
  const cost = 5000
  const roi = cost > 0 ? ((revenue - cost) / cost) * 100 : 0

  // === Operační metriky z dat ===

  // Dnešní datum jako YYYY-MM-DD
  const todayStr = new Date().toISOString().slice(0, 10)
  const callsToday = logs.filter(log => log.timestamp?.startsWith(todayStr))
  const totalCallsToday = callsToday.length

  // Průměrná délka hovoru dnes
  const durationsSec = callsToday
      .map(log => {
        // Parse duration string "4m 23s" → seconds
        const m = log.duration?.match(/(\d+)m\s*(\d+)s/)
        if (m) return parseInt(m[1]) * 60 + parseInt(m[2])
        const sec = log.duration?.match(/(\d+)s/)
        return sec ? parseInt(sec[1]) : 0
      })
      .filter(Boolean)
  const avgSec =
      durationsSec.length > 0
          ? Math.round(durationsSec.reduce((a, b) => a + b, 0) / durationsSec.length)
          : 0
  const avgMin = Math.floor(avgSec / 60)
  const avgRemSec = avgSec % 60
  const avgDuration = `${avgMin}m ${avgRemSec}s`

  // Míra úspěšnosti dnes
  const successToday = callsToday.filter(
      log =>
          (log.success_evaluation &&
              log.success_evaluation.toLowerCase().includes("úspě")) ||
          log.success_evaluation === "Schůzka"
  ).length
  const successRate = totalCallsToday > 0
      ? ((successToday / totalCallsToday) * 100).toFixed(1)
      : "0.0"

  // --- Trends (dummy data for now) ---
  const callTrend = "+12 % oproti včerejšku"
  const avgTrend = "-5 % oproti včerejšku"
  const successTrend = "+2.1 % oproti včerejšku"

  return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Hlavička s logout buttonem */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Přehled dashboardu</h2>
              <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded bg-destructive text-destructive-foreground font-semibold hover:bg-destructive/80 transition"
              >
                Odhlásit se
              </button>
            </div>
            <p className="text-muted-foreground">
              Sledujte výkon vašeho AI hlasového agenta a automatizací
            </p>
          </div>

          {/* Byznysové metriky */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">💰 Byznysový dopad</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <BusinessMetricsCard
                  title="Generované tržby"
                  value={formatCurrency(revenue)}
                  change="+12 % oproti minulému měsíci"
                  icon={DollarSign}
                  trend="up"
                  gradient="revenue"
              />
              <BusinessMetricsCard
                  title="ROI tento měsíc"
                  value={`${roi.toFixed(0)}%`}
                  change="+8 % oproti minulému měsíci"
                  icon={TrendingUp}
                  trend={roi >= 0 ? "up" : "down"}
                  gradient="roi"
              />
              <BusinessMetricsCard
                  title="Kvalifikované leady"
                  value={qualifiedLeads}
                  change="+43 % míra konverze"
                  icon={Users}
                  trend="up"
                  gradient="savings"
              />
            </div>
          </div>

          {/* Operační metriky */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">⚡ Provozní výkon</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <MetricsCard
                  title="Celkem hovorů dnes"
                  value={loading ? "..." : totalCallsToday}
                  change={callTrend}
                  icon={Bot}
                  trend="up"
                  variant="revenue"
              />
              <MetricsCard
                  title="Průměrná délka hovoru"
                  value={loading ? "..." : avgDuration}
                  change={avgTrend}
                  icon={Clock}
                  trend="down"
                  variant="roi"
              />
              <MetricsCard
                  title="Míra úspěšnosti"
                  value={loading ? "..." : `${successRate} %`}
                  change={successTrend}
                  icon={Activity}
                  trend="up"
                  variant="savings"
              />
            </div>
          </div>

          {/* Analytické grafy */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">📊 Analýzy a přehledy</h3>
            <div className="space-y-6">
              <RevenueChart />
              <div className="grid gap-6 md:grid-cols-2">
                <CallVolumeChart />
                <PerformanceChart />
              </div>
            </div>
          </div>

          {/* Nedávná aktivita */}
          <LogsTable title="Nedávná aktivita" logs={logs} loading={loading} />
        </div>
      </DashboardLayout>
  )
}

export default Index
