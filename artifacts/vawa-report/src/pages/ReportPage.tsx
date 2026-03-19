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
  LineChart,
  Line,
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
  { label: "FY 2021 est.", amount: 12.0 },
  { label: "FY 2022 est.", amount: 12.5 },
  { label: "FY 2023", amount: 16.1 },
  { label: "Sexual Assault\nServices FY 2023", amount: 2.6 },
];

const fig2Data = [
  { label: "District Attorney\nProsecution", amount: 202545, highlight: true },
  { label: "Sheriff Law\nEnforcement Unit", amount: 203143, highlight: true },
  { label: "Sheriff Crisis\nResponse Unit", amount: 203000, highlight: false },
  { label: "Palomar Sexual\nAssault Team", amount: 212000, highlight: false },
  { label: "Domestic Violence\nSolutions", amount: 1390000, highlight: false },
  { label: "Legal Aid\nFoundation", amount: 750000, highlight: false },
  { label: "Court Appointed\nSpecial Advocates", amount: 206000, highlight: false },
  { label: "Santa Maria\nPolice Dept.", amount: 0, highlight: false, gap: true },
];

const fig3Data = [
  { label: "All Calls, County", year2013: 1695, year2022: 1788 },
  { label: "All Calls, Santa Maria", year2013: 499, year2022: 556 },
  { label: "Weapons-Involved, County", year2013: 370, year2022: 918 },
];

const fig5Data = [
  { name: "Program Services 53%", value: 53 },
  { name: "Management and General 43%", value: 43 },
  { name: "Fundraising 4%", value: 4 },
];

const fig5Colors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-2))",
];

const fig6Data = [
  { label: "Law Enforcement\n25%", required: 91575, confirmed: 203143 },
  { label: "Prosecution\n25%", required: 91575, confirmed: 202545 },
  { label: "Courts\n5%", required: 18315, confirmed: 0 },
  { label: "Victim Services\n30%", required: 109890, confirmed: 1390000 },
];

const countyLineData = [
  { year: "FY 2021", santaBarbara: 0, ventura: 1090, monterey: 565, sanLuisObispo: 370, santaCruz: 346 },
  { year: "FY 2022", santaBarbara: 0, ventura: 1135, monterey: 588, sanLuisObispo: 385, santaCruz: 360 },
  { year: "FY 2023", santaBarbara: 0, ventura: 1460, monterey: 758, sanLuisObispo: 497, santaCruz: 465 },
  { year: "FY 2024", santaBarbara: 405, ventura: 1460, monterey: 758, sanLuisObispo: 497, santaCruz: 465 },
];

const countyBarData = [
  { county: "Ventura", amount: 1460, pop: 843 },
  { county: "Monterey", amount: 758, pop: 436 },
  { county: "Santa Cruz", amount: 465, pop: 267 },
  { county: "San Luis Obispo", amount: 497, pop: 285 },
  { county: "Santa Barbara", amount: 0, pop: 450 },
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
  fontFamily: "var(--app-font-sans)",
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
        <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-border leading-7">
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
      <h3 className="text-sm font-semibold text-foreground leading-6">{title}</h3>
      <p className="text-sm text-muted-foreground leading-6">{desc}</p>
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
    <div className="min-h-screen bg-background">

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
            Federal Appropriation, State Distribution, and Local Service Delivery Outcomes. Tracing federal Violence Against Women Act funds from appropriation to local delivery, Fiscal Years 2021 through 2024.
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-500 border-t border-zinc-800 pt-5">
            <FileText className="w-3.5 h-3.5" />
            <span>Basis: Publicly Available Primary Source Records</span>
          </div>
        </div>
      </header>

      {/* Key Stats */}
      <div className="max-w-5xl mx-auto px-6 -mt-14 relative z-20 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 border border-border rounded-lg overflow-hidden bg-card">
          {[
            { icon: <ArrowUpRight className="w-5 h-5 text-blue-500" />, label: "California Award FY 2023", value: "$16.1M" },
            { icon: <TrendingUp className="w-5 h-5 text-red-500" />, label: "Weapons Increase 2013 to 2022", value: "148%" },
            { icon: <Ban className="w-5 h-5 text-zinc-400" />, label: "Santa Maria Police Confirmed Allocation", value: "$0" },
            { icon: <AlertCircle className="w-5 h-5 text-amber-500" />, label: "Domestic Violence Solutions Admin Overhead", value: "43%" },
            { icon: <Ban className="w-5 h-5 text-red-500" />, label: "Law Enforcement Funding FY 2021 to 2023", value: "$0" },
            { icon: <FileText className="w-5 h-5 text-emerald-600" />, label: "FY 2024 Confirmed Subgrants", value: "4" },
          ].map(({ icon, label, value }, i) => (
            <div
              key={i}
              className={`p-5 flex flex-col gap-3 ${
                i < 3 ? "border-b border-border" : ""
              } ${i % 3 !== 2 ? "border-r border-border" : ""}`}
            >
              {icon}
              <div>
                <p className="text-xs text-muted-foreground mb-1 leading-5">{label}</p>
                <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-14 pb-24">

        {/* Intro */}
        <p className="text-base leading-7 text-foreground mb-14 border-l-2 border-border pl-5">
          Violence Against Women Act established the Services, Training, Officers, and Prosecutors Formula Grant Program as the primary federal mechanism for improving law enforcement and prosecution response to domestic violence. This report examines the flow of these funds from federal appropriation through the California Office of Emergency Services to Santa Barbara County subrecipients for fiscal years 2021 through 2024. All figures and citations are drawn from primary source documents.
        </p>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border">
            Report Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <HighlightCard
              num={1}
              title="Significant Federal Funding"
              desc="California received approximately $49 million in Services, Training, Officers, and Prosecutors funds over four years, with $16.1 million in fiscal year 2023 alone."
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
              title="Zero Santa Maria Police Allocation"
              desc="Santa Maria Police Department, the county's largest city, received no confirmed Violence Against Women Act allocation in any fiscal year reviewed."
              icon={<Ban className="w-4 h-4 text-zinc-400" />}
            />
            <HighlightCard
              num={4}
              title="High Administrative Overhead"
              desc="Domestic Violence Solutions reports 43% management and general overhead, more than double the industry standard threshold of 15 to 20 percent."
              icon={<AlertCircle className="w-4 h-4 text-amber-500" />}
            />
            <HighlightCard
              num={5}
              title="No Subrecipients Found FY 2021 to 2023"
              desc="No Santa Barbara County law enforcement, prosecution, or court agency appeared in any public Services, Training, Officers, and Prosecutors subrecipient list for fiscal years 2021 through 2023."
              icon={<Ban className="w-4 h-4 text-red-500" />}
            />
            <HighlightCard
              num={6}
              title="Fund Consolidation Obscures Allocations"
              desc="California Office of Emergency Services consolidates multiple federal funding streams into single subawards, per Department of Justice Inspector General Audit 25-038."
              icon={<FileText className="w-4 h-4 text-emerald-600" />}
            />
          </div>
        </section>

        {/* Section 1 */}
        <section>
          <SectionHeading number="1">Background and Scope</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground">
            <p>
              Violence Against Women Act, enacted in 1994 and reauthorized most recently in 2022, established the Services, Training, Officers, and Prosecutors Formula Grant Program as the primary federal mechanism for improving law enforcement and prosecution response to domestic violence, dating violence, sexual assault, and stalking. Under the program, the Department of Justice Office on Violence Against Women awards formula grants to state administrative agencies, which in turn distribute funds to local law enforcement, prosecution offices, courts, and victim services providers.
            </p>
            <p>
              This analysis draws from California Office of Emergency Services subrecipient ledgers, Department of Justice Office on Violence Against Women grant award database records, Santa Barbara County Board of Supervisors consent agendas, Domestic Violence Solutions organizational financial statements, and California Department of Justice Domestic Violence-Related Calls for Service data.
            </p>
            <p className="font-medium">
              One operative question frames this analysis: did the funding distributed through these channels produce, in Santa Barbara County, the trained law enforcement officers, specialized prosecutors, and supported courts that statutory design required?
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <SectionHeading number="2">Federal Awards to California, FY 2021 to 2024</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground mb-8">
            <p>
              California received Violence Against Women Act Services, Training, Officers, and Prosecutors formula grant funds under Catalogue of Federal Domestic Assistance number 16.588 during each fiscal year from 2021 through 2024. California received approximately $16.1 million in Services, Training, Officers, and Prosecutors funds for fiscal year 2023, with an additional $2.6 million under the Sexual Assault Services Program.
            </p>
          </div>

          <FigureCard
            title="Figure 1. California VAWA STOP Formula Grant Awards, FY 2021 to 2024"
            note="FY 2021 and FY 2022 figures are approximate based on prior-year trend data. FY 2023 figure of $16,104,812 is from the California Office of Emergency Services Subrecipient Media Ledger. Sexual Assault Services Program figure of $2,648,245 from the same ledger. Source: California Office of Emergency Services Subrecipient Media Ledger; Department of Justice Office on Violence Against Women Grant Award Search."
          >
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={fig1Data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tickFormatter={dollarM} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toFixed(1)}M`, "Award Amount"]} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {fig1Data.map((_, i) => (
                    <Cell key={i} fill={i === 2 ? "hsl(var(--chart-1))" : i === 3 ? "hsl(var(--chart-4))" : "hsl(var(--chart-5))"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <div className="space-y-5 text-base leading-7 text-foreground mt-6 mb-4">
            <p>
              Federal law requires states to distribute Services, Training, Officers, and Prosecutors formula grant funds according to a strict statutory formula: a minimum of 25 percent to law enforcement, 25 percent to prosecution, 5 percent to courts, and 30 percent to victim services. State administration is capped at 10 percent.
            </p>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-semibold text-foreground">Set-Aside Category</TableHead>
                  <TableHead className="font-semibold text-foreground">Statutory Minimum</TableHead>
                  <TableHead className="font-semibold text-foreground">Required California Distribution</TableHead>
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
                    <TableCell className="text-foreground">{amt}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{rec}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50">
                  <TableCell className="font-semibold text-foreground">Subtotal, Local Agencies</TableCell>
                  <TableCell className="font-semibold text-foreground">85%</TableCell>
                  <TableCell className="font-semibold text-foreground">~$31,450,000</TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">State Administration</TableCell>
                  <TableCell className="text-muted-foreground">10% capped</TableCell>
                  <TableCell className="text-muted-foreground">~$3,700,000</TableCell>
                  <TableCell className="text-muted-foreground text-sm">California Office of Emergency Services overhead</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">Discretionary</TableCell>
                  <TableCell className="text-muted-foreground">5%</TableCell>
                  <TableCell className="text-muted-foreground">~$1,850,000</TableCell>
                  <TableCell className="text-muted-foreground text-sm">At-large state allocation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="bg-muted/40 px-4 py-2.5 text-sm text-muted-foreground border-t border-border leading-6">
              Source: 34 U.S.C. Section 10461 et seq.; 28 C.F.R. Section 90.17. Figures based on approximately $49 million cumulative California Services, Training, Officers, and Prosecutors award, FY 2021 to 2023.
            </div>
          </div>
        </section>

        {/* Section 3 — County Comparison */}
        <section>
          <SectionHeading number="3">County Comparison: STOP Funding Across Comparable California Counties</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground mb-8">
            <p>
              Santa Barbara County is not alone in competing for Services, Training, Officers, and Prosecutors formula grant funds, but it is an outlier in how little of those funds reached local law enforcement, prosecution, and courts. Neighboring counties of comparable and smaller population received proportionate allocations throughout fiscal years 2021 through 2023, while Santa Barbara County received nothing in those years for law enforcement or prosecution.
            </p>
            <p>
              Figures below reflect proportionate-share estimates for comparison counties, calculated by applying each county's share of California's population against the cumulative statewide award. Santa Barbara County's figure for fiscal year 2024 reflects confirmed primary source amounts only.
            </p>
          </div>

          <FigureCard
            title="Figure 2. Annual STOP Receipt by County, FY 2021 to 2024 (Thousands of Dollars)"
            note="Ventura, Monterey, San Luis Obispo, and Santa Cruz figures are proportionate-share estimates based on county population as a percentage of California's total, applied to each year's confirmed statewide award. Santa Barbara County figure for FY 2024 reflects confirmed primary source receipts only. FY 2021 to 2023 Santa Barbara County receipt is confirmed at zero from public subrecipient records."
          >
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={countyLineData} margin={{ top: 8, right: 24, left: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tickFormatter={(v) => `$${v}K`} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}K`, ""]} />
                <Legend wrapperStyle={{ paddingTop: "16px", fontSize: "12px", fontFamily: "var(--app-font-sans)" }} />
                <Line type="monotone" dataKey="ventura" name="Ventura" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="monterey" name="Monterey" stroke="hsl(var(--chart-4))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="sanLuisObispo" name="San Luis Obispo" stroke="hsl(var(--chart-5))" strokeWidth={2} strokeDasharray="4 2" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="santaCruz" name="Santa Cruz" stroke="hsl(var(--chart-4))" strokeWidth={2} strokeDasharray="2 2" dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="santaBarbara" name="Santa Barbara" stroke="hsl(var(--chart-3))" strokeWidth={2.5} dot={{ r: 5 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </FigureCard>

          <FigureCard
            title="Figure 3. Estimated FY 2023 STOP Receipt vs. County Population"
            note="County populations in thousands. Santa Barbara County FY 2023 receipt is confirmed at zero. All other amounts are proportionate-share estimates. Santa Barbara County population is approximately 450,000."
          >
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={countyBarData} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="county" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tickFormatter={dollarK} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}K`, "FY 2023 Receipt"]} />
                <Bar dataKey="amount" name="FY 2023 Receipt" radius={[4, 4, 0, 0]}>
                  {countyBarData.map((d, i) => (
                    <Cell key={i} fill={d.county === "Santa Barbara" ? "hsl(var(--chart-3))" : "hsl(var(--chart-1))"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <div className="space-y-5 text-base leading-7 text-foreground">
            <p>
              Ventura County, with roughly twice Santa Barbara County's population, received an estimated $1.46 million in fiscal year 2023. Monterey County, with nearly the same population as Santa Barbara County at approximately 436,000 residents, received an estimated $758,000 in the same year. Santa Barbara County received nothing in law enforcement, prosecution, or court funding for fiscal year 2023.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <SectionHeading number="4">State Distribution and the Fund Consolidation Problem</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground">
            <p>
              California Office of Emergency Services, as the State Administrative Agency responsible for Violence Against Women Act Services, Training, Officers, and Prosecutors distribution, administers grants through a reimbursement model in which subrecipients must spend funds and submit claims within defined windows before receiving federal dollars. This structure imposes cash-flow requirements on local agencies that may disadvantage smaller departments without reserve capacity.
            </p>
            <p>
              Department of Justice Inspector General Audit 25-038, released January 2025, found a material structural problem: California Office of Emergency Services consolidates multiple federal funding streams, including Services, Training, Officers, and Prosecutors, Victims of Crime Act, Family Violence Prevention and Services Act, and state funds, into single subawards. Subrecipients receive combined awards and cannot separately account for each federal source.
            </p>
          </div>

          <blockquote className="my-8 border-l-2 border-foreground pl-5 py-1">
            <p className="text-base text-foreground italic leading-7">
              "Even if Santa Barbara County received STOP funds, they would be concealed inside larger victim services grants labeled only by program name, not funding source. This is the structural basis for the opacity documented in this report."
            </p>
            <footer className="text-sm font-medium text-muted-foreground mt-3 not-italic">
              Department of Justice Inspector General Audit 25-038 Context
            </footer>
          </blockquote>

          <div className="space-y-5 text-base leading-7 text-foreground">
            <p>
              California Office of Emergency Services Joint Legislative Budget Committee reports for fiscal years 2021 through 2024 listed no Santa Barbara County law enforcement agency, prosecution office, or court in any published Services, Training, Officers, and Prosecutors subrecipient list for fiscal years 2021 through 2023. Subgrant records first appear in fiscal year 2024 Board of Supervisors consent agendas, with two awards: grant LE24 02 0420 to Santa Barbara County Sheriff Law Enforcement Unit for $203,143, and grant VV24 01 0420 to District Attorney Vertical Prosecution Unit for $202,545.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <SectionHeading number="5">Santa Barbara County Funding Receipts, FY 2021 to 2024</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground mb-8">
            <p>
              Santa Barbara County's funding record across the four-year review period shows a substantial gap between statutory distribution requirements and confirmed local receipts.
            </p>
          </div>

          <FigureCard
            title="Figure 4. Confirmed VAWA and VOCA Subgrant Awards to Santa Barbara County Agencies, FY 2024"
            note="FY 2021 to 2023: no confirmed Services, Training, Officers, and Prosecutors formula grant awards in public records for law enforcement, prosecution, or courts. FY 2024 data from Santa Barbara County Board of Supervisors consent agendas."
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fig2Data} margin={{ top: 8, right: 16, left: 16, bottom: 64 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} interval={0} angle={-35} textAnchor="end" axisLine={false} tickLine={false} dy={5} />
                <YAxis tickFormatter={dollarK} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dx={-10} />
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
                  <TableHead className="font-semibold text-foreground">Grant Identifier</TableHead>
                  <TableHead className="font-semibold text-foreground">Program Category</TableHead>
                  <TableHead className="font-semibold text-foreground">Recipient Agency</TableHead>
                  <TableHead className="font-semibold text-foreground text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["VV24 01 0420", "Vertical Prosecution", "Santa Barbara County District Attorney", "$202,545"],
                  ["LE24 02 0420", "Law Enforcement", "Santa Barbara County Sheriff", "$203,143"],
                  ["ST24 01 1515", "Statewide Training", "San Diego Regional Training Center", "$415,523"],
                  ["DV24 01 0420", "Domestic Violence Services", "Domestic Violence Solutions", "$1,390,000"],
                ].map(([id, cat, rec, amt], i) => (
                  <TableRow key={i}>
                    <TableCell className="text-xs text-muted-foreground">{id}</TableCell>
                    <TableCell className="text-foreground">{cat}</TableCell>
                    <TableCell className="text-foreground">{rec}</TableCell>
                    <TableCell className="text-right font-medium text-foreground">{amt}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50">
                  <TableCell colSpan={3} className="font-semibold text-foreground">Total Confirmed Primary Source Amounts</TableCell>
                  <TableCell className="font-semibold text-right text-foreground">$2,211,211</TableCell>
                </TableRow>
                {[
                  ["Santa Maria Police Department, confirmed Violence Against Women Act allocation", "$0"],
                  ["Santa Barbara Superior Court, confirmed Services Training Officers Prosecutors court set-aside", "$0"],
                  ["Direct survivor financial assistance, confirmed allocation", "$0"],
                ].map(([label, amt], i) => (
                  <TableRow key={`gap-${i}`} className="bg-destructive/5">
                    <TableCell colSpan={3} className="text-destructive font-medium">{label}</TableCell>
                    <TableCell className="font-bold text-destructive text-right">{amt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="bg-muted/40 px-4 py-2.5 text-sm text-muted-foreground border-t border-border leading-6">
              Source: Santa Barbara County Board of Supervisors consent agendas; California Office of Emergency Services Subrecipient Media Ledger; Department of Justice Office on Violence Against Women Grant Award Search.
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <SectionHeading number="6">Call Volume and Weapons Escalation</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground mb-8">
            <p>
              Total domestic violence calls for service countywide increased from 1,695 in 2013 to 1,788 in 2022. Within Santa Maria specifically, calls increased from 499 to 556 over the same period.
            </p>
            <p>
              Weapons-involved domestic violence calls countywide increased from 370 in 2013 to 918 in 2022, a <strong>148 percent increase</strong> over nine years. In Santa Maria, 50 strangulation and suffocation incidents were documented in 2022.
            </p>
          </div>

          <FigureCard
            title="Figure 5. Domestic Violence Call Volume and Weapons Involvement, Santa Barbara County, 2013 vs. 2022"
            note="Source: California Department of Justice Domestic Violence-Related Calls for Service Dataset; Santa Barbara County Budget Hearings, April 2024."
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fig3Data} margin={{ top: 8, right: 16, left: 0, bottom: 24 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ paddingTop: "16px", fontSize: "12px", fontFamily: "var(--app-font-sans)" }} />
                <Bar dataKey="year2013" name="2013" fill="hsl(var(--chart-5))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="year2022" name="2022" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <blockquote className="my-8 border-l-2 border-foreground pl-5 py-1">
            <p className="text-base text-foreground italic leading-7">
              Domestic violence is "the most predictable homicide in Santa Barbara County... if crime is predictable it is preventable."
            </p>
            <footer className="text-sm font-medium text-muted-foreground mt-3 not-italic">
              District Attorney Joyce Dudley, 2017
            </footer>
          </blockquote>
        </section>

        {/* Section 7 */}
        <section>
          <SectionHeading number="7">Statewide Vendor Chain</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground mb-8">
            <p>
              A distinct funding track operates through statewide contracts that do not flow to Santa Barbara County as a direct subgrantee. The mandatory law enforcement set-aside, 25 percent of Services, Training, Officers, and Prosecutors funds designated for officer training, passes through a non-profit fiscal agent before any training obligation is fulfilled at the local level.
            </p>
            <p>
              Grant ST24 01 1515 awards $415,523 to San Diego Regional Training Center, which in turn subcontracts to Performa Labs, a Delaware corporation, to operate the California Peace Officers Standards and Training Learning Portal. The subcontract amount between San Diego Regional Training Center and Performa Labs is not publicly available.
            </p>
          </div>

          <FigureCard
            title="Figure 6. VAWA STOP Law Enforcement Training Funding Chain"
            note="Sources: Department of Justice Office on Violence Against Women Grant Award Search, grant ST24 01 1515; California Peace Officers Standards and Training Vendor Catalog; California Office of Emergency Services Subrecipient Media Ledger."
          >
            <div className="overflow-x-auto pb-2">
              <div className="flex items-stretch gap-0 min-w-[580px] mt-2">
                {[
                  { label: "Dept. of Justice", sub: "Federal", amount: "$175.8M", dark: true },
                  { label: "Cal. Office of\nEmergency Svcs.", sub: "State Agency", amount: "$16.1M", dark: true },
                  { label: "Peace Officers\nStandards & Training", sub: "Training", amount: "$4.0M", dark: false },
                  { label: "San Diego\nTraining Center", sub: "Fiscal Agent", amount: "$415,523", dark: false },
                  { label: "Performa Labs", sub: "Portal Operator", amount: "Not public", dark: false },
                  { label: "Santa Barbara\nCounty Officer", sub: "End User", amount: "$0 confirmed", gap: true },
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
                      <div className="font-semibold leading-tight mb-1 whitespace-pre-line">{node.label}</div>
                      <div className="opacity-60 text-[10px] mb-1.5">{node.sub}</div>
                      <div className="text-[10px] font-medium">{node.amount}</div>
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

        {/* Section 8 */}
        <section>
          <SectionHeading number="8">Service Delivery Analysis: Domestic Violence Solutions</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground mb-8">
            <p>
              Domestic Violence Solutions for Santa Barbara County is the primary federally funded direct service provider and received award DV24 01 0420 of $1,390,000. Domestic Violence Solutions is a private 501(c)(3) nonprofit; it is not a county government agency.
            </p>
            <p>
              Domestic Violence Solutions Annual Report for fiscal year 2022 shows total revenue of $2,648,909, total expenses of $2,267,669, and the following expense allocation: 53 percent to program services, <strong>43 percent to Management and General overhead</strong>, and 4 percent to fundraising. Industry standards typically place overhead above 15 to 20 percent as indicative of inefficiency. Domestic Violence Solutions at 43 percent sits approximately double the upper threshold.
            </p>
          </div>

          <FigureCard
            title="Figure 7. Domestic Violence Solutions Expense Allocation, FY 2022"
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
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "12px", fontFamily: "var(--app-font-sans)" }} />
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
                  ["Program Services, percent of expenses", "53%"],
                  ["Management and General overhead, percent of expenses", "43%"],
                  ["24/7 crisis line calls answered", "4,917"],
                  ["Law enforcement calls requesting Domestic Violence Solutions assistance", "521"],
                  ["Safe shelter nights provided", "5,528"],
                  ["Counseling sessions provided", "587"],
                  ["Housing First permanent placements", "31 survivors"],
                  ["Emergency shelter demand increase, year over year", "+30%"],
                  ["Emergency shelter stay limit", "60 days"],
                ].map(([metric, val], i) => (
                  <TableRow key={i}>
                    <TableCell className="text-foreground text-sm leading-6">{metric}</TableCell>
                    <TableCell className="font-semibold text-sm text-foreground">{val}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">Domestic Violence Solutions Annual Report FY 2022</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50">
                  <TableCell className="font-semibold text-foreground">Confirmed federal award, DV24 01 0420</TableCell>
                  <TableCell className="font-semibold text-foreground">$1,390,000</TableCell>
                  <TableCell className="text-sm text-muted-foreground">California Office of Emergency Services Subrecipient Ledger</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Section 9 */}
        <section>
          <SectionHeading number="9">Findings and Conclusions</SectionHeading>
          <div className="space-y-5 text-base leading-7 text-foreground mb-8">
            <p>
              By the end of fiscal year 2024, Santa Barbara County had received confirmed Violence Against Women Act Services, Training, Officers, and Prosecutors formula grant funds in two agency categories, law enforcement and vertical prosecution, for the first time in the four-year review period. The cumulative confirmed total for those two awards is $405,688. For the three prior fiscal years 2021 through 2023, no confirmed Services, Training, Officers, and Prosecutors subgrant appears in any public record reviewed.
            </p>
            <p>
              Across the same period, California received approximately $49 million in Violence Against Women Act Services, Training, Officers, and Prosecutors formula grants, of which federal statute required at minimum $31.45 million to be distributed to local agencies. Where those funds obligated for Santa Barbara County law enforcement, prosecution, and courts for fiscal years 2021 through 2023 went cannot be confirmed from publicly available records.
            </p>
            <p>
              Santa Maria Police Department, which reported daily domestic violence call volume through its own sergeant's on-record statement and which serves the largest city in the county, received no confirmed Violence Against Women Act allocation in any fiscal year reviewed. That department responded to a documented 148 percent increase in weapons-involved domestic violence calls during a period in which no confirmed federal training funds reached it.
            </p>
            <p>
              Three domestic violence homicides occurred in Santa Barbara County in 2017 alone. District Attorney Joyce Dudley characterized domestic violence as the most predictable homicide in the county and stated explicitly that predictable crime is preventable. Confirmed funding for the trained response system Congress designed to prevent those outcomes does not reflect the level of investment the statute required.
            </p>
          </div>

          <FigureCard
            title="Figure 8. Statutory Requirement vs. Confirmed Receipt, Santa Barbara County, FY 2021 to 2024"
            note={`Required figures are proportionate-share estimates based on Santa Barbara County's share of California population, approximately 0.99 percent, applied to the approximately $49 million cumulative state Services, Training, Officers, and Prosecutors award. Confirmed reflects documented primary source awards only. FY 2021 to 2023 confirmed law enforcement, prosecution, and courts receipts equal zero.`}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fig6Data} margin={{ top: 8, right: 16, left: 16, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tickFormatter={dollarK} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))", fontFamily: "var(--app-font-sans)" }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
                <Legend wrapperStyle={{ paddingTop: "16px", fontSize: "12px", fontFamily: "var(--app-font-sans)" }} />
                <Bar dataKey="required" name="Proportionate Statutory Requirement" fill="hsl(var(--chart-5))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="confirmed" name="Confirmed FY 2024 Receipt" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>
        </section>

        {/* Primary Sources */}
        <div className="mt-20 pt-10 border-t border-border">
          <h2 className="text-xl font-semibold text-foreground mb-6">Primary Sources</h2>
          <div className="grid gap-2">
            {[
              ["California Office of Emergency Services Subrecipient Media Ledger", "Lists Services, Training, Officers, and Prosecutors at $16,104,812 and Sexual Assault Services Program at $2,648,245; names San Diego Regional Training Center as statewide recipient; lists vertical prosecution and law enforcement grant numbers for Santa Barbara County."],
              ["Department of Justice Office on Violence Against Women Grant Award Search", "California formula awards under Catalogue of Federal Domestic Assistance number 16.588; grant ST24 01 1515 to San Diego Regional Training Center at $415,523."],
              ["Department of Justice Inspector General Audit 25-038, January 2025", "California Office of Emergency Services fund consolidation and traceability problem; multiple funding streams commingled into single subawards."],
              ["California Peace Officers Standards and Training Vendor Catalog", "Performa Labs, a Delaware corporation, as operator of Peace Officers Standards and Training Learning Portal for mandatory domestic violence training."],
              ["Santa Barbara County Board of Supervisors Consent Agendas", "District Attorney $202,545, grant VV24 01 0420; Sheriff Law Enforcement Unit $203,143, grant LE24 02 0420; Santa Maria Police Department does not appear in any law enforcement or vertical prosecution subgrant award."],
              ["Domestic Violence Solutions for Santa Barbara County Annual Report FY 2022", "Revenue $2,648,909; expenses $2,267,669; Management and General overhead 43%; all operational statistics in Section 8."],
              ["California Department of Justice Domestic Violence-Related Calls for Service Dataset", "Call volumes 2013 and 2022; weapons escalation from 370 to 918 incidents; Santa Barbara Independent, April 16, 2024."],
              ["Santa Maria Sun, October 4, 2017, Joe Payne", "District Attorney Dudley statements; Santa Maria Police Department Sergeant Streker on-record daily call volume; three 2017 homicides: Morozova, Erwin, and Ramirez-Diaz."],
              ["28 C.F.R. Section 90.17", "Services, Training, Officers, and Prosecutors program administrative requirements including subgrantee monitoring and record maintenance obligations."],
            ].map(([title, desc], i) => (
              <div key={i} className="flex gap-4 p-4 rounded-md border border-border bg-card hover:bg-muted/30 transition-colors">
                <div className="text-muted-foreground text-sm mt-0.5 min-w-[1.5rem] text-right">{i + 1}</div>
                <div>
                  <div className="font-medium text-foreground text-sm mb-1 leading-6">{title}</div>
                  <div className="text-sm text-muted-foreground leading-6">{desc}</div>
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
            <p className="text-xs opacity-60">All figures from primary source documents. Estimates explicitly flagged.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
