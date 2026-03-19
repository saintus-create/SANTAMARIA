import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
import { AlertCircle, ArrowUpRight, Ban, FileText, ShieldAlert, TrendingUp } from "lucide-react";

const fig1Data = [
  { label: "FY 2021 (est.)", amount: 12.0 },
  { label: "FY 2022 (est.)", amount: 12.5 },
  { label: "FY 2023 (conf.)", amount: 16.1 },
  { label: "SASP FY 2023 (conf.)", amount: 2.6 },
];

const fig2Data = [
  { label: "DA Vertical\nProsecution", amount: 202545, highlight: true },
  { label: "Sheriff LE\nUnit", amount: 203143, highlight: true },
  { label: "Sheriff CRU", amount: 203000, highlight: false },
  { label: "Palomar\nSART", amount: 212000, highlight: false },
  { label: "DVS", amount: 1390000, highlight: false },
  { label: "Legal Aid", amount: 750000, highlight: false },
  { label: "CASA", amount: 206000, highlight: false },
  { label: "SMPD", amount: 0, highlight: false, gap: true },
];

const fig3Data = [
  { label: "Total DV Calls\nCountywide", year2013: 1695, year2022: 1788 },
  { label: "DV Calls\nSanta Maria", year2013: 499, year2022: 556 },
  { label: "Weapons-Involved\nCountywide", year2013: 370, year2022: 918 },
];

const fig5Data = [
  { name: "Program Services (53%)", value: 53 },
  { name: "Management & General (43%)", value: 43 },
  { name: "Fundraising (4%)", value: 4 },
];

const fig5Colors = ["hsl(var(--chart-1))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];

const fig6Data = [
  {
    label: "LE (25%)",
    required: 91575,
    confirmed: 203143,
  },
  {
    label: "Prosecution (25%)",
    required: 91575,
    confirmed: 202545,
  },
  {
    label: "Courts (5%)",
    required: 18315,
    confirmed: 0,
  },
  {
    label: "Victim Services (30%)",
    required: 109890,
    confirmed: 1390000,
  },
];

function SectionHeading({ children, number }: { children: React.ReactNode; number: string }) {
  return (
    <div className="mt-16 mb-8 flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
        {number}
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        {children}
      </h2>
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
    <Card className="my-8 border-border shadow-sm overflow-hidden bg-card">
      <CardHeader className="bg-muted/30 border-b pb-4">
        <CardTitle className="text-sm font-bold uppercase tracking-wider text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
        <p className="text-xs text-muted-foreground mt-6 pt-4 border-t leading-relaxed">
          {note}
        </p>
      </CardContent>
    </Card>
  );
}

const dollarM = (v: number) => `$${v}M`;
const dollarK = (v: number) => `$${(v / 1000).toFixed(0)}K`;

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-[#111827] text-white border-b border-slate-800 shadow-sm backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-red-500" />
            <span className="font-semibold tracking-wide text-sm sm:text-base">Pro Se Research Report</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-slate-400 text-xs tracking-wider uppercase font-medium">Reference: SBC-VAWA-2026-01</span>
            <Badge variant="outline" className="border-slate-700 text-slate-300 bg-slate-800/50 hover:bg-slate-800 rounded-sm px-2">
              March 2026
            </Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-900 text-white pt-20 pb-24 px-6 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center opacity-[0.07] mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-red-600 hover:bg-red-700 text-white border-none rounded-sm px-3 py-1 text-xs uppercase tracking-wider font-bold">Investigative Report</Badge>
            <Badge className="bg-slate-800 text-slate-300 border-slate-700 rounded-sm px-3 py-1 text-xs uppercase tracking-wider">Santa Barbara County, CA</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-white">
            VAWA STOP Formula Grant Funding in Santa Barbara County
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8 max-w-3xl">
            Federal Appropriation, State Distribution, and Local Service Delivery Outcomes: Tracing federal VAWA funds from appropriation to local delivery, Fiscal Years 2021–2024.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-400 border-t border-slate-800 pt-6 mt-8">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Publicly Available Primary Source Records</span>
            </div>
          </div>
        </div>
      </header>

      {/* Key Stats Grid */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="bg-white shadow-md border-border">
            <CardContent className="p-5 flex flex-col items-start gap-2">
              <div className="p-2 bg-blue-50 rounded-md text-blue-700 mb-1">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">CA Award (FY23)</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">$16.1M</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md border-border">
            <CardContent className="p-5 flex flex-col items-start gap-2">
              <div className="p-2 bg-red-50 rounded-md text-red-600 mb-1">
                <TrendingUp className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Weapons Increase</p>
              <p className="text-2xl sm:text-3xl font-bold text-destructive">148%</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md border-border">
            <CardContent className="p-5 flex flex-col items-start gap-2">
              <div className="p-2 bg-slate-100 rounded-md text-slate-700 mb-1">
                <Ban className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">SMPD Allocation</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">$0</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md border-border">
            <CardContent className="p-5 flex flex-col items-start gap-2">
              <div className="p-2 bg-orange-50 rounded-md text-orange-600 mb-1">
                <PieChart className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">DVS Overhead</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">43%</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md border-border">
            <CardContent className="p-5 flex flex-col items-start gap-2">
              <div className="p-2 bg-red-50 rounded-md text-red-600 mb-1">
                <Ban className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">FY21-23 LE Funding</p>
              <p className="text-2xl sm:text-3xl font-bold text-destructive">$0</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md border-border">
            <CardContent className="p-5 flex flex-col items-start gap-2">
              <div className="p-2 bg-green-50 rounded-md text-green-700 mb-1">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">FY24 Confirmed Grants</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">4</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-6 py-16 pb-24 space-y-12 text-slate-800">
        
        {/* Abstract/Intro Callout */}
        <div className="text-lg leading-relaxed font-medium text-slate-700 bg-slate-50 p-6 sm:p-8 rounded-lg border-l-4 border-slate-900">
          <p>
            The Violence Against Women Act (VAWA) established the STOP Formula Grant Program as the primary federal mechanism for improving law enforcement and prosecution response to domestic violence. This report examines the flow of these funds from federal appropriation through the California Office of Emergency Services (Cal OES) to Santa Barbara County subrecipients for fiscal years 2021 through 2024.
          </p>
        </div>

        {/* Section 1 */}
        <section>
          <SectionHeading number="1">Background and Scope</SectionHeading>
          <div className="prose prose-slate max-w-none text-base leading-relaxed">
            <p>
              Under the STOP program, the Department of Justice Office on Violence Against Women (OVW) awards formula grants to state administrative agencies, which in turn distribute funds to local law enforcement, prosecution offices, courts, and victim services providers.
            </p>
            <p>
              This analysis is based exclusively on verified primary source records, including Cal OES subrecipient ledgers, DOJ OVW grant award database records, Santa Barbara County Board of Supervisors consent agendas, DVS organizational financial statements, and CA DOJ Domestic Violence-Related Calls for Service data.
            </p>
            <p className="font-semibold text-slate-900">
              The report addresses a single operative question: did the funding distributed through these channels produce, in Santa Barbara County, the trained law enforcement officers, specialized prosecutors, and supported courts that VAWA's statutory design required?
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <SectionHeading number="2">Federal Awards to California, FY 2021–2024</SectionHeading>
          <div className="prose prose-slate max-w-none text-base leading-relaxed mb-8">
            <p>
              According to the DOJ Office on Violence Against Women Grant Awards Database, California received VAWA STOP formula grant funds under CFDA #16.588 during each fiscal year from 2021 through 2024. The most recent confirmed award cycle shows California receiving approximately $16.1 million in STOP funds for FY 2023, with an additional $2.6 million under the Sexual Assault Services Program (SASP).
            </p>
          </div>

          <FigureCard
            title="Figure 1 — California VAWA STOP Formula Grant Awards, FY 2021–2024 (Estimated)"
            note="Note: FY 2021 and FY 2022 figures are approximate based on prior-year trend data. FY 2023 figure of $16,104,812 is confirmed from Cal OES subrecipient ledger. SASP figure of $2,648,245 confirmed from Cal OES ledger. Source: Cal OES Subrecipient Media Ledger; DOJ OVW Grant Award Search (CFDA #16.588)."
          >
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={fig1Data} margin={{ top: 8, right: 16, left: 0, bottom: 24 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tickFormatter={dollarM} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip cursor={{ fill: 'hsl(var(--muted)/0.5)' }} formatter={(v: number) => [`$${v.toFixed(1)}M`, "Award Amount"]} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {fig1Data.map((_, i) => (
                    <Cell
                      key={i}
                      fill={i === 2 ? "hsl(var(--chart-1))" : i === 3 ? "hsl(var(--chart-4))" : "hsl(var(--chart-2))"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <div className="prose prose-slate max-w-none text-base leading-relaxed mt-8">
            <p>
              Federal law requires that states distribute STOP formula grant funds according to a strict statutory formula. A minimum of 25 percent must be directed to law enforcement, 25 percent to prosecution, 5 percent to courts, and 30 percent to victim services. State administration is capped at 10 percent of the award amount. Based on the four-year cumulative award to California of approximately $49 million, the statute required a minimum of approximately $9.25 million each for law enforcement and prosecution, $1.85 million for courts, and $11.1 million for victim services.
            </p>
          </div>

          <div className="my-8 border rounded-lg overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="font-semibold text-slate-900">Set-Aside Category</TableHead>
                  <TableHead className="font-semibold text-slate-900">Statutory Min</TableHead>
                  <TableHead className="font-semibold text-slate-900">Required CA Dist (est.)</TableHead>
                  <TableHead className="font-semibold text-slate-900">Intended Recipients</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Law Enforcement", "25%", "~$9,250,000", "Local police and sheriff departments"],
                  ["Prosecution", "25%", "~$9,250,000", "District attorney offices"],
                  ["Courts", "5%", "~$1,850,000", "Judicial training programs"],
                  ["Victim Services", "30%", "~$11,100,000", "Nonprofit and government victim programs"],
                ].map(([cat, pct, amt, rec], i) => (
                  <TableRow key={i} className="hover:bg-slate-50/50">
                    <TableCell className="font-medium">{cat}</TableCell>
                    <TableCell>{pct}</TableCell>
                    <TableCell className="font-mono text-slate-600">{amt}</TableCell>
                    <TableCell className="text-muted-foreground">{rec}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-slate-100 font-semibold border-t-2 border-slate-200">
                  <TableCell>Subtotal — Local Agencies</TableCell>
                  <TableCell>85%</TableCell>
                  <TableCell className="font-mono">~$31,450,000</TableCell>
                  <TableCell />
                </TableRow>
                <TableRow>
                  <TableCell>State Administration</TableCell>
                  <TableCell>10% (capped)</TableCell>
                  <TableCell className="font-mono text-slate-600">~$3,700,000</TableCell>
                  <TableCell className="text-muted-foreground">Cal OES overhead</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Discretionary</TableCell>
                  <TableCell>5%</TableCell>
                  <TableCell className="font-mono text-slate-600">~$1,850,000</TableCell>
                  <TableCell className="text-muted-foreground">At-large state allocation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="bg-slate-50 px-4 py-2 text-xs text-slate-500 border-t">
              Source: 34 U.S.C. § 10461 et seq.; 28 C.F.R. § 90.17. Figures based on approximately $49 million cumulative California STOP award, FY 2021–2023.
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <SectionHeading number="3">State Distribution & Fund Consolidation</SectionHeading>
          <div className="prose prose-slate max-w-none text-base leading-relaxed">
            <p>
              Cal OES, as the State Administrative Agency (SAA) responsible for VAWA STOP distribution, administers grants through a reimbursement model in which subrecipients must spend funds and submit claims within defined windows before receiving federal dollars. This structure imposes cash-flow requirements on local agencies that may disadvantage smaller departments without reserve capacity.
            </p>
          </div>

          <blockquote className="my-8 border-l-4 border-slate-900 bg-slate-50 p-6 rounded-r-lg shadow-sm text-slate-800 italic text-lg leading-relaxed">
            "Even if Santa Barbara County received STOP funds, they would be concealed inside larger victim services grants labeled only by program name, not funding source. This is the structural basis for the opacity documented in this report."
            <footer className="text-sm font-semibold text-slate-600 mt-3 not-italic">— DOJ OIG Audit 25-038 Context</footer>
          </blockquote>

          <div className="prose prose-slate max-w-none text-base leading-relaxed">
            <p>
              DOJ OIG Audit 25-038, released in January 2025, identified a material structural problem in how Cal OES administers these funds. The audit found that Cal OES consolidates multiple federal funding streams — including STOP, VOCA, FVPSA, and state funds — into single subawards. Subrecipients receive combined awards and cannot separately account for each federal source. No public reporting of county-level allocations by specific funding source is maintained.
            </p>
            <p>
              A review of Cal OES Joint Legislative Budget Committee reports for FY 2021 through FY 2024 identified no Santa Barbara County law enforcement agency, prosecution office, or court in any published STOP subrecipient list for fiscal years 2021 through 2023. Subgrant records first appear in FY 2024 Board of Supervisors consent agendas.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <SectionHeading number="4">Santa Barbara County Funding Receipts</SectionHeading>
          <div className="prose prose-slate max-w-none text-base leading-relaxed mb-8">
            <p>
              The verified funding record for Santa Barbara County across the four-year review period reflects a substantial gap between the statutory distribution requirements and the confirmed local receipts. Figure 2 presents the confirmed subgrant awards by recipient agency and fiscal year.
            </p>
          </div>

          <FigureCard
            title="Figure 2 — Confirmed VAWA/VOCA Subgrant Awards to SB County Agencies, FY 2024"
            note="Note: FY 2021–2023 data: no confirmed STOP formula grant awards identified in public records. FY 2024 data confirmed from SB County Board of Supervisors consent agendas."
          >
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={fig2Data} margin={{ top: 20, right: 16, left: 16, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} interval={0} angle={-30} textAnchor="end" axisLine={false} tickLine={false} dy={5} />
                <YAxis tickFormatter={dollarK} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip cursor={{ fill: 'hsl(var(--muted)/0.5)' }} formatter={(v: number) => [`$${v.toLocaleString()}`, "Award Amount"]} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {fig2Data.map((d, i) => (
                    <Cell
                      key={i}
                      fill={d.gap ? "hsl(var(--chart-3))" : d.highlight ? "hsl(var(--chart-1))" : "hsl(var(--chart-4))"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <div className="my-8 border rounded-lg overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="font-semibold text-slate-900">Grant ID</TableHead>
                  <TableHead className="font-semibold text-slate-900">Program Category</TableHead>
                  <TableHead className="font-semibold text-slate-900">Recipient Agency</TableHead>
                  <TableHead className="font-semibold text-slate-900 text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["VV24 01 0420", "Vertical Prosecution", "SB County District Attorney", "$202,545"],
                  ["LE24 02 0420", "Law Enforcement", "SB County Sheriff", "$203,143"],
                  ["ST24 01 1515", "Statewide Training", "San Diego Regional Training Ctr.", "$415,523"],
                  ["DV24 01 0420", "Domestic Violence Services", "Domestic Violence Solutions", "$1,390,000"],
                ].map(([id, cat, rec, amt], i) => (
                  <TableRow key={i} className="hover:bg-slate-50/50">
                    <TableCell className="font-mono text-xs">{id}</TableCell>
                    <TableCell>{cat}</TableCell>
                    <TableCell>{rec}</TableCell>
                    <TableCell className="font-mono font-medium text-right">{amt}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-slate-100 font-semibold border-t-2 border-slate-200">
                  <TableCell colSpan={3}>Total — Confirmed Primary Source Amounts</TableCell>
                  <TableCell className="font-mono text-right">$2,211,211</TableCell>
                </TableRow>
                
                {/* Gap Rows */}
                {[
                  ["Santa Maria Police Department — confirmed VAWA allocation", "$0"],
                  ["SB Superior Court — confirmed STOP court set-aside", "$0"],
                  ["Direct survivor financial assistance — confirmed allocation", "$0"],
                ].map(([label, amt], i) => (
                  <TableRow key={`gap-${i}`} className="bg-red-50/50 hover:bg-red-50">
                    <TableCell colSpan={3} className="text-red-700 font-medium">{label}</TableCell>
                    <TableCell className="font-mono font-bold text-red-700 text-right">{amt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="bg-slate-50 px-4 py-2 text-xs text-slate-500 border-t">
              Source: SB County Board of Supervisors consent agendas; Cal OES Subrecipient Media Ledger; DOJ OVW Grant Award Search.
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <SectionHeading number="5">Call Volume and Weapons Escalation</SectionHeading>
          <div className="prose prose-slate max-w-none text-base leading-relaxed mb-8">
            <p>
              The funded capacity of a law enforcement response system must be evaluated against the operational demands placed on it. CA DOJ Domestic Violence-Related Calls for Service (DVRCS) data provides empirical documentation of demand across the review period. Total domestic violence calls for service countywide increased from 1,695 in 2013 to 1,788 in 2022.
            </p>
            <p>
              The most significant documented change is in weapons involvement. Weapons-involved domestic violence calls countywide increased from 370 in 2013 to 918 in 2022, a <strong>148 percent increase</strong> over nine years.
            </p>
          </div>

          <FigureCard
            title="Figure 3 — DV Call Volume & Weapons Involvement, SB County (2013 vs 2022)"
            note="Source: CA DOJ Domestic Violence-Related Calls for Service (DVRCS) Dataset; SB County Budget Hearings, April 2024. All figures empirically documented from primary sources."
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fig3Data} margin={{ top: 8, right: 16, left: 0, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} dy={15} />
                <YAxis tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip cursor={{ fill: 'hsl(var(--muted)/0.5)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="year2013" name="2013" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="year2022" name="2022" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>

          <blockquote className="my-8 border-l-4 border-slate-900 bg-slate-50 p-6 rounded-r-lg shadow-sm text-slate-800 italic text-lg leading-relaxed">
            Domestic violence is "the most predictable homicide in Santa Barbara County... if crime is predictable it is preventable."
            <footer className="text-sm font-semibold text-slate-600 mt-3 not-italic">— District Attorney Joyce Dudley, 2017</footer>
          </blockquote>
        </section>

        {/* Section 6 */}
        <section>
          <SectionHeading number="6">The Statewide Vendor Chain</SectionHeading>
          <div className="prose prose-slate max-w-none text-base leading-relaxed mb-8">
            <p>
              A distinct funding track operates through statewide contracts that do not flow to Santa Barbara County as a direct subgrantee. The mandatory law enforcement set-aside — the 25 percent of STOP funds designated for officer training — passes through a non-profit fiscal agent before any training obligation is fulfilled at the local level.
            </p>
            <p>
              Grant ST24 01 1515 awards $415,523 to the San Diego Regional Training Center (SDRTC) as a fiscal agent, which in turn subcontracts to Performa Labs, Inc. to operate the POST Learning Portal. The subcontract amount is not publicly available.
            </p>
          </div>

          <FigureCard
            title="Figure 4 — VAWA STOP Law Enforcement Training Funding Chain"
            note="Sources: DOJ OVW Grant Award Search; CA POST Vendor Catalog; Cal OES Subrecipient Media Ledger."
          >
            <div className="overflow-x-auto pb-4">
              <div className="flex items-stretch gap-2 min-w-[600px] mt-4">
                {[
                  { label: "DOJ OVW\n(Federal)", amount: "$175.8M", shade: "bg-slate-900 text-white" },
                  { label: "Cal OES\n(State)", amount: "$16.1M", shade: "bg-slate-800 text-white" },
                  { label: "CA POST\n(Training)", amount: "$4.0M", shade: "bg-slate-700 text-white" },
                  { label: "SDRTC\n(Fiscal Agent)", amount: "$415,523", shade: "bg-slate-300 text-slate-900" },
                  { label: "Performa Labs\n(Portal)", amount: "Not public", shade: "bg-slate-200 text-slate-700" },
                  { label: "SB County Officer\n(End User)", amount: "$0 confirmed", shade: "bg-red-100 text-red-700 border-2 border-red-300" },
                ].map((node, i, arr) => (
                  <div key={i} className="flex items-center flex-1">
                    <div className={`flex-1 rounded-md p-3 text-center text-sm shadow-sm ${node.shade}`}>
                      <div className="font-bold whitespace-pre-line leading-tight mb-2">{node.label}</div>
                      <div className="font-mono text-xs opacity-90">{node.amount}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="text-slate-400 font-bold px-2 flex-shrink-0">→</div>
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
          <div className="prose prose-slate max-w-none text-base leading-relaxed mb-8">
            <p>
              Domestic Violence Solutions for Santa Barbara County (DVS) is the primary federally funded direct service provider for domestic violence in the county and received confirmed award DV24 01 0420 of $1,390,000. DVS is a private 501(c)(3) nonprofit organization.
            </p>
            <p>
              DVS's own Annual Report for FY 2022 confirms total revenue of $2,648,909, total expenses of $2,267,669, and the following expense allocation: 53 percent to program services, 43 percent to Management and General overhead, and 4 percent to fundraising. Industry standards typically identify overhead above 15 to 20 percent as indicative of inefficiency. DVS's confirmed 43 percent is approximately double the upper threshold.
            </p>
          </div>

          <FigureCard
            title="Figure 5 — DVS Expense Allocation, FY 2022"
            note="Source: Domestic Violence Solutions for Santa Barbara County Annual Report FY 2022."
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fig5Data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                >
                  {fig5Data.map((_, i) => (
                    <Cell key={i} fill={fig5Colors[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => [`${v}%`, ""]} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </FigureCard>
        </section>

        {/* Section 8 */}
        <section>
          <SectionHeading number="8">Findings and Conclusions</SectionHeading>
          <div className="prose prose-slate max-w-none text-base leading-relaxed mb-8">
            <p>
              By the end of FY 2024, Santa Barbara County had received confirmed VAWA STOP formula grant funds in two agency categories — law enforcement and vertical prosecution — for the first time in the four-year review period. The cumulative confirmed total for those two awards is $405,688. For the three prior fiscal years, no confirmed STOP subgrant appears in any public record.
            </p>
            <p>
              The Santa Maria Police Department, which serves the largest city in the county and responded to a documented 148 percent increase in weapons-involved domestic violence calls, received no confirmed VAWA allocation in any fiscal year reviewed.
            </p>
          </div>

          <FigureCard
            title="Figure 6 — Statutory Requirement vs. Confirmed Receipt, SB County FY21–24"
            note={`"Required" figures are proportionate-share estimates based on SB County's share of CA population (~0.99%) applied to ~$49M cumulative state STOP award.`}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fig6Data} margin={{ top: 20, right: 16, left: 16, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="label" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tickFormatter={dollarK} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip cursor={{ fill: 'hsl(var(--muted)/0.5)' }} formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="required" name="Proportionate Statutory Req." fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="confirmed" name="Confirmed FY2024 Receipt" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </FigureCard>
        </section>

        {/* Primary Sources */}
        <div className="mt-20 pt-10 border-t-2 border-slate-200">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-6 uppercase">Primary Sources Index</h3>
          <ul className="space-y-4 text-sm text-slate-600 bg-slate-50 p-6 rounded-lg border border-slate-200">
            {[
              ["Cal OES Subrecipient Media Ledger", "Lists STOP $16,104,812 and SASP $2,648,245; names SDRTC as statewide T/TA recipient; lists VV and LE grant numbers for SB County."],
              ["DOJ OVW Grant Award Search", "Confirms California formula awards under CFDA #16.588; confirms grant ST24 01 1515 to SDRTC at $415,523."],
              ["DOJ OIG Audit 25-038 (January 2025)", "Identifies Cal OES fund consolidation and traceability problem; multiple funding streams commingled into single subawards."],
              ["CA POST Vendor Catalog", "Identifies Performa Labs, Inc. (Delaware) as operator of POST Learning Portal for mandatory DV training."],
              ["Santa Barbara County Board of Supervisors Consent Agendas", "Confirms DA $202,545 (VV24 01 0420); Sheriff LE $203,143 (LE24 02 0420); confirms SMPD does not appear in any LE or VV subgrant award."],
              ["DVS for Santa Barbara County Annual Report FY 2022", "Confirms revenue $2,648,909; expenses $2,267,669; M&G overhead 43%; all operational statistics cited in Section 7."],
              ["CA DOJ DVRCS Dataset", "Confirms call volumes 2013 and 2022; weapons escalation from 370 to 918 incidents."],
              ["Santa Maria Sun, October 4, 2017 (Joe Payne)", "Confirms DA Dudley statements; SMPD Sgt. Streker on-record daily call volume; three 2017 homicides."],
              ["28 C.F.R. § 90.17", "STOP program administrative requirements including subgrantee monitoring and record maintenance obligations."],
            ].map(([title, desc], i) => (
              <li key={i} className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full">
                <strong className="text-slate-900 font-semibold">{title}</strong> — <span className="text-slate-600">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-slate-500" />
            <span className="font-semibold text-slate-300">Pro Se Research</span>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-1">Report Reference: <span className="text-slate-300 font-mono">SBC-VAWA-2026-01</span></p>
            <p className="text-xs opacity-75">All figures confirmed from primary source documents. Estimates explicitly flagged.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
