import { motion } from 'framer-motion';
import { Navigation, Package, Search } from 'lucide-react';
import { easeOut } from '../../lib/motion';

const panel = 'border border-slate-200 bg-white shadow-[0_16px_40px_-16px_rgba(0,23,72,0.25)]';

const rows = [
  { name: 'Lucía Fernández', initials: 'LF', segment: 'Mayorista', amount: '$ 184.200', status: 'Pagado' },
  { name: 'Martín Gómez', initials: 'MG', segment: 'Minorista', amount: '$ 42.950', status: 'Pendiente' },
  { name: 'Distribuidora Sur', initials: 'DS', segment: 'Mayorista', amount: '$ 610.000', status: 'Pagado' },
  { name: 'Carla Ruiz', initials: 'CR', segment: 'Minorista', amount: '$ 18.400', status: 'Pagado' },
  { name: 'Grupo Norte', initials: 'GN', segment: 'Corporativo', amount: '$ 1.250.000', status: 'En revisión' },
];

const statusStyle: Record<string, string> = {
  Pagado: 'bg-turquesa/10 text-turquesa-dark',
  Pendiente: 'bg-amber-50 text-amber-700',
  'En revisión': 'bg-slate-100 text-slate-600',
};

export function ManagementVisual() {
  return (
    <div className={`absolute inset-x-5 top-8 -bottom-4 overflow-hidden rounded-t-xl sm:inset-x-10 sm:top-10 ${panel}`}>
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
        <span className="text-xs font-bold text-navy">Clientes</span>
        <span className="flex items-center gap-2 rounded-md border border-slate-200 px-2.5 py-1.5 text-[10px] text-slate-400">
          <Search className="h-3 w-3" /> Buscar cliente
        </span>
      </div>
      <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2 text-[10px] font-semibold text-slate-500 sm:grid-cols-[1.6fr_1fr_1fr_1fr] sm:px-5">
        <span>Cliente</span>
        <span className="hidden sm:block">Segmento</span>
        <span>Total</span>
        <span>Estado</span>
      </div>
      {rows.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: easeOut }}
          className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 border-b border-slate-100 px-4 py-2.5 text-[11px] sm:grid-cols-[1.6fr_1fr_1fr_1fr] sm:px-5"
        >
          <span className="flex min-w-0 items-center gap-2.5 font-medium text-navy">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/5 text-[9px] font-semibold text-navy">
              {r.initials}
            </span>
            <span className="truncate">{r.name}</span>
          </span>
          <span className="hidden text-slate-500 sm:block">{r.segment}</span>
          <span className="text-slate-700 tabular-nums">{r.amount}</span>
          <span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${statusStyle[r.status]}`}>
              {r.status}
            </span>
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export function LogisticsVisual() {
  return (
    <div className="absolute inset-0 bg-[#e9eef5]">
      <svg viewBox="0 0 400 260" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <path d="M-20 190 L420 120" stroke="#fff" strokeWidth="14" />
        <path d="M110 -10 L170 270" stroke="#fff" strokeWidth="10" />
        <path d="M310 -10 L265 270" stroke="#fff" strokeWidth="8" />
        <path d="M-20 60 L420 40" stroke="#fff" strokeWidth="6" />
        <motion.path
          d="M 70 200 C 110 200, 120 150, 160 140 S 240 150, 262 110 S 300 65, 330 60"
          fill="none"
          stroke="#02C2B5"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
        />
        <circle cx="70" cy="200" r="7" fill="#fff" stroke="#001748" strokeWidth="3.5" />
        <circle cx="330" cy="60" r="16" fill="#02C2B5" fillOpacity="0.18" />
        <circle cx="330" cy="60" r="7" fill="#02C2B5" />
      </svg>
      <div className={`absolute right-5 bottom-5 left-5 flex items-center gap-3 rounded-xl p-3 sm:left-auto sm:w-64 ${panel}`}>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-turquesa/10 text-turquesa">
          <Package className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-bold text-navy">Pedido #4821 en camino</span>
          <span className="block text-[10px] text-slate-500">Llega en 12 min · 3,2 km</span>
        </span>
        <Navigation className="h-4 w-4 text-navy" />
      </div>
    </div>
  );
}

export function AnalyticsVisual() {
  const bars = [42, 58, 49, 71, 64, 83, 77];
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const circumference = 2 * Math.PI * 34;
  return (
    <div className="absolute inset-0 grid grid-cols-[1.4fr_1fr] gap-3 p-5 sm:p-8">
      <div className={`flex flex-col rounded-xl p-4 ${panel}`}>
        <div className="text-[10px] font-medium text-slate-500">Ventas por día</div>
        <div className="mt-1 text-lg font-bold tracking-tight text-navy">$ 1,2 M</div>
        <div className="mt-auto flex h-28 items-end gap-1.5 pt-4">
          {bars.map((b, i) => (
            <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
              <motion.span
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.8, ease: easeOut }}
                style={{ height: `${b}%` }}
                className={`w-full origin-bottom rounded ${i === 5 ? 'bg-turquesa' : 'bg-navy/10'}`}
              />
              <span className="text-[9px] text-slate-400">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex flex-col items-center justify-center rounded-xl p-4 ${panel}`}>
        <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#eef2f7" strokeWidth="8" />
          <motion.circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="#001748"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * 0.28 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: easeOut, delay: 0.3 }}
          />
        </svg>
        <div className="mt-3 text-sm font-bold text-navy">72%</div>
        <div className="text-[10px] text-slate-500">Objetivo mensual</div>
      </div>
    </div>
  );
}
