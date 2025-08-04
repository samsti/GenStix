import { DashboardLayout } from "../components/DashboardLayout"
import { LogsTable } from "../components/LogsTable"
import { MetricsCard } from "../components/MetricsCard"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Bot, Download, Phone, Search, Timer } from "lucide-react"

// Mock voice agent logs
const voiceLogs = [
  {
    id: "voice-1",
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    type: "call" as const,
    description: "Inbound call - Product inquiry for enterprise features",
    duration: "3m 45s",
    status: "completed" as const,
    metadata: { caller: "+1-555-0123", sentiment: "positive" }
  },
  {
    id: "voice-2", 
    timestamp: new Date(Date.now() - 1000 * 60 * 8),
    type: "call" as const,
    description: "Outbound follow-up call to lead from demo",
    duration: "7m 12s",
    status: "completed" as const,
    metadata: { caller: "+1-555-0456", sentiment: "interested" }
  },
  {
    id: "voice-3",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    type: "call" as const, 
    description: "Support call - Technical issue resolution",
    duration: "12m 33s",
    status: "completed" as const,
    metadata: { caller: "+1-555-0789", sentiment: "neutral" }
  },
  {
    id: "voice-4",
    timestamp: new Date(Date.now() - 1000 * 60 * 25),
    type: "error" as const,
    description: "Call dropped due to connection issue",
    status: "failed" as const,
    metadata: { caller: "+1-555-0321", error: "network_timeout" }
  },
  {
    id: "voice-5",
    timestamp: new Date(Date.now() - 1000 * 60 * 35),
    type: "call" as const,
    description: "Customer service call - Account assistance", 
    duration: "5m 21s",
    status: "completed" as const,
    metadata: { caller: "+1-555-0654", sentiment: "satisfied" }
  }
]

const VoiceLogs = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Voice Agent Logs</h2>
            <p className="text-muted-foreground">
              Detailed logs and analytics for your AI voice agent
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Logs
          </Button>
        </div>

        {/* Voice Agent Metrics */}
        <div className="grid gap-4 md:grid-cols-3">
          <MetricsCard
            title="Calls Today"
            value="23"
            change="+15% from yesterday"
            icon={Phone}
            trend="up"
          />
          <MetricsCard
            title="Avg Response Time"
            value="1.2s"
            change="-200ms from yesterday"
            icon={Timer}
            trend="up"
          />
          <MetricsCard
            title="Agent Uptime"
            value="99.8%"
            change="No downtime today"
            icon={Bot}
            trend="up"
          />
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search calls..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Voice Logs Table - temporarily removed */}
        <div className="text-center text-muted-foreground py-8">
          Voice logs will be displayed here
        </div>
      </div>
    </DashboardLayout>
  )
}

export default VoiceLogs