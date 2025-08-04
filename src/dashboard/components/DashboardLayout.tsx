import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="h-14 border-b border-border/20 bg-card/30 backdrop-blur-lg sticky top-0 z-10 flex items-center px-6">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 rounded bg-primary shadow-lg shadow-primary/25"></div>
          <h1 className="font-semibold text-lg text-foreground">Client Dashboard</h1>
        </div>
      </header>
      
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}