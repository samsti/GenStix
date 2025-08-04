import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

export interface CallLog {
  id: string
  timestamp: string
  duration: string
  summary: string
  phone?: string
  success_evaluation?: string
}

interface LogsTableProps {
  title: string
  logs: CallLog[]
  loading: boolean
}

export function LogsTable({ title, logs, loading }: LogsTableProps) {
  const getStatusColor = (evaluation?: string) => {
    switch (evaluation) {
      case "success":
        return "bg-success text-success-foreground"
      case "fail":
        return "bg-destructive text-destructive-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  // Formátování českého data
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return new Intl.DateTimeFormat("cs-CZ", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
      <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {loading ? "Načítání..." : `${logs.length} záznamů`}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Telefon</TableHead>
                <TableHead>Výsledek</TableHead>
                <TableHead>Délka hovoru</TableHead>
                <TableHead>Čas</TableHead>
                <TableHead>Souhrn</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                  <TableRow key={log.id} className="hover:bg-accent/50">
                    <TableCell className="text-muted-foreground">
                      {log.phone || "—"}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(log.success_evaluation)}>
                        {log.success_evaluation || "—"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{log.duration}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(log.timestamp)}</TableCell>
                    <TableCell>
                      <div className="max-w-md">
                        <p className="text-sm">{log.summary}</p>
                      </div>
                    </TableCell>
                  </TableRow>
              ))}
              {logs.length === 0 && !loading && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground">
                      Žádné záznamy k zobrazení
                    </TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
  )
}
