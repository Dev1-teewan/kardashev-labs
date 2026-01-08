"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Circle } from "lucide-react";

interface LogEntry {
  lineNumber: number;
  timestamp: string;
  level: "INFO" | "SUCCESS" | "WARNING";
  component: string;
  message: string;
  fullText: string;
}

// Parse log line: "01 [00:00:00] [INFO] [FundingMonitor] Scanning exchanges..."
const parseLogLine = (
  line: string,
  baseTime: Date,
  offsetSeconds: number
): LogEntry | null => {
  const match = line.match(
    /^(\d+)\s+\[(\d{2}):(\d{2}):(\d{2})\]\s+\[(\w+)\]\s+\[(\w+)\]\s+(.+)$/
  );
  if (!match) return null;

  const [, lineNum, , , , level, component, message] = match;

  // Calculate local time based on base time + offset
  const logTime = new Date(baseTime.getTime() + offsetSeconds * 1000);
  const localTime = logTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return {
    lineNumber: parseInt(lineNum),
    timestamp: localTime,
    level: level as "INFO" | "SUCCESS" | "WARNING",
    component,
    message,
    fullText: `[${localTime}] [${level}] [${component}] ${message}`,
  };
};

// BTC-PERP Execution Flow (leverage updated to 15x)
const btcFlow = [
  "01 [00:00:00] [INFO] [FundingMonitor] Scanning exchanges for funding arbitrage opportunities...",
  "02 [00:00:01] [INFO] [FundingMonitor] Fetching funding rates from 5 connected exchanges",
  "03 [00:00:02] [INFO] [FundingMonitor] Analyzing funding rate differentials across markets",
  "04 [00:00:03] [SUCCESS] [FundingMonitor] Opportunity detected: BTC-PERP funding spread 0.045%",
  "05 [00:00:04] [INFO] [StrategyEngine] Evaluating opportunity viability and risk parameters",
  "06 [00:00:05] [SUCCESS] [StrategyEngine] Strategy approved: APY spread 7.25% exceeds minimum threshold",
  "07 [00:00:06] [INFO] [StrategyEngine] Selected platforms: Exchange A (long), Exchange B (short)",
  "08 [00:00:07] [INFO] [PositionManager] Connecting to Exchange A for balance retrieval",
  "09 [00:00:08] [SUCCESS] [PositionManager] Connected to Exchange A, retrieving account balance",
  "10 [00:00:09] [INFO] [PositionManager] Balance retrieved: 10.5 BTC available for trading",
  "11 [00:00:10] [INFO] [PositionManager] Connecting to Exchange B for balance retrieval",
  "12 [00:00:11] [SUCCESS] [PositionManager] Connected to Exchange B, retrieving account balance",
  "13 [00:00:12] [INFO] [PositionManager] Balance retrieved: 10.5 BTC available for trading",
  "14 [00:00:13] [INFO] [PositionManager] Setting leverage to 15x on both platforms",
  "15 [00:00:14] [SUCCESS] [PositionManager] Leverage synchronized: Exchange A 15x, Exchange B 15x",
  "16 [00:00:15] [INFO] [OrderExecutor] Calculating optimal position size: 10.0 BTC (95% utilization)",
  "17 [00:00:16] [INFO] [OrderExecutor] Normalizing position size for platform precision requirements",
  "18 [00:00:17] [INFO] [OrderExecutor] Opening short position on Exchange B: 10.0 BTC",
  "19 [00:00:18] [SUCCESS] [OrderExecutor] Short order placed on Exchange B: ID #67890, 10.0 BTC @ $45,235",
  "20 [00:00:19] [INFO] [OrderExecutor] Opening long position on Exchange A: 10.0 BTC",
  "21 [00:00:20] [SUCCESS] [OrderExecutor] Long order placed on Exchange A: ID #12345, 10.0 BTC @ $45,230",
  "22 [00:00:21] [SUCCESS] [PositionManager] Delta neutral position established successfully",
  "23 [00:00:22] [INFO] [PositionManager] Monitoring positions across both exchanges",
  "24 [00:00:23] [INFO] [FundingMonitor] Current funding rates: Exchange A 0.01%, Exchange B -0.035%",
  "25 [00:00:24] [INFO] [PositionManager] Unrealized PnL: +$2.25 (0.005% spread captured)",
  "26 [00:00:25] [INFO] [StrategyEngine] Position duration calculated: 8.5 hours (break-even: 0.1% fees)",
  "27 [00:00:26] [INFO] [PositionManager] Scheduled position closure in 8.5 hours",
  "28 [00:00:27] [INFO] [FundingMonitor] Monitoring funding rate changes every 60 seconds",
  "29 [00:00:28] [INFO] [PositionManager] Position health check: Both positions active and balanced",
  "30 [00:00:29] [INFO] [StrategyEngine] Continuing to scan for additional arbitrage opportunities",
];

// ETH-PERP Execution Flow (leverage updated to 10x)
const ethFlow = [
  "01 [00:00:00] [INFO] [FundingMonitor] Scanning exchanges for funding arbitrage opportunities...",
  "02 [00:00:01] [INFO] [FundingMonitor] Fetching funding rates from 5 connected exchanges",
  "03 [00:00:02] [WARNING] [FundingMonitor] Exchange C connection timeout, retrying...",
  "04 [00:00:03] [INFO] [FundingMonitor] Analyzing funding rate differentials across markets",
  "05 [00:00:04] [SUCCESS] [FundingMonitor] Opportunity detected: ETH-PERP funding spread 0.032%",
  "06 [00:00:05] [INFO] [StrategyEngine] Evaluating opportunity viability and risk parameters",
  "07 [00:00:06] [SUCCESS] [StrategyEngine] Strategy approved: APY spread 6.8% exceeds minimum threshold",
  "08 [00:00:07] [INFO] [StrategyEngine] Selected platforms: Exchange A (long), Exchange B (short)",
  "09 [00:00:08] [INFO] [PositionManager] Connecting to Exchange A for balance retrieval",
  "10 [00:00:09] [SUCCESS] [PositionManager] Connected to Exchange A, retrieving account balance",
  "11 [00:00:10] [INFO] [PositionManager] Balance retrieved: 25.3 ETH available for trading",
  "12 [00:00:11] [INFO] [PositionManager] Connecting to Exchange B for balance retrieval",
  "13 [00:00:12] [SUCCESS] [PositionManager] Connected to Exchange B, retrieving account balance",
  "14 [00:00:13] [INFO] [PositionManager] Balance retrieved: 25.3 ETH available for trading",
  "15 [00:00:14] [INFO] [PositionManager] Setting leverage to 10x on both platforms",
  "16 [00:00:15] [SUCCESS] [PositionManager] Leverage synchronized: Exchange A 10x, Exchange B 10x",
  "17 [00:00:16] [INFO] [OrderExecutor] Calculating optimal position size: 24.0 ETH (95% utilization)",
  "18 [00:00:17] [INFO] [OrderExecutor] Normalizing position size for platform precision requirements",
  "19 [00:00:18] [INFO] [OrderExecutor] Opening short position on Exchange B: 24.0 ETH",
  "20 [00:00:19] [SUCCESS] [OrderExecutor] Short order placed on Exchange B: ID #a7f3b2, 24.0 ETH @ $2,845",
  "21 [00:00:20] [INFO] [OrderExecutor] Opening long position on Exchange A: 24.0 ETH",
  "22 [00:00:21] [SUCCESS] [OrderExecutor] Long order placed on Exchange A: ID #c9d1e4, 24.0 ETH @ $2,842",
  "23 [00:00:22] [SUCCESS] [PositionManager] Delta neutral position established successfully",
  "24 [00:00:23] [INFO] [PositionManager] Monitoring positions across both exchanges",
  "25 [00:00:24] [INFO] [FundingMonitor] Current funding rates: Exchange A 0.008%, Exchange B -0.024%",
  "26 [00:00:25] [INFO] [PositionManager] Unrealized PnL: +$1.92 (0.003% spread captured)",
  "27 [00:00:26] [INFO] [StrategyEngine] Position duration calculated: 12.0 hours (break-even: 0.1% fees)",
  "28 [00:00:27] [INFO] [PositionManager] Scheduled position closure in 12.0 hours",
  "29 [00:00:28] [INFO] [FundingMonitor] Monitoring funding rate changes every 60 seconds",
  "30 [00:00:29] [INFO] [PositionManager] Position health check: Both positions active and balanced",
  "31 [00:00:30] [INFO] [StrategyEngine] Continuing to scan for additional arbitrage opportunities",
];

// SOL-PERP Execution Flow (leverage updated to 20x)
const solFlow = [
  "01 [00:00:00] [INFO] [FundingMonitor] Scanning exchanges for funding arbitrage opportunities...",
  "02 [00:00:01] [INFO] [FundingMonitor] Fetching funding rates from 5 connected exchanges",
  "03 [00:00:02] [INFO] [FundingMonitor] Analyzing funding rate differentials across markets",
  "04 [00:00:03] [SUCCESS] [FundingMonitor] Opportunity detected: SOL-PERP funding spread 0.052%",
  "05 [00:00:04] [INFO] [StrategyEngine] Evaluating opportunity viability and risk parameters",
  "06 [00:00:05] [SUCCESS] [StrategyEngine] Strategy approved: APY spread 9.15% exceeds minimum threshold",
  "07 [00:00:06] [INFO] [StrategyEngine] Selected platforms: Exchange A (long), Exchange B (short)",
  "08 [00:00:07] [INFO] [PositionManager] Connecting to Exchange A for balance retrieval",
  "09 [00:00:08] [SUCCESS] [PositionManager] Connected to Exchange A, retrieving account balance",
  "10 [00:00:09] [INFO] [PositionManager] Balance retrieved: 125.8 SOL available for trading",
  "11 [00:00:10] [INFO] [PositionManager] Connecting to Exchange B for balance retrieval",
  "12 [00:00:11] [SUCCESS] [PositionManager] Connected to Exchange B, retrieving account balance",
  "13 [00:00:12] [INFO] [PositionManager] Balance retrieved: 125.8 SOL available for trading",
  "14 [00:00:13] [INFO] [PositionManager] Setting leverage to 20x on both platforms",
  "15 [00:00:14] [SUCCESS] [PositionManager] Leverage synchronized: Exchange A 20x, Exchange B 20x",
  "16 [00:00:15] [INFO] [OrderExecutor] Calculating optimal position size: 120.0 SOL (95% utilization)",
  "17 [00:00:16] [INFO] [OrderExecutor] Normalizing position size for platform precision requirements",
  "18 [00:00:17] [INFO] [OrderExecutor] Opening short position on Exchange B: 120.0 SOL",
  "19 [00:00:18] [SUCCESS] [OrderExecutor] Short order placed on Exchange B: ID #x9k2m5, 120.0 SOL @ $98.45",
  "20 [00:00:19] [INFO] [OrderExecutor] Opening long position on Exchange A: 120.0 SOL",
  "21 [00:00:20] [SUCCESS] [OrderExecutor] Long order placed on Exchange A: ID #p4r7t1, 120.0 SOL @ $98.42",
  "22 [00:00:21] [SUCCESS] [PositionManager] Delta neutral position established successfully",
  "23 [00:00:22] [INFO] [PositionManager] Monitoring positions across both exchanges",
  "24 [00:00:23] [INFO] [FundingMonitor] Current funding rates: Exchange A 0.012%, Exchange B -0.040%",
  "25 [00:00:24] [INFO] [PositionManager] Unrealized PnL: +$3.60 (0.003% spread captured)",
  "26 [00:00:25] [INFO] [StrategyEngine] Position duration calculated: 6.2 hours (break-even: 0.1% fees)",
  "27 [00:00:26] [INFO] [PositionManager] Scheduled position closure in 6.2 hours",
  "28 [00:00:27] [INFO] [FundingMonitor] Monitoring funding rate changes every 60 seconds",
  "29 [00:00:28] [INFO] [PositionManager] Position health check: Both positions active and balanced",
  "30 [00:00:29] [INFO] [StrategyEngine] Continuing to scan for additional arbitrage opportunities",
];

const executionFlows = [btcFlow, ethFlow, solFlow];

export function ResearchTerminal() {
  const [displayedLogs, setDisplayedLogs] = useState<LogEntry[]>([]);
  const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState<string>("00:00:00");
  const [flowStartTime, setFlowStartTime] = useState<Date>(new Date());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update local time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  // Line-by-line display logic
  useEffect(() => {
    const currentFlow = executionFlows[currentFlowIndex];
    if (currentLineIndex >= currentFlow.length) {
      // Flow completed, move to next flow after 1 second pause
      const timeout = setTimeout(() => {
        setCurrentFlowIndex((prev) => (prev + 1) % executionFlows.length);
        setCurrentLineIndex(0);
        setDisplayedLogs([]);
        setFlowStartTime(new Date());
      }, 1000);
      return () => clearTimeout(timeout);
    }

    // Add next line every 2.5 seconds (medium speed)
    const interval = setInterval(() => {
      const line = currentFlow[currentLineIndex];
      const parsedLog = parseLogLine(line, flowStartTime, currentLineIndex);

      if (parsedLog) {
        setDisplayedLogs((prev) => [...prev, parsedLog]);
        setCurrentLineIndex((prev) => prev + 1);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [currentFlowIndex, currentLineIndex, flowStartTime]);

  // Auto-scroll to bottom when new logs are added
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [displayedLogs]);

  // Reset when flow changes
  useEffect(() => {
    setCurrentLineIndex(0);
    setDisplayedLogs([]);
    setFlowStartTime(new Date());
  }, [currentFlowIndex]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "SUCCESS":
        return "text-[#00ffc8] bg-[#00ffc8]/10";
      case "WARNING":
        return "text-yellow-500 bg-yellow-500/10";
      case "INFO":
      default:
        return "text-white/50 bg-white/5";
    }
  };

  return (
    <section id="terminal" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-mono text-white/50 tracking-widest border border-white/10 rounded-full">
            STRATEGY EXECUTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Active Strategy Agent
          </h2>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Terminal Container */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <Circle size={12} className="text-red-500/70 fill-current" />
                <Circle size={12} className="text-yellow-500/70 fill-current" />
                <Circle size={12} className="text-green-500/70 fill-current" />
              </div>
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-white/30" />
                <span className="text-xs font-mono text-white/30">
                  strategy-execution.log
                </span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="w-2 h-2 rounded-full bg-[#00ffc8]"
                />
                <span className="text-xs font-mono text-[#00ffc8]/70">
                  LIVE
                </span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="relative h-80 overflow-hidden">
              {/* Scan line effect */}
              <div
                className="absolute inset-0 pointer-events-none z-10 terminal-scan-line"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0, 255, 200, 0.02) 50%, transparent 100%)",
                }}
              />

              {/* Scrolling content */}
              <div
                ref={scrollContainerRef}
                className="h-full overflow-y-auto scrollbar-hide py-4"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className="space-y-1 px-4">
                  {displayedLogs.map((log, index) => (
                    <motion.div
                      key={`${log.lineNumber}-${index}-${currentFlowIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-[30px_70px_1fr] md:grid-cols-[35px_75px_60px_110px_1fr_60px] gap-2 md:gap-2 py-1.5 hover:bg-white/5 transition-colors rounded px-2 -mx-2 items-start"
                    >
                      {/* Line Number */}
                      <span className="text-[10px] font-mono text-white/20 mt-0.5">
                        {String(log.lineNumber).padStart(2, "0")}
                      </span>

                      {/* Timestamp */}
                      <span className="text-[10px] font-mono text-white/30">
                        [{log.timestamp}]
                      </span>

                      {/* Log Level (hidden on mobile) */}
                      <span className="text-[10px] font-mono text-white/30 hidden md:block">
                        [{log.level}]
                      </span>

                      {/* Component Name (hidden on mobile) */}
                      <span className="text-[10px] font-mono text-white/40 hidden md:block">
                        [{log.component}]
                      </span>

                      {/* Message */}
                      <span className="text-xs md:text-sm font-mono text-[#00ffc8]/80 break-words">
                        {log.message}
                      </span>

                      {/* Status Badge (hidden on mobile) */}
                      <span
                        className={`font-mono text-[10px] px-1 md:px-1.5 py-0.5 rounded hidden md:block ${getLevelColor(
                          log.level
                        )}`}
                      >
                        {log.level}
                      </span>
                    </motion.div>
                  ))}

                  {/* Cursor */}
                  {currentLineIndex <
                    executionFlows[currentFlowIndex].length && (
                    <div className="grid grid-cols-[30px_70px_1fr] md:grid-cols-[35px_75px_60px_110px_1fr_60px] gap-2 md:gap-2 py-1.5 px-2 -mx-2 items-center">
                      <span className="text-[10px] font-mono text-white/20">
                        {String(displayedLogs.length + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center">
                        <span className="text-xs md:text-sm font-mono text-white/50">
                          {">"}
                        </span>
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className="ml-1 w-2 h-4 bg-[#00ffc8]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Fade edges */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-20" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20" />
            </div>

            {/* Terminal Footer */}
            <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-white/20">
                  KARDASHEV_LABS::STRATEGY
                </span>
                <span className="text-xs font-mono text-white/20">
                  UTC {currentTime}
                </span>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#00ffc8]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}
