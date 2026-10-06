import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Table2 } from 'lucide-react';
import Counter from '../ui/Counter';
import Reveal from '../ui/Reveal';
import { manpower, manpowerTotals, manpowerNote } from '../../data/manpower';

// Schematic tile layout (not a geographic map): [row, col]
const TILE_POS = { RJ: [1, 1], JH: [1, 4], CG: [2, 3], TS: [3, 2], AP: [3, 3], TN: [4, 3] };
const MAX = Math.max(...manpower.map((m) => m.regular + m.call));

export default function ManpowerChart() {
  const [view, setView] = useState('chart');
  const [sel, setSel] = useState('AP');
  const cur = manpower.find((m) => m.code === sel);

  return (
    <section className="section">
      <div className="container">
        <div className="totals">
          {[
            ['Regular (permanent rolls)', manpowerTotals.regular],
            ['Call manpower', manpowerTotals.call],
            ['Total manpower', manpowerTotals.total],
          ].map(([label, v], i) => (
            <Reveal key={label} delay={i * 0.08} className={`total ${i === 2 ? 'total--hl' : ''}`}>
              <strong><Counter value={v} /></strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>

        <div className="mp">
          <div className="mp__main">
            <div className="mp__bar">
              <h2 className="mp__title">Manpower by state</h2>
              <div className="seg" role="group" aria-label="View mode">
                <button className={view === 'chart' ? 'is-active' : ''} onClick={() => setView('chart')} aria-pressed={view === 'chart'}><BarChart3 size={16} aria-hidden="true" /> Chart</button>
                <button className={view === 'table' ? 'is-active' : ''} onClick={() => setView('table')} aria-pressed={view === 'table'}><Table2 size={16} aria-hidden="true" /> Table</button>
              </div>
            </div>

            {view === 'chart' ? (
              <div className="bars" role="list">
                <div className="legend"><span><i className="dot dot--reg" /> Regular</span><span><i className="dot dot--call" /> Call</span></div>
                {manpower.map((m, i) => (
                  <button key={m.code} role="listitem" className={`bar ${sel === m.code ? 'is-sel' : ''}`} onClick={() => setSel(m.code)} onMouseEnter={() => setSel(m.code)} onFocus={() => setSel(m.code)} aria-label={`${m.state}: ${m.regular} regular, ${m.call} call, ${m.total} total`}>
                    <span className="bar__label">{m.state}</span>
                    <span className="bar__track">
                      <motion.span className="bar__seg bar__seg--reg" initial={{ width: 0 }} whileInView={{ width: `${(m.regular / MAX) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.08 }} />
                      <motion.span className="bar__seg bar__seg--call" initial={{ width: 0 }} whileInView={{ width: `${(m.call / MAX) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 + i * 0.08 }} />
                    </span>
                    <span className="bar__val">{m.total}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="table-wrap">
                <table className="table table--static">
                  <thead><tr><th>State</th><th className="num">Regular</th><th className="num">Call</th><th className="num">Total</th></tr></thead>
                  <tbody>
                    {manpower.map((m) => (
                      <tr key={m.code} className={sel === m.code ? 'is-sel' : ''} onClick={() => setSel(m.code)}>
                        <td data-label="State">{m.state}</td><td className="num" data-label="Regular">{m.regular}</td><td className="num" data-label="Call">{m.call}</td><td className="num" data-label="Total">{m.total}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot><tr><td>Total</td><td className="num">{manpowerTotals.regular}</td><td className="num">{manpowerTotals.call}</td><td className="num">{manpowerTotals.total}</td></tr></tfoot>
                </table>
              </div>
            )}
          </div>

          <aside className="mp__side" aria-label="State detail">
            <div className="tilemap" aria-hidden="true">
              {manpower.map((m) => (
                <button key={m.code} tabIndex={-1} className={`tile ${sel === m.code ? 'is-sel' : ''}`} style={{ gridRow: TILE_POS[m.code][0], gridColumn: TILE_POS[m.code][1] }} onClick={() => setSel(m.code)}>
                  <b>{m.code}</b>
                  <span>{m.total}</span>
                </button>
              ))}
            </div>
            <div className="detail">
              <h3>{cur.state}</h3>
              <dl>
                <div><dt>Regular</dt><dd>{cur.regular}</dd></div>
                <div><dt>Call</dt><dd>{cur.call}</dd></div>
                <div><dt>Total</dt><dd>{cur.total}</dd></div>
              </dl>
            </div>
          </aside>
        </div>
        <p className="note">{manpowerNote}</p>
      </div>
    </section>
  );
}
