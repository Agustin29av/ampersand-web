import { motion } from 'framer-motion';
import { Bell, Database, FileText, MapPin, Zap } from 'lucide-react';
import { easeOut } from '../../lib/motion';

type Token = [className: string, text: string];

const codeLines: Token[][] = [
  [['text-sky-300', 'export async function '], ['text-turquesa', 'procesarVenta'], ['text-slate-300', '(orden) {']],
  [['text-sky-300', '  const '], ['text-white', 'cliente '], ['text-slate-500', '= '], ['text-sky-300', 'await '], ['text-turquesa', 'crm'], ['text-slate-300', '.buscar(orden.id)']],
  [['text-sky-300', '  const '], ['text-white', 'factura '], ['text-slate-500', '= '], ['text-turquesa', 'facturar'], ['text-slate-300', '(cliente, orden)']],
  [['text-slate-500', '  // stock, envíos y reportes al instante']],
  [['text-sky-300', '  await '], ['text-turquesa', 'notificar'], ['text-slate-300', '(cliente, factura)']],
  [['text-sky-300', '  return '], ['text-slate-300', '{ '], ['text-white', 'ok'], ['text-slate-500', ': '], ['text-sky-300', 'true'], ['text-slate-300', ' }']],
  [['text-slate-300', '}']],
];

export function CodeVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl bg-[#0b1a3a] font-mono text-[11px] leading-[1.9] shadow-[0_20px_40px_-20px_rgba(0,23,72,0.5)] sm:text-xs">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5 text-[10px] text-slate-500">
        <span className="mr-2 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <span className="rounded bg-white/[0.08] px-2 py-0.5 text-slate-200">ventas.ts</span>
        <span>api.ts</span>
      </div>
      <div className="p-4">
        {codeLines.map((tokens, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.09, duration: 0.5, ease: easeOut }}
            className="flex whitespace-pre"
          >
            <span className="w-7 shrink-0 text-slate-600 select-none">{i + 1}</span>
            {tokens.map(([cls, text], j) => (
              <span key={j} className={cls}>
                {text}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0b1a3a] to-transparent" />
    </div>
  );
}

export function PhoneVisual() {
  return (
    <div className="relative flex h-full items-end justify-center overflow-hidden">
      <div className="relative w-[210px] translate-y-12 rounded-[2.2rem] bg-[#0b1a3a] p-2 shadow-[0_30px_60px_-20px_rgba(0,23,72,0.5)] transition-transform duration-700 ease-out group-hover:translate-y-6">
        <div className="overflow-hidden rounded-[1.8rem] bg-white">
          <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-[#0b1a3a]" />
          <div className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[9px] text-slate-400">Envío #4821</div>
                <div className="text-sm font-bold text-navy">En camino</div>
              </div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                <Bell className="h-3.5 w-3.5 text-navy" />
              </span>
            </div>
            <div className="relative h-28 overflow-hidden rounded-xl bg-[#eef2f7]">
              <svg viewBox="0 0 180 110" className="absolute inset-0 h-full w-full">
                <path d="M-10 70 L190 40" stroke="#fff" strokeWidth="8" />
                <path d="M60 -10 L80 120" stroke="#fff" strokeWidth="6" />
                <path d="M140 -10 L130 120" stroke="#fff" strokeWidth="5" />
                <motion.path
                  d="M 20 90 C 50 90, 50 45, 90 52 S 140 22, 158 24"
                  fill="none"
                  stroke="#02C2B5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeInOut', delay: 0.4 }}
                />
                <circle cx="20" cy="90" r="4.5" fill="#fff" stroke="#001748" strokeWidth="2.5" />
              </svg>
              <MapPin className="absolute top-2 right-3 h-5 w-5 fill-turquesa/20 text-turquesa" />
            </div>
            {['Retirado del depósito', 'En distribución'].map((step, i) => (
              <div key={step} className="flex items-center gap-2.5 rounded-lg bg-slate-50 p-2.5">
                <span className={`h-2 w-2 rounded-full ${i === 1 ? 'bg-turquesa' : 'bg-slate-300'}`} />
                <span className="text-[10px] text-slate-600">{step}</span>
              </div>
            ))}
            <div className="flex h-8 items-center justify-center rounded-lg bg-navy text-[10px] font-semibold text-white">
              Ver detalle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CloudVisual() {
  const bars = Array.from({ length: 32 }, (_, i) => (i === 9 || i === 24 ? 0.55 : 0.72 + ((i * 37) % 28) / 100));
  return (
    <div className="flex h-full flex-col justify-end gap-3">
      <div className="flex items-center gap-2 text-[11px] font-medium text-slate-600">
        <span className="relative flex h-2 w-2">
          <span className="pulse-ring absolute inset-0 rounded-full bg-turquesa" />
          <span className="h-2 w-2 rounded-full bg-turquesa" />
        </span>
        Todos los sistemas operativos
      </div>
      <div className="flex h-20 items-end gap-[3px]">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02, duration: 0.6, ease: easeOut }}
            style={{ height: `${h * 100}%` }}
            className={`flex-1 origin-bottom rounded-sm ${h < 0.6 ? 'bg-navy/30' : 'bg-turquesa/70'} transition-colors duration-500 group-hover:bg-turquesa`}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-slate-400">
        <span>Últimos 30 días</span>
        <span>Hoy</span>
      </div>
    </div>
  );
}

export function FlowVisual() {
  const nodes = [
    { icon: FileText, label: 'Formulario' },
    { icon: Zap, label: 'Automatización' },
    { icon: Database, label: 'CRM' },
  ];
  return (
    <div className="flex h-full items-center">
      <div className="relative flex w-full items-start justify-between">
        <svg className="absolute top-6 left-8 h-px w-[calc(100%-4rem)] overflow-visible">
          <line
            x1="0"
            x2="100%"
            y1="0"
            y2="0"
            stroke="#02C2B5"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="dash-flow"
          />
        </svg>
        {nodes.map(({ icon: Icon, label }, i) => (
          <div key={label} className="relative flex flex-col items-center gap-2">
            <span
              style={{ transitionDelay: `${i * 70}ms` }}
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-sm transition-transform duration-500 ease-out group-hover:-translate-y-1 ${
                i === 1 ? 'border-turquesa/50 text-turquesa shadow-turquesa/20' : 'border-slate-200 text-navy'
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="text-[10px] font-medium text-slate-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
