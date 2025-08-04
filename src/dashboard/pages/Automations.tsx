import { DashboardLayout } from "../components/DashboardLayout"
import { LogsTable } from "../components/LogsTable"
import { MetricsCard } from "../components/MetricsCard"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { CheckCircle, Play, Search, Workflow, Zap } from "lucide-react"

// Mock automation logs
const automationLogs = [
  {
    id: "auto-1",
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
    type: "automation" as const,
    description: "Lead nurturing email sequence - Step 3 of 5",
    duration: "2.1s",
    status: "completed" as const,
    metadata: { workflow: "lead-nurturing", trigger: "time-based" }
  },
  {
    id: "auto-2",
    timestamp: new Date(Date.now() - 1000 * 60 * 12),
    type: "automation" as const,
    description: "Slack notification for new high-value lead",
    duration: "0.8s",
    status: "completed" as const,
    metadata: { workflow: "lead-alerts", trigger: "form-submission" }
  },
  {
    id: "auto-3",
    timestamp: new Date(Date.now() - 1000 * 60 * 18),
    type: "automation" as const,
    description: "CRM contact update and lead scoring",
    duration: "1.5s",
    status: "completed" as const,
    metadata: { workflow: "crm-sync", trigger: "call-completed" }
  },
  {
    id: "auto-4",
    timestamp: new Date(Date.now() - 1000 * 60 * 28),
    type: "error" as const,
    description: "Calendar scheduling automation failed - API timeout",
    status: "failed" as const,
    metadata: { workflow: "calendar-booking", error: "api_timeout" }
  },
  {
    id: "auto-5",
    timestamp: new Date(Date.now() - 1000 * 60 * 40),
    type: "automation" as const,
    description: "Welcome email sequence triggered for new user",
    duration: "1.9s",
    status: "completed" as const,
    metadata: { workflow: "onboarding", trigger: "user-signup" }
  }
]

const activeWorkflows = [
  { name: "Lead Nurturing", status: "active", runs: 45, success: 97.8 },
  { name: "Customer Onboarding", status: "active", runs: 23, success: 100 },
  { name: "Support Ticket Routing", status: "active", runs: 67, success: 94.2 },
  { name: "Meeting Scheduler", status: "paused", runs: 12, success: 83.3 },
]

const Automations = () => {
  return (
      <DashboardLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Automations</h2>
              <p className="text-muted-foreground">
                Monitor and manage your automated workflows
              </p>
            </div>
            <Button className="gap-2">
              <Play className="h-4 w-4" />
              Create Workflow
            </Button>
          </div>

          {/* Automation Metrics */}
          <div className="grid gap-4 md:grid-cols-3">
            <MetricsCard
                title="Workflows Active"
                value="12"
                change="+2 this week"
                icon={Workflow}
                trend="up"
            />
            <MetricsCard
                title="Executions Today"
                value="156"
                change="+22% from yesterday"
                icon={Zap}
                trend="up"
            />
            <MetricsCard
                title="Success Rate"
                value="96.4%"
                change="+1.2% this week"
                icon={CheckCircle}
                trend="up"
            />
          </div>

          {/* Active Workflows */}
          <Card>
            <CardHeader>
              <CardTitle>Active Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeWorkflows.map((workflow) => (
                    <div key={workflow.name} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                          <Workflow className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{workflow.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {workflow.runs} runs • {workflow.success}% success rate
                          </p>
                        </div>
                      </div>
                      <Badge variant={workflow.status === "active" ? "default" : "secondary"}>
                        {workflow.status}
                      </Badge>
                    </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Search and Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                  placeholder="Search automations..."
                  className="pl-10"
              />
            </div>
          </div>

          {/* Automation Logs */}
          <LogsTable title="Call Logs" logs={[]} loading={false} />
        </div>
      </DashboardLayout>
  )
}

export default Automations
