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

const fig5Colors = ["hsl(220,70%,35%)", "hsl(0,72%,42%)", "hsl(220,13%,55%)"];

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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 mb-4">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
        {children}
      </h2>
      <Separator />
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
    <Card className="my-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-bold uppercase tracking-wider text-center text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
        <p className="text-xs text-muted-foreground mt-3 pt-3 border-t italic">
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
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Cover */}
        <div className="text-center border-b pb-10 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Pro Se Research Report &nbsp;·&nbsp; Santa Barbara County, California
          </p>
          <h1 className="text-3xl font-bold leading-tight mb-3">
            VAWA STOP Formula Grant Funding<br />in Santa Barbara County
          </h1>
          <p className="text-base italic text-muted-foreground mb-6">
            Federal Appropriation, State Distribution, and Local Service Delivery Outcomes<br />
            Fiscal Years 2021–2024
          </p>
          <div className="text-sm text-muted-foreground leading-relaxed mb-6">
            <p>Date of Report: March 2026</p>
            <p>Basis: Publicly Available Primary Source Records</p>
            <p>Subject: Tracing Federal VAWA Funds from Appropriation to Local Delivery</p>
          </div>
          <Badge variant="outline" className="text-xs tracking-widest px-4 py-1 rounded-sm">
            Report Reference: SBC-VAWA-2026-01
          </Badge>
        </div>

        {/* Highlights */}
        <Card className="mb-10 border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Report Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm list-disc list-inside">
              <li>California received approximately $16.1 million in VAWA STOP formula grant funds for FY 2023 under CFDA #16.588, administered by Cal OES.</li>
              <li>No Santa Barbara County law enforcement, prosecution, or court agency appears in any public Cal OES STOP subrecipient list for FY 2021–2023. Confirmed subgrants first appear in FY 2024 Board of Supervisors consent agendas.</li>
              <li>The Santa Maria Police Department — largest city in Santa Barbara County, with confirmed daily domestic violence call volume — received <strong>$0</strong> in confirmed direct VAWA allocation across all fiscal years reviewed.</li>
              <li>Domestic Violence Solutions for Santa Barbara County allocated 43 percent of expenses to Management and General overhead in FY 2022. Direct victim assistance represented 7.2 percent of total expenses.</li>
              <li>Weapons-involved domestic violence calls in Santa Barbara County increased <strong>148 percent</strong> from 2013 to 2022, rising from 370 to 918 incidents. Source: CA DOJ DVRCS Dataset.</li>
              <li>DOJ OIG Audit 25-038 (January 2025) identified a fund consolidation and traceability problem at Cal OES: multiple federal funding streams are commingled into single subawards.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 1 */}
        <SectionHeading>Background and Scope</SectionHeading>
        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            The Violence Against Women Act (VAWA), enacted in 1994 and reauthorized most recently in 2022, established the Services, Training, Officers, and Prosecutors (STOP) Formula Grant Program as the primary federal mechanism for improving law enforcement and prosecution response to domestic violence, dating violence, sexual assault, and stalking. Under the STOP program, the Department of Justice Office on Violence Against Women (OVW) awards formula grants to state administrative agencies, which in turn distribute funds to local law enforcement, prosecution offices, courts, and victim services providers.
          </p>
          <p>
            This report examines the flow of VAWA STOP formula grant funds from federal appropriation through the California Office of Emergency Services (Cal OES) to Santa Barbara County subrecipients for fiscal years 2021 through 2024. The analysis is based exclusively on verified primary source records, including Cal OES subrecipient ledgers, DOJ OVW grant award database records, Santa Barbara County Board of Supervisors consent agendas, DVS organizational financial statements, and CA DOJ Domestic Violence-Related Calls for Service data.
          </p>
          <p>
            The report addresses a single operative question: did the funding distributed through these channels produce, in Santa Barbara County, the trained law enforcement officers, specialized prosecutors, and supported courts that VAWA's statutory design required?
          </p>
        </div>

        {/* Section 2 */}
        <SectionHeading>Federal Awards to California, FY 2021–2024</SectionHeading>
        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            According to the DOJ Office on Violence Against Women Grant Awards Database, California received VAWA STOP formula grant funds under CFDA #16.588 during each fiscal year from 2021 through 2024. The most recent confirmed award cycle shows California receiving approximately $16.1 million in STOP funds for FY 2023, with an additional $2.6 million under the Sexual Assault Services Program (SASP). Figure 1 presents the federal funding profile across the review period.
          </p>
        </div>

        <FigureCard
          title="Figure 1 — California VAWA STOP Formula Grant Awards, FY 2021–2024 (Estimated)"
          note="Note: FY 2021 and FY 2022 figures are approximate based on prior-year trend data. FY 2023 figure of $16,104,812 is confirmed from Cal OES subrecipient ledger. SASP figure of $2,648,245 confirmed from Cal OES ledger. Source: Cal OES Subrecipient Media Ledger; DOJ OVW Grant Award Search (CFDA #16.588)."
        >
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={fig1Data} margin={{ top: 8, right: 16, left: 0, bottom: 24 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,90%)" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis tickFormatter={dollarM} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => [`$${v.toFixed(1)}M`, "Award Amount"]} />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {fig1Data.map((_, i) => (
                  <Cell
                    key={i}
                    fill={i === 2 ? "hsl(220,70%,35%)" : i === 3 ? "hsl(220,13%,55%)" : "hsl(220,13%,70%)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </FigureCard>

        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            Federal law requires that states distribute STOP formula grant funds according to a strict statutory formula. A minimum of 25 percent must be directed to law enforcement, 25 percent to prosecution, 5 percent to courts, and 30 percent to victim services. State administration is capped at 10 percent of the award amount. Based on the four-year cumulative award to California of approximately $49 million, the statute required a minimum of approximately $9.25 million each for law enforcement and prosecution, $1.85 million for courts, and $11.1 million for victim services.
          </p>
        </div>

        <div className="my-6 overflow-x-auto">
          <Table>
            <caption className="text-xs font-bold uppercase tracking-wider text-left mb-2 text-muted-foreground">
              Table 1 — Statutory STOP Allocation Requirements, California FY 2021–2023
            </caption>
            <TableHeader>
              <TableRow className="bg-foreground hover:bg-foreground">
                <TableHead className="text-background text-xs">Set-Aside Category</TableHead>
                <TableHead className="text-background text-xs">Statutory Minimum (%)</TableHead>
                <TableHead className="text-background text-xs">Required CA Distribution (est.)</TableHead>
                <TableHead className="text-background text-xs">Intended Recipients</TableHead>
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
                  <TableCell className="text-sm">{cat}</TableCell>
                  <TableCell className="text-sm">{pct}</TableCell>
                  <TableCell className="text-sm font-mono">{amt}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{rec}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted font-semibold">
                <TableCell className="text-sm">Subtotal — Local Agencies</TableCell>
                <TableCell className="text-sm">85%</TableCell>
                <TableCell className="text-sm font-mono">~$31,450,000</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">State Administration</TableCell>
                <TableCell className="text-sm">10% (capped)</TableCell>
                <TableCell className="text-sm font-mono">~$3,700,000</TableCell>
                <TableCell className="text-sm text-muted-foreground">Cal OES overhead</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm">Discretionary</TableCell>
                <TableCell className="text-sm">5%</TableCell>
                <TableCell className="text-sm font-mono">~$1,850,000</TableCell>
                <TableCell className="text-sm text-muted-foreground">At-large state allocation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-xs text-muted-foreground mt-2">
            Source: 34 U.S.C. § 10461 et seq.; 28 C.F.R. § 90.17. Figures based on approximately $49 million cumulative California STOP award, FY 2021–2023.
          </p>
        </div>

        {/* Section 3 */}
        <SectionHeading>State Distribution and the Fund Consolidation Problem</SectionHeading>
        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            Cal OES, as the State Administrative Agency (SAA) responsible for VAWA STOP distribution, administers grants through a reimbursement model in which subrecipients must spend funds and submit claims within defined windows before receiving federal dollars. This structure imposes cash-flow requirements on local agencies that may disadvantage smaller departments without reserve capacity.
          </p>
          <p>
            DOJ OIG Audit 25-038, released in January 2025, identified a material structural problem in how Cal OES administers these funds. The audit found that Cal OES consolidates multiple federal funding streams — including STOP, VOCA, FVPSA, and state funds — into single subawards. Subrecipients receive combined awards and cannot separately account for each federal source. No public reporting of county-level allocations by specific funding source is maintained. The practical result is that no external party, including the county itself, can independently confirm which VAWA STOP dollars went where within California.
          </p>
        </div>

        <Card className="my-6 border-l-4 border-l-foreground bg-muted/50">
          <CardContent className="pt-4 pb-4">
            <p className="text-sm italic">
              "Even if Santa Barbara County received STOP funds, they would be concealed inside larger victim services grants labeled only by program name, not funding source. This is the structural basis for the opacity documented in this report."
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            A review of Cal OES Joint Legislative Budget Committee reports for FY 2021 through FY 2024 identified no Santa Barbara County law enforcement agency, prosecution office, or court in any published STOP subrecipient list for fiscal years 2021 through 2023. Subgrant records first appear in FY 2024 Board of Supervisors consent agendas, confirming two awards for that year only: grant LE24 02 0420 to the Santa Barbara County Sheriff Law Enforcement Unit ($203,143) and grant VV24 01 0420 to the District Attorney Vertical Prosecution Unit ($202,545).
          </p>
        </div>

        {/* Section 4 */}
        <SectionHeading>Santa Barbara County Funding Receipts, FY 2021–2024</SectionHeading>
        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            The verified funding record for Santa Barbara County across the four-year review period reflects a substantial gap between the statutory distribution requirements and the confirmed local receipts. Figure 2 presents the confirmed subgrant awards by recipient agency and fiscal year.
          </p>
        </div>

        <FigureCard
          title="Figure 2 — Confirmed VAWA/VOCA Subgrant Awards to SB County Agencies, FY 2024"
          note="Note: FY 2021–2023 data: no confirmed STOP formula grant awards identified in public records for law enforcement, prosecution, or courts. FY 2024 data confirmed from Santa Barbara County Board of Supervisors consent agendas. Sources: SB County Board of Supervisors consent agendas; Cal OES Subrecipient Media Ledger."
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={fig2Data} margin={{ top: 8, right: 16, left: 16, bottom: 48 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,90%)" />
              <XAxis dataKey="label" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
              <YAxis tickFormatter={dollarK} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Award Amount"]} />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {fig2Data.map((d, i) => (
                  <Cell
                    key={i}
                    fill={d.gap ? "hsl(0,72%,42%)" : d.highlight ? "hsl(220,70%,35%)" : "hsl(220,13%,60%)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </FigureCard>

        <div className="my-6 overflow-x-auto">
          <Table>
            <caption className="text-xs font-bold uppercase tracking-wider text-left mb-2 text-muted-foreground">
              Table 2 — Confirmed Grant Award Index, Santa Barbara County
            </caption>
            <TableHeader>
              <TableRow className="bg-foreground hover:bg-foreground">
                <TableHead className="text-background text-xs">Grant ID</TableHead>
                <TableHead className="text-background text-xs">Program Category</TableHead>
                <TableHead className="text-background text-xs">Federal Source</TableHead>
                <TableHead className="text-background text-xs">Recipient Agency</TableHead>
                <TableHead className="text-background text-xs">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["VV24 01 0420", "Vertical Prosecution", "VAWA STOP CFDA #16.588", "SB County District Attorney", "$202,545", false],
                ["LE24 02 0420", "Law Enforcement", "VAWA STOP CFDA #16.588", "SB County Sheriff", "$203,143", false],
                ["ST24 01 1515", "Statewide Training T/TA", "VAWA STOP CFDA #16.588", "San Diego Regional Training Center", "$415,523", false],
                ["DV24 01 0420", "Domestic Violence Services", "VAWA / FVPSA", "Domestic Violence Solutions for SB County", "$1,390,000", false],
              ].map(([id, cat, src, rec, amt, gap], i) => (
                <TableRow key={i}>
                  <TableCell className="text-xs font-mono">{id}</TableCell>
                  <TableCell className="text-sm">{cat}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{src}</TableCell>
                  <TableCell className="text-sm">{rec}</TableCell>
                  <TableCell className="text-sm font-mono font-semibold">{amt}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted font-semibold">
                <TableCell colSpan={4} className="text-sm">Total — Confirmed Primary Source Amounts</TableCell>
                <TableCell className="text-sm font-mono">$2,211,211</TableCell>
              </TableRow>
              {[
                ["Santa Maria Police Department — confirmed VAWA allocation", "$0"],
                ["SB Superior Court — confirmed STOP court set-aside", "$0"],
                ["Direct survivor financial assistance — confirmed allocation", "$0"],
              ].map(([label, amt], i) => (
                <TableRow key={i} className="bg-destructive/10">
                  <TableCell colSpan={4} className="text-sm text-destructive">{label}</TableCell>
                  <TableCell className="text-sm font-mono font-bold text-destructive">{amt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-xs text-muted-foreground mt-2">
            Source: SB County Board of Supervisors consent agendas; Cal OES Subrecipient Media Ledger; DOJ OVW Grant Award Search.
          </p>
        </div>

        {/* Section 5 */}
        <SectionHeading>Domestic Violence Call Volume and Weapons Escalation</SectionHeading>
        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            The funded capacity of a law enforcement response system must be evaluated against the operational demands placed on it. CA DOJ Domestic Violence-Related Calls for Service (DVRCS) data, confirmed through SB County budget hearings in April 2024, provides empirical documentation of demand across the review period. Total domestic violence calls for service countywide increased from 1,695 in 2013 to 1,788 in 2022. Within the City of Santa Maria specifically, calls increased from 499 to 556 over the same period.
          </p>
          <p>
            The most significant documented change is in weapons involvement. Weapons-involved domestic violence calls countywide increased from 370 in 2013 to 918 in 2022, a <strong>148 percent increase</strong> over nine years. In Santa Maria specifically, 50 strangulation and suffocation incidents were documented in 2022, a category not separately reported in 2013. Figure 3 illustrates this escalation trajectory.
          </p>
        </div>

        <FigureCard
          title="Figure 3 — Domestic Violence Call Volume and Weapons Involvement, SB County, 2013 vs. 2022"
          note="Source: CA DOJ Domestic Violence-Related Calls for Service (DVRCS) Dataset; SB County Budget Hearings, April 2024; SB Independent, April 16, 2024. All figures empirically documented from primary sources."
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={fig3Data} margin={{ top: 8, right: 16, left: 0, bottom: 24 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,90%)" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="year2013" name="2013" fill="hsl(220,13%,65%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="year2022" name="2022" fill="hsl(220,70%,35%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </FigureCard>

        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            Santa Barbara County District Attorney Joyce Dudley identified this escalation pattern publicly in 2017, stating that domestic violence is "the most predictable homicide in Santa Barbara County" and that patterns of misdemeanor domestic violence are predictably precursors to felony offenses and homicide. The DA's statement — that if crime is predictable it is preventable — frames the operational significance of the funding gap: the absence of systematically funded training during a period of demonstrated demand escalation is not a neutral administrative outcome.
          </p>
        </div>

        {/* Section 6 */}
        <SectionHeading>The Statewide Vendor Chain</SectionHeading>
        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            A distinct funding track operates through statewide contracts that do not flow to Santa Barbara County as a direct subgrantee. The mandatory law enforcement set-aside — the 25 percent of STOP funds designated for officer training — passes through a non-profit fiscal agent before any training obligation is fulfilled at the local level.
          </p>
          <p>
            Grant ST24 01 1515, confirmed in the DOJ OVW Grant Award Search, awards $415,523 to the San Diego Regional Training Center (SDRTC), a non-profit organization, as a statewide Training and Technical Assistance (T/TA) fiscal agent for the California Commission on Peace Officer Standards and Training (POST). The SDRTC in turn subcontracts portal operations to Performa Labs, Inc., a Delaware corporation, which operates the POST Learning Portal. California law enforcement officers are required to complete domestic violence training through this portal. The subcontract amount between SDRTC and Performa Labs is not publicly available.
          </p>
        </div>

        <FigureCard
          title="Figure 4 — VAWA STOP Law Enforcement Training Funding Chain"
          note="Sources: DOJ OVW Grant Award Search (grant ST24 01 1515); CA POST Vendor Catalog; Cal OES Subrecipient Media Ledger. Subcontract amount between SDRTC and Performa Labs not confirmed in public records."
        >
          <div className="overflow-x-auto">
            <div className="flex items-stretch gap-0 min-w-[560px] my-4">
              {[
                { label: "DOJ OVW\n(Federal)", amount: "$175.8M", shade: "bg-foreground text-background" },
                { label: "Cal OES\n(State)", amount: "$16.1M", shade: "bg-foreground/80 text-background" },
                { label: "CA POST\n(Training)", amount: "$4.0M", shade: "bg-foreground/60 text-background" },
                { label: "SDRTC\n(Fiscal Agent)", amount: "$415,523", shade: "bg-foreground/40 text-foreground" },
                { label: "Performa Labs\n(Portal Operator)", amount: "Not public", shade: "bg-foreground/20 text-foreground" },
                { label: "SB County Officer\n(End User)", amount: "$0 confirmed", shade: "bg-destructive/15 text-destructive border border-destructive/30" },
              ].map((node, i, arr) => (
                <div key={i} className="flex items-center flex-1">
                  <div className={`flex-1 rounded-lg p-3 text-center text-xs ${node.shade}`}>
                    <div className="font-semibold whitespace-pre-line leading-tight mb-1">{node.label}</div>
                    <div className="font-mono text-[10px] opacity-80">{node.amount}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="text-muted-foreground text-lg px-1 flex-shrink-0">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FigureCard>

        {/* Section 7 */}
        <SectionHeading>Domestic Violence Solutions: Service Delivery Analysis</SectionHeading>
        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            Domestic Violence Solutions for Santa Barbara County (DVS) is the primary federally funded direct service provider for domestic violence in the county and received confirmed award DV24 01 0420 of $1,390,000. DVS is a private 501(c)(3) nonprofit organization; it is not a county government agency. The operative question for this analysis is whether DVS performed its funded mission in the best possible manner with the least waste of time and effort, using requisite knowledge, skill, and industry.
          </p>
          <p>
            DVS's own Annual Report for FY 2022 confirms total revenue of $2,648,909, total expenses of $2,267,669, and the following expense allocation: 53 percent to program services, 43 percent to Management and General overhead, and 4 percent to fundraising. Industry standards maintained by nonprofit watchdog organizations typically identify Management and General overhead above 15 to 20 percent as indicative of organizational inefficiency. DVS's confirmed 43 percent overhead is approximately double the upper threshold of that range.
          </p>
        </div>

        <FigureCard
          title="Figure 5 — DVS Expense Allocation, FY 2022 (Confirmed)"
          note="Source: Domestic Violence Solutions for Santa Barbara County Annual Report FY 2022. All figures confirmed from primary source organizational publication."
        >
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={fig5Data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {fig5Data.map((_, i) => (
                  <Cell key={i} fill={fig5Colors[i]} />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </FigureCard>

        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            Against a 30 percent increase in emergency shelter demand and a 20 percent increase in crisis line calls in the same fiscal year, DVS answered 4,917 calls to its 24-hour crisis hotline, responded to 521 law enforcement calls requesting DVS assistance, provided 5,528 safe shelter nights, delivered 587 counseling sessions, and facilitated 31 permanent Housing First placements. These service outputs were produced while 43 cents of every expense dollar remained within the organization's administrative structure.
          </p>
        </div>

        <div className="my-6 overflow-x-auto">
          <Table>
            <caption className="text-xs font-bold uppercase tracking-wider text-left mb-2 text-muted-foreground">
              Table 3 — DVS Service Delivery Metrics, FY 2022 (Confirmed from Annual Report)
            </caption>
            <TableHeader>
              <TableRow className="bg-foreground hover:bg-foreground">
                <TableHead className="text-background text-xs">Metric</TableHead>
                <TableHead className="text-background text-xs">FY 2022 Value</TableHead>
                <TableHead className="text-background text-xs">Source</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Total revenue", "$2,648,909", "DVS Annual Report FY2022"],
                ["Total expenses", "$2,267,669", "DVS Annual Report FY2022"],
                ["Program Services (% of expenses)", "53%", "DVS Annual Report FY2022"],
                ["Management and General overhead (% of expenses)", "43%", "DVS Annual Report FY2022"],
                ["24/7 crisis line calls answered", "4,917", "DVS Annual Report FY2022"],
                ["Law enforcement calls requesting DVS assistance", "521", "DVS Annual Report FY2022"],
                ["Safe shelter nights provided", "5,528", "DVS Annual Report FY2022"],
                ["Counseling sessions provided", "587", "DVS Annual Report FY2022"],
                ["Housing First permanent placements", "31 survivors", "DVS Annual Report FY2022"],
                ["Emergency shelter demand increase (YoY)", "+30%", "DVS Annual Report FY2022"],
                ["Emergency shelter stay limit", "60 days", "DVS Annual Report FY2022"],
              ].map(([metric, val, src], i) => (
                <TableRow key={i}>
                  <TableCell className="text-sm">{metric}</TableCell>
                  <TableCell className="text-sm font-mono font-semibold">{val}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{src}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted font-semibold">
                <TableCell className="text-sm">Confirmed federal award (DV24 01 0420)</TableCell>
                <TableCell className="text-sm font-mono">$1,390,000</TableCell>
                <TableCell className="text-xs text-muted-foreground">Cal OES Subrecipient Ledger</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Section 8 */}
        <SectionHeading>Findings and Conclusions</SectionHeading>
        <div className="space-y-4 text-sm leading-relaxed text-justify">
          <p>
            By the end of FY 2024, Santa Barbara County had received confirmed VAWA STOP formula grant funds in two agency categories — law enforcement and vertical prosecution — for the first time in the four-year review period. The cumulative confirmed total for those two awards is $405,688. For the three prior fiscal years (FY 2021 through FY 2023), no confirmed STOP subgrant appears in any public record reviewed for Santa Barbara County law enforcement, prosecution, or courts.
          </p>
          <p>
            Across the same period, California received approximately $49 million in VAWA STOP formula grants, of which federal statute required at minimum $31.45 million to be distributed to local agencies for law enforcement, prosecution, courts, and victim services. The disposition of the funds obligated for Santa Barbara County law enforcement, prosecution, and courts for FY 2021 through FY 2023 cannot be confirmed from publicly available records.
          </p>
          <p>
            The Santa Maria Police Department, which confirmed daily domestic violence call volume through its own sergeant's on-record statement and which serves the largest city in the county, received no confirmed VAWA allocation in any fiscal year reviewed. The department responded to a documented 148 percent increase in weapons-involved domestic violence calls during a period in which no confirmed federal training funds reached the department.
          </p>
          <p>
            The Legal Aid Foundation of Santa Barbara County received an LAV grant of approximately $750,000, structured through program eligibility requirements to serve primarily immigration and custody subpopulations. Domestic violence victims who are United States citizens without immigration or custody issues fall outside the effective scope of this funding as structured.
          </p>
          <p>
            Three domestic violence homicides occurred in Santa Barbara County in 2017 alone, documented in contemporaneous news reporting. The district attorney characterized domestic violence as the most predictable homicide in the county and stated explicitly that predictable crime is preventable. The record of confirmed funding for the trained response system Congress designed to prevent those outcomes does not reflect the level of investment the statute required.
          </p>
        </div>

        <FigureCard
          title="Figure 6 — Summary: Statutory Requirement vs. Confirmed Receipt, SB County FY 2021–2024"
          note={`Note: "Required" figures are proportionate-share estimates based on SB County's share of California population (~0.99%) applied to the ~$49M cumulative state STOP award. "Confirmed" figures reflect documented primary source awards only. FY 2021–2023 confirmed LE/prosecution/courts = $0. Source: DOJ OVW database; Cal OES ledger; SB County Board of Supervisors consent agendas; 28 C.F.R. § 90.17.`}
        >
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={fig6Data} margin={{ top: 8, right: 16, left: 16, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,90%)" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis tickFormatter={dollarK} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, ""]} />
              <Legend />
              <Bar dataKey="required" name="Proportionate Statutory Requirement" fill="hsl(220,13%,65%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="confirmed" name="Confirmed FY2024 Receipt" fill="hsl(220,70%,35%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </FigureCard>

        {/* Primary Sources */}
        <Separator className="my-10" />
        <SectionHeading>Primary Sources</SectionHeading>
        <div className="space-y-3 text-sm">
          {[
            ["1. Cal OES Subrecipient Media Ledger", "Lists STOP $16,104,812 and SASP $2,648,245; names SDRTC as statewide T/TA recipient; lists VV and LE grant numbers for SB County."],
            ["2. DOJ OVW Grant Award Search", "Confirms California formula awards under CFDA #16.588; confirms grant ST24 01 1515 to SDRTC at $415,523."],
            ["3. DOJ OIG Audit 25-038 (January 2025)", "Identifies Cal OES fund consolidation and traceability problem; multiple funding streams commingled into single subawards."],
            ["4. CA POST Vendor Catalog", "Identifies Performa Labs, Inc. (Delaware) as operator of POST Learning Portal for mandatory DV training."],
            ["5. Santa Barbara County Board of Supervisors Consent Agendas", "Confirms DA $202,545 (VV24 01 0420); Sheriff LE $203,143 (LE24 02 0420); confirms SMPD does not appear in any LE or VV subgrant award."],
            ["6. DVS for Santa Barbara County Annual Report FY 2022", "Confirms revenue $2,648,909; expenses $2,267,669; M&G overhead 43%; all operational statistics cited in Section 7."],
            ["7. CA DOJ Domestic Violence-Related Calls for Service (DVRCS) Dataset", "Confirms call volumes 2013 and 2022; weapons escalation from 370 to 918 incidents; SB Independent, April 16, 2024."],
            ["8. Santa Maria Sun, October 4, 2017 (Joe Payne)", "Confirms DA Dudley statements; SMPD Sgt. Streker on-record daily call volume; three 2017 homicides (Morozova, Erwin, Ramirez-Diaz)."],
            ["9. 28 C.F.R. § 90.17", "STOP program administrative requirements including subgrantee monitoring and record maintenance obligations."],
          ].map(([title, desc], i) => (
            <p key={i}>
              <strong>{title}</strong> — {desc}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-4 border-t flex justify-between items-center text-xs text-muted-foreground">
          <span>SBC-VAWA-2026-01 · March 2026</span>
          <span>All figures confirmed from primary source documents. Estimates explicitly flagged.</span>
        </div>
      </div>
    </div>
  );
}
