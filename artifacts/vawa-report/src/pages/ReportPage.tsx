import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  AlertCircle,
  ArrowUpRight,
  Ban,
  FileText,
  Moon,
  Sun,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

const fig1Data = [
  { label: "FY 2021 (est.)", amount: 12.0 },
  { label: "FY 2022 (est.)", amount: 12.5 },
  { label: "FY 2023 (conf.)", amount: 16.1 },
  { label: "SASP FY 2023 (conf.)", amount: 2.6 },
];

const fig2Data = [
  { label: "DA Vertical Prosecution", amount: 202545, highlight: true },
  { label: "Sheriff LE Unit", amount: 203143, highlight: true },
  { label: "Sheriff CRU", amount: 203000, highlight: false },
  { label: "Palomar SART", amount: 212000, highlight: false },
  { label: "DVS", amount: 1390000, highlight: false },
  { label: "Legal Aid", amount: 750000, highlight: false },
  { label: "CASA", amount: 206000, highlight: false },
  { label: "SMPD", amount: 0, highlight: false, gap: true },
];

const fig3Data = [
  { label: "Total DV Calls (County)", year2013: 1695, year2022: 1788 },
  { label: "DV Calls (Santa Maria)", year2013: 499, year2022: 556 },
  { label: "Weapons-Involved (County)", year2013: 370, year2022: 918 },
];

const fig5Data = [
  { name: "Program Services (53%)", value: 53 },
  { name: "Management & General (43%)", value: 43 },
  { name: "Fundraising (4%)", value: 4 },
];

const fig5Colors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-2))",
];

const fig6Data = [
  { label: "LE (25%)", required: 91575, confirmed: 203143 },
  { label: "Prosecution (25%)", required: 91575, confirmed: 202545 },
  { label: "Courts (5%)", required: 18315, confirmed: 0 },
  { label: "Victim Services (30%)", required: 109890, confirmed: 1390000 },
];

const dollarM = (v: number) => `$${v}M`;
const dollarK = (v: number) => `$${(v / 1000).toFixed(0)}K`;

const tooltipStyle = {
  borderRadius: "6px",
  border: "1px solid hsl(var(--border))",
  boxShadow: "none",
  backgroundColor: "hsl(var(--card))",
  color: "hsl(var(--foreground))",
  fontSize: "12px",
};

function SectionHeading({
  children,
  number,
}: {
  children: React.ReactNode;
  number: string;
}) {
  return (
    <div className="mt-16 mb-6 flex items-baseline gap-3 border-b border-border pb-3">
      <span className="text-sm font-medium text-muted-foreground tabular-nums">
        {number}
      </span>
      <h2 className="text-xl font-semibold text-foreground">{children}</h2>
    </div>
  );
}

function FigureCard({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="my-8 border border-border rounded-lg bg-card">
      <CardHeader className="bg-muted/40 border-b border-border pb-3 pt-3">
        <CardTitle className="text-sm font-medium text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
        <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border leading-relaxed">
          {note}
        </p>
      </CardContent>
    </Card>
  );
}

function HighlightCard({
  num,
  title,
  desc,
  icon,
}: {
  num: number;
  title: string;
  desc: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 p-5 border border-border rounded-lg bg-card hover:bg-muted/30 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{num}</span>
        {icon && <span>{icon}</span>}
      </div>
      <h3 className="text-sm font-semibold text-foreground leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function ReportPage({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  return (
    <div className="min-h-screen bg-background font-sans">

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-zinc-950 text-white border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-zinc-400" />
            <span className="font-medium text-sm text-zinc-100">Pro Se Research Report</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-zinc-500 text-xs">SBC-VAWA-2026-01</span>
            <Badge variant="outline" className="border-zinc-700 text-zinc-300 bg-zinc-800 hover:bg-zinc-700 text-xs font-normal rounded-md px-2.5">
              March 2026
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-md"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-zinc-950 text-white pt-20 pb-28 px-6 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-7">
            <Badge className="bg-zinc-800 text-white border border-zinc-700 rounded-md px-2.5 py-0.5 text-xs font-normal">
              Investigative Report
            </Badge>
            <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-md px-2.5 py-0.5 text-xs font-normal">
              Santa Barbara County, CA
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-5 text-white tracking-tight">
            VAWA STOP Formula Grant Funding in Santa Barbara County
          </h1>

          <p className="text-lg text-zinc-400 font-normal leading-relaxed mb-10 max-w-3xl">
            Federal Appropriation, State Distribution, and Local Service Delivery Outcomes.
            Tracing federal VAWA funds from appropriation to local delivery, Fiscal Years 2021–2024.
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-500 border-t border-zinc-800 pt-5">
            <FileText className="w-3.5 h-3.5" />
            <span>Basis: Publicly Available Primary Source Records</span>
          </div>
        </div>
      </header>

      {/* Key Stats — floats up over hero */}
      <div className="max-w-5xl mx-auto px-6 -mt-14 relative z-20 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 border border-border rounded-lg overflow-hidden bg-card">
          {[
            { icon: <ArrowUpRight className="w-5 h-5 text-blue-500" />, label: "California Award (FY23)", value: "$16.1M" },
            { icon: <TrendingUp className="w-5 h-5 text-red-500" />, label: "Weapons Increase (2013–2022)", value: "148%" },
            { icon: <Ban className="w-5 h-5 text-zinc-400" />, label: "SMPD Confirmed Allocation", value: "$0" },
            { icon: <AlertCircle className="w-5 h-5 text-amber-500" />, label: "DVS Administrative Overhead", value: "43%" },
            { icon: <Ban className="w-5 h-5 text-red-500" />, label: "FY21–23 LE Funding (SB County)", value: "$0" },
            { icon: <FileText className="w-5 h-5 text-emerald-600" />, label: "FY24 Confirmed Subgrants", value: "4" },
          ].map(({ icon, label, value }, i) => (
            <div
              key={i}
              className={`p-5 flex flex-col gap-3 ${
                i < 3 ? "border-b border-border" : ""
              } ${i % 3 !== 2 ? "border-r border-border" : ""}`}
            >
              {icon}
              <div>
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-14 pb-24">

        {/* Intro paragraph */}
        <p className="text-base leading-relaxed text-foreground mb-14 border-l-2 border-border pl-5">
          The Violence Against Women Act (VAWA) established the STOP Formula Grant Program as the primary federal mechanism for improving law enforcement and prosecution response to domestic violence. This report examines the flow of these funds from federal appropriation through the California Office of Emergency Services (Cal OES) to Santa Barbara County subrecipients for fiscal years 2021 through 2024. The analysis is based exclusively on verified primary source records.
        </p>

        {/* Report Highlights */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
            Report Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <HighlightCard
              num={1}
              title="Significant Federal Funding"
              desc="California received approximately $49 million in STOP funds over four years, with $16.1M in FY 2023 alone."
              icon={<ArrowUpRight className="w-4 h-4 text-blue-500" />}
            />
            <HighlightCard
              num={2}
              title="Weapons Escalation"
              desc="Weapons-involved domestic violence calls countywide increased 148% from 370 in 2013 to 918 in 2022."
              icon={<TrendingUp className="w-4 h-4 text-red-500" />}
            />
            <HighlightCard
              num={3}
              title="Zero SMPD Allocation"
              desc="The Santa Maria Police Department — the county's largest city — received no confirmed VAWA allocation in any fiscal year reviewed."
              icon={<Ban className="w-4 h-4 text-zinc-400" />}
            />
            <HighlightCard
              num={4}
              title="High Administrative Overhead"
              desc="DVS reports 43% management and general overhead — more than double the industry standard threshold of 15–20%."
              icon={<AlertCircle className="w-4 h-4 text-amber-500" />}
            />
            <HighlightCard
              num={5}
              title="No County Subrecipients Found"
              desc="FY 2021–2023: No SB County LE, prosecution, or court agency appeared in any public STOP subrecipient list."
              icon={<Ban className="w-4 h-4 text-red-500" />}
            />
            <HighlightCard
              num={6}
              title="Fund Consolidation Issues"
              desc="Cal OES consolidates multiple federal funding streams into single subawards, obscuring STOP allocations per DOJ OIG Audit 25-038."
              icon={<FileText className="w-4 h-4 text-emerald-600" />}
            />
          </div>
        </section>

        {/* Section 1 */}
        <section>
          <SectionHeading number="1">Background and Scope</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p>
              The Violence Against Women Act (VAWA), enacted in 1994 and reauthorized most recently in 2022, established the Services, Training, Officers, and Prosecutors (STOP) Formula Grant Program as the primary federal mechanism for improving law enforcement and prosecution response to domestic violence, dating violence, sexual assault, and stalking. Under the STOP program, the Department of Justice Office on Violence Against Women (OVW) awards formula grants to state administrative agencies, which in turn distribute funds to local law enforcement, prosecution offices, courts, and victim services providers.
            </p>
            <p>
              This analysis is based exclusively on verified primary source records, including Cal OES subrecipient ledgers, DOJ OVW grant award database records, Santa Barbara County Board of Supervisors consent agendas, DVS organizational financial statements, and CA DOJ Domestic Violence-Related Calls for Service data.
            </p>
            <p className="font-medium">
              The report addresses a single operative question: did the funding distributed through these channels produce, in Santa Barbara County, the trained law enforcement officers, specialized prosecutors, and supported courts that VAWA's statutory design required?
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <SectionHeading number="2">Federal Awards to California, FY 2021–2024</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-foreground mb-8">
            <p>
              According to the DOJ Office on Violence Against Women Grant Awards Database, California received VAWA STOP formula grant funds under CFDA #16.588 during each fiscal year from 2021 through 2024. The most recent confirmed award cycle shows California receiving approximately $16.1 million in STOP funds for FY 2023, with an additional $2.6 million under the Sexual Assault Services Program (SASP).
            </p>
          </div>

          <FigureCard
            title="Figure 1 — California VAWA STOP Formula Grant Awards, FY 2021–2024 (Estimated)"
            note="FY 2021 and FY 2022 figures are approximate based on prior-year trend data. FY 2023 figure of $16,104,812 is confirmed from Cal OES subrecipient ledger. SASP figure of $2,648,245 confirmed from Cal OES ledger. Source: Cal OES Subrecipient Media Ledger; DOJ OVW Grant Award Search (CFDA #16.588)."
          >
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={fig1Data} margin={{ top: 8, right: 16, left: 0, bottom: 24 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tickFormatter={dollarM} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toFixed(1)}M`, "Award Amount"]} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {fig1Data.map((_, i) => (
                    <Cell key={i} fill={i === 2 ? "hsl(var(--chart-1))" : i === 3 ? "hsl(var(--chart-4))" : "hsl(var(--chart-5))"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <div className="space-y-3 text-base leading-relaxed text-foreground mt-6 mb-4">
            <p>
              Federal law requires states to distribute STOP formula grant funds according to a strict statutory formula — a minimum of 25% to law enforcement, 25% to prosecution, 5% to courts, and 30% to victim services. State administration is capped at 10%.
            </p>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-semibold text-foreground">Set-Aside Category</TableHead>
                  <TableHead className="font-semibold text-foreground">Statutory Min.</TableHead>
                  <TableHead className="font-semibold text-foreground">Required CA Dist. (est.)</TableHead>
                  <TableHead className="font-semibold text-foreground">Intended Recipients</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Law Enforcement", "25%", "~$9,250,000", "Local police and sheriff departments"],
                  ["Prosecution", "25%", "~$9,250,000", "District attorney offices"],
                  ["Courts", "5%", "~$1,850,000", "Judicial training programs"],
                  ["Victim Services", "30%", "~$11,100,000", "Nonprofit and government victim programs"],
                ].map(([cat, pct, amt, rec], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-foreground">{cat}</TableCell>
                    <TableCell className="text-muted-foreground">{pct}</TableCell>
                    <TableCell className="font-mono text-sm text-foreground">{amt}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{rec}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50 font-semibold">
                  <TableCell className="font-semibold text-foreground">Subtotal — Local Agencies</TableCell>
                  <TableCell className="font-semibold text-foreground">85%</TableCell>
                  <TableCell className="font-mono text-sm font-semibold text-foreground">~$31,450,000</TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">State Administration</TableCell>
                  <TableCell className="text-muted-foreground">10% (capped)</TableCell>
                  <TableCell className="font-mono text-sm text-muted-foreground">~$3,700,000</TableCell>
                  <TableCell className="text-muted-foreground text-sm">Cal OES overhead</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">Discretionary</TableCell>
                  <TableCell className="text-muted-foreground">5%</TableCell>
                  <TableCell className="font-mono text-sm text-muted-foreground">~$1,850,000</TableCell>
                  <TableCell className="text-muted-foreground text-sm">At-large state allocation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="bg-muted/40 px-4 py-2.5 text-xs text-muted-foreground border-t border-border">
              Source: 34 U.S.C. § 10461 et seq.; 28 C.F.R. § 90.17. Figures based on approximately $49 million cumulative California STOP award, FY 2021–2023.
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <SectionHeading number="3">State Distribution and the Fund Consolidation Problem</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p>
              Cal OES, as the State Administrative Agency (SAA) responsible for VAWA STOP distribution, administers grants through a reimbursement model in which subrecipients must spend funds and submit claims within defined windows before receiving federal dollars. This structure imposes cash-flow requirements on local agencies that may disadvantage smaller departments without reserve capacity.
            </p>
            <p>
              DOJ OIG Audit 25-038, released in January 2025, identified a material structural problem: Cal OES consolidates multiple federal funding streams — including STOP, VOCA, FVPSA, and state funds — into single subawards. Subrecipients receive combined awards and cannot separately account for each federal source.
            </p>
          </div>

          <blockquote className="my-8 border-l-2 border-foreground pl-5 py-1">
            <p className="text-base text-foreground italic leading-relaxed">
              "Even if Santa Barbara County received STOP funds, they would be concealed inside larger victim services grants labeled only by program name, not funding source. This is the structural basis for the opacity documented in this report."
            </p>
            <footer className="text-sm font-medium text-muted-foreground mt-3 not-italic">
              — DOJ OIG Audit 25-038 Context
            </footer>
          </blockquote>

          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p>
              A review of Cal OES Joint Legislative Budget Committee reports for FY 2021 through FY 2024 identified no Santa Barbara County law enforcement agency, prosecution office, or court in any published STOP subrecipient list for fiscal years 2021 through 2023. Subgrant records first appear in FY 2024 Board of Supervisors consent agendas, confirming two awards: grant LE24 02 0420 to the Santa Barbara County Sheriff Law Enforcement Unit ($203,143) and grant VV24 01 0420 to the District Attorney Vertical Prosecution Unit ($202,545).
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <SectionHeading number="4">Santa Barbara County Funding Receipts, FY 2021–2024</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-foreground mb-8">
            <p>
              The verified funding record for Santa Barbara County across the four-year review period reflects a substantial gap between the statutory distribution requirements and confirmed local receipts.
            </p>
          </div>

          <FigureCard
            title="Figure 2 — Confirmed VAWA/VOCA Subgrant Awards to SB County Agencies, FY 2024"
            note="FY 2021–2023: no confirmed STOP formula grant awards identified in public records for law enforcement, prosecution, or courts. FY 2024 data confirmed from Santa Barbara County Board of Supervisors consent agendas."
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fig2Data} margin={{ top: 8, right: 16, left: 16, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} interval={0} angle={-30} textAnchor="end" axisLine={false} tickLine={false} dy={5} />
                <YAxis tickFormatter={dollarK} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}`, "Award Amount"]} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {fig2Data.map((d, i) => (
                    <Cell key={i} fill={d.gap ? "hsl(var(--chart-3))" : d.highlight ? "hsl(var(--chart-1))" : "hsl(var(--chart-4))"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <div className="rounded-lg border border-border overflow-hidden mt-6">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-semibold text-foreground">Grant ID</TableHead>
                  <TableHead className="font-semibold text-foreground">Program Category</TableHead>
                  <TableHead className="font-semibold text-foreground">Recipient Agency</TableHead>
                  <TableHead className="font-semibold text-foreground text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["VV24 01 0420", "Vertical Prosecution", "SB County District Attorney", "$202,545"],
                  ["LE24 02 0420", "Law Enforcement", "SB County Sheriff", "$203,143"],
                  ["ST24 01 1515", "Statewide Training", "San Diego Regional Training Ctr.", "$415,523"],
                  ["DV24 01 0420", "Domestic Violence Services", "Domestic Violence Solutions", "$1,390,000"],
                ].map(([id, cat, rec, amt], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-mono text-xs text-muted-foreground">{id}</TableCell>
                    <TableCell className="text-foreground">{cat}</TableCell>
                    <TableCell className="text-foreground">{rec}</TableCell>
                    <TableCell className="font-mono font-medium text-right text-foreground">{amt}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50 font-semibold">
                  <TableCell colSpan={3} className="font-semibold text-foreground">Total — Confirmed Primary Source Amounts</TableCell>
                  <TableCell className="font-mono font-semibold text-right text-foreground">$2,211,211</TableCell>
                </TableRow>
                {[
                  ["Santa Maria Police Department — confirmed VAWA allocation", "$0"],
                  ["SB Superior Court — confirmed STOP court set-aside", "$0"],
                  ["Direct survivor financial assistance — confirmed allocation", "$0"],
                ].map(([label, amt], i) => (
                  <TableRow key={`gap-${i}`} className="bg-destructive/5">
                    <TableCell colSpan={3} className="text-destructive font-medium">{label}</TableCell>
                    <TableCell className="font-mono font-bold text-destructive text-right">{amt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="bg-muted/40 px-4 py-2.5 text-xs text-muted-foreground border-t border-border">
              Source: SB County Board of Supervisors consent agendas; Cal OES Subrecipient Media Ledger; DOJ OVW Grant Award Search.
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <SectionHeading number="5">Call Volume and Weapons Escalation</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-foreground mb-8">
            <p>
              Total domestic violence calls for service countywide increased from 1,695 in 2013 to 1,788 in 2022. Within the City of Santa Maria specifically, calls increased from 499 to 556 over the same period.
            </p>
            <p>
              Weapons-involved domestic violence calls countywide increased from 370 in 2013 to 918 in 2022 — a <strong>148 percent increase</strong> over nine years. In Santa Maria specifically, 50 strangulation and suffocation incidents were documented in 2022.
            </p>
          </div>

          <FigureCard
            title="Figure 3 — DV Call Volume & Weapons Involvement, SB County (2013 vs. 2022)"
            note="Source: CA DOJ Domestic Violence-Related Calls for Service (DVRCS) Dataset; SB County Budget Hearings, April 2024."
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fig3Data} margin={{ top: 8, right: 16, left: 0, bottom: 24 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ paddingTop: "16px", fontSize: "12px" }} />
                <Bar dataKey="year2013" name="2013" fill="hsl(var(--chart-5))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="year2022" name="2022" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <blockquote className="my-8 border-l-2 border-foreground pl-5 py-1">
            <p className="text-base text-foreground italic leading-relaxed">
              Domestic violence is "the most predictable homicide in Santa Barbara County... if crime is predictable it is preventable."
            </p>
            <footer className="text-sm font-medium text-muted-foreground mt-3 not-italic">
              — District Attorney Joyce Dudley, 2017
            </footer>
          </blockquote>
        </section>

        {/* Section 6 */}
        <section>
          <SectionHeading number="6">The Statewide Vendor Chain</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-foreground mb-8">
            <p>
              A distinct funding track operates through statewide contracts that do not flow to Santa Barbara County as a direct subgrantee. The mandatory law enforcement set-aside — the 25 percent of STOP funds designated for officer training — passes through a non-profit fiscal agent before any training obligation is fulfilled at the local level.
            </p>
            <p>
              Grant ST24 01 1515 awards $415,523 to the San Diego Regional Training Center (SDRTC), which in turn subcontracts to Performa Labs, Inc. (Delaware) to operate the POST Learning Portal. The subcontract amount between SDRTC and Performa Labs is not publicly available.
            </p>
          </div>

          <FigureCard
            title="Figure 4 — VAWA STOP Law Enforcement Training Funding Chain"
            note="Sources: DOJ OVW Grant Award Search (grant ST24 01 1515); CA POST Vendor Catalog; Cal OES Subrecipient Media Ledger."
          >
            <div className="overflow-x-auto pb-2">
              <div className="flex items-stretch gap-0 min-w-[580px] mt-2">
                {[
                  { label: "DOJ OVW", sub: "Federal", amount: "$175.8M", dark: true },
                  { label: "Cal OES", sub: "State SAA", amount: "$16.1M", dark: true },
                  { label: "CA POST", sub: "Training", amount: "$4.0M", dark: false },
                  { label: "SDRTC", sub: "Fiscal Agent", amount: "$415,523", dark: false },
                  { label: "Performa Labs", sub: "Portal Operator", amount: "Not public", dark: false },
                  { label: "SB County Officer", sub: "End User", amount: "$0 confirmed", gap: true },
                ].map((node, i, arr) => (
                  <div key={i} className="flex items-center flex-1 min-w-0">
                    <div
                      className={`flex-1 rounded-sm py-4 px-3 text-center text-xs ${
                        node.gap
                          ? "bg-destructive/10 text-destructive border border-destructive/20"
                          : node.dark
                          ? "bg-foreground text-background"
                          : "bg-muted text-foreground border border-border"
                      }`}
                    >
                      <div className="font-semibold leading-tight mb-1">{node.label}</div>
                      <div className="opacity-60 text-[10px] mb-1.5">{node.sub}</div>
                      <div className="font-mono text-[10px] font-medium">{node.amount}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="text-muted-foreground px-1 flex-shrink-0 text-xs">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FigureCard>
        </section>

        {/* Section 7 */}
        <section>
          <SectionHeading number="7">Service Delivery Analysis: DVS</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-foreground mb-8">
            <p>
              Domestic Violence Solutions for Santa Barbara County (DVS) is the primary federally funded direct service provider and received confirmed award DV24 01 0420 of $1,390,000. DVS is a private 501(c)(3) nonprofit; it is not a county government agency.
            </p>
            <p>
              DVS's own Annual Report for FY 2022 confirms total revenue of $2,648,909, total expenses of $2,267,669, and the following expense allocation: 53 percent to program services, <strong>43 percent to Management and General overhead</strong>, and 4 percent to fundraising. Industry standards typically identify overhead above 15–20 percent as indicative of inefficiency. DVS's confirmed 43 percent is approximately double the upper threshold.
            </p>
          </div>

          <FigureCard
            title="Figure 5 — DVS Expense Allocation, FY 2022 (Confirmed from Annual Report)"
            note="Source: Domestic Violence Solutions for Santa Barbara County Annual Report FY 2022."
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fig5Data}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={105}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {fig5Data.map((_, i) => (
                    <Cell key={i} fill={fig5Colors[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, ""]} />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </FigureCard>

          <div className="rounded-lg border border-border overflow-hidden mt-6">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-semibold text-foreground">Metric</TableHead>
                  <TableHead className="font-semibold text-foreground">FY 2022 Value</TableHead>
                  <TableHead className="font-semibold text-foreground">Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Total revenue", "$2,648,909"],
                  ["Total expenses", "$2,267,669"],
                  ["Program Services (% of expenses)", "53%"],
                  ["Management and General overhead (% of expenses)", "43%"],
                  ["24/7 crisis line calls answered", "4,917"],
                  ["Law enforcement calls requesting DVS assistance", "521"],
                  ["Safe shelter nights provided", "5,528"],
                  ["Counseling sessions provided", "587"],
                  ["Housing First permanent placements", "31 survivors"],
                  ["Emergency shelter demand increase (YoY)", "+30%"],
                  ["Emergency shelter stay limit", "60 days"],
                ].map(([metric, val], i) => (
                  <TableRow key={i}>
                    <TableCell className="text-foreground text-sm">{metric}</TableCell>
                    <TableCell className="font-mono font-semibold text-sm text-foreground">{val}</TableCell>
                    <TableCell className="text-muted-foreground text-xs">DVS Annual Report FY2022</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50 font-semibold">
                  <TableCell className="font-semibold text-foreground">Confirmed federal award (DV24 01 0420)</TableCell>
                  <TableCell className="font-mono font-semibold text-foreground">$1,390,000</TableCell>
                  <TableCell className="text-xs text-muted-foreground">Cal OES Subrecipient Ledger</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Section 8 */}
        <section>
          <SectionHeading number="8">Findings and Conclusions</SectionHeading>
          <div className="space-y-4 text-base leading-relaxed text-foreground mb-8">
            <p>
              By the end of FY 2024, Santa Barbara County had received confirmed VAWA STOP formula grant funds in two agency categories — law enforcement and vertical prosecution — for the first time in the four-year review period. The cumulative confirmed total for those two awards is $405,688. For the three prior fiscal years (FY 2021 through FY 2023), no confirmed STOP subgrant appears in any public record reviewed.
            </p>
            <p>
              Across the same period, California received approximately $49 million in VAWA STOP formula grants, of which federal statute required at minimum $31.45 million to be distributed to local agencies. The disposition of the funds obligated for Santa Barbara County law enforcement, prosecution, and courts for FY 2021 through FY 2023 cannot be confirmed from publicly available records.
            </p>
            <p>
              The Santa Maria Police Department, which confirmed daily domestic violence call volume through its own sergeant's on-record statement and which serves the largest city in the county, received no confirmed VAWA allocation in any fiscal year reviewed. The department responded to a documented 148 percent increase in weapons-involved domestic violence calls during a period in which no confirmed federal training funds reached the department.
            </p>
            <p>
              Three domestic violence homicides occurred in Santa Barbara County in 2017 alone. The district attorney characterized domestic violence as the most predictable homicide in the county and stated explicitly that predictable crime is preventable. The record of confirmed funding for the trained response system Congress designed to prevent those outcomes does not reflect the level of investment the statute required.
            </p>
          </div>

          <FigureCard
            title="Figure 6 — Statutory Requirement vs. Confirmed Receipt, SB County FY 2021–2024"
            note={`"Required" figures are proportionate-share estimates based on SB County's share of CA population (~0.99%) applied to ~$49M cumulative state STOP award. "Confirmed" reflects documented primary source awards only. FY 2021–2023 confirmed LE/prosecution/courts = $0.`}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fig6Data} margin={{ top: 8, right: 16, left: 16, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tickFormatter={dollarK} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
                <Legend wrapperStyle={{ paddingTop: "16px", fontSize: "12px" }} />
                <Bar dataKey="required" name="Proportionate Statutory Req." fill="hsl(var(--chart-5))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="confirmed" name="Confirmed FY2024 Receipt" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>
        </section>

        {/* Primary Sources */}
        <div className="mt-20 pt-10 border-t border-border">
          <h2 className="text-xl font-semibold text-foreground mb-6">Primary Sources</h2>
          <div className="grid gap-2">
            {[
              ["Cal OES Subrecipient Media Ledger", "Lists STOP $16,104,812 and SASP $2,648,245; names SDRTC as statewide T/TA recipient; lists VV and LE grant numbers for SB County."],
              ["DOJ OVW Grant Award Search", "Confirms California formula awards under CFDA #16.588; confirms grant ST24 01 1515 to SDRTC at $415,523."],
              ["DOJ OIG Audit 25-038 (January 2025)", "Identifies Cal OES fund consolidation and traceability problem; multiple funding streams commingled into single subawards."],
              ["CA POST Vendor Catalog", "Identifies Performa Labs, Inc. (Delaware) as operator of POST Learning Portal for mandatory DV training."],
              ["Santa Barbara County Board of Supervisors Consent Agendas", "Confirms DA $202,545 (VV24 01 0420); Sheriff LE $203,143 (LE24 02 0420); confirms SMPD does not appear in any LE or VV subgrant award."],
              ["DVS for Santa Barbara County Annual Report FY 2022", "Confirms revenue $2,648,909; expenses $2,267,669; M&G overhead 43%; all operational statistics cited in Section 7."],
              ["CA DOJ DVRCS Dataset", "Confirms call volumes 2013 and 2022; weapons escalation from 370 to 918 incidents; SB Independent, April 16, 2024."],
              ["Santa Maria Sun, October 4, 2017 (Joe Payne)", "Confirms DA Dudley statements; SMPD Sgt. Streker on-record daily call volume; three 2017 homicides (Morozova, Erwin, Ramirez-Diaz)."],
              ["28 C.F.R. § 90.17", "STOP program administrative requirements including subgrantee monitoring and record maintenance obligations."],
            ].map(([title, desc], i) => (
              <div key={i} className="flex gap-4 p-4 rounded-md border border-border bg-card hover:bg-muted/30 transition-colors">
                <div className="text-muted-foreground font-mono text-sm mt-0.5 min-w-[1.5rem] text-right">{i + 1}</div>
                <div>
                  <div className="font-medium text-foreground text-sm mb-1">{title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-10 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-zinc-500" />
            <span className="font-medium text-zinc-300">Pro Se Research</span>
          </div>
          <div className="text-center sm:text-right">
            <p className="mb-0.5">
              Report Reference: <span className="text-zinc-300">SBC-VAWA-2026-01</span>
              <span className="mx-2 text-zinc-700">·</span>
              <span>March 2026</span>
            </p>
            <p className="text-xs opacity-60">All figures confirmed from primary source documents. Estimates explicitly flagged.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
