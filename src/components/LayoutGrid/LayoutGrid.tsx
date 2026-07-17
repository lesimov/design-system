import './layoutgrid.css';

export type LayoutGridSection = 'columns' | 'rows' | 'containers' | 'all';
export type LayoutGridGap = 'gap-4' | 'gap-8' | 'gap-16';

export interface LayoutGridProps {
  /** Which section(s) to render. Ignored when `columns` or `rows` is set (individual mode). */
  section?: LayoutGridSection;
  /** Render a single column grid for this column count (1-12). Overrides `section`. */
  columns?: number;
  /** Restrict displayed grids to this gap. */
  gap?: LayoutGridGap;
  /** Render a single row grid for this row count (1-6). Overrides `section`. */
  rows?: number;
}

const GAP_PX: Record<LayoutGridGap, number> = {
  'gap-4': 16,
  'gap-8': 32,
  'gap-16': 64,
};

const ALL_GAPS: LayoutGridGap[] = ['gap-4', 'gap-8', 'gap-16'];
const COLUMN_COUNTS = Array.from({ length: 12 }, (_, i) => i + 1);
const ROW_COUNTS = Array.from({ length: 6 }, (_, i) => i + 1);

const CONTAINERS: { name: string; maxWidth: number }[] = [
  { name: 'sm', maxWidth: 640 },
  { name: 'md', maxWidth: 768 },
  { name: 'lg', maxWidth: 1024 },
  { name: 'xl', maxWidth: 1280 },
  { name: '2xl', maxWidth: 1536 },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const gapsFor = (gap: LayoutGridGap | undefined): LayoutGridGap[] =>
  gap ? [gap] : ALL_GAPS;

const columnLabel = (count: number) =>
  `${count} ${count === 1 ? 'column' : 'columns'}`;

const ColumnGrid = ({ count, gap }: { count: number; gap: LayoutGridGap }) => (
  <div
    className={`flowbite-layout-grid__col-grid flowbite-layout-grid__col-grid--cols-${count} flowbite-layout-grid__col-grid--${gap}`}
  >
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="flowbite-layout-grid__col">
        {i + 1}
      </div>
    ))}
  </div>
);

const RowGrid = ({ count, gap }: { count: number; gap: LayoutGridGap }) => (
  <div
    className={`flowbite-layout-grid__row-grid flowbite-layout-grid__row-grid--rows-${count} flowbite-layout-grid__row-grid--${gap}`}
  >
    {Array.from({ length: count }, (_, i) => (
      <div key={i} className="flowbite-layout-grid__row" />
    ))}
  </div>
);

export const LayoutGrid = ({
  section = 'all',
  columns,
  gap,
  rows,
}: LayoutGridProps) => {
  // Individual column display takes precedence over `section`.
  if (typeof columns === 'number') {
    const count = clamp(columns, 1, 12);
    const gaps = gapsFor(gap);
    return (
      <div className="flowbite-layout-grid">
        <section className="flowbite-layout-grid__section">
          {gaps.map((g) => (
            <div className="flowbite-layout-grid__example" key={g}>
              <span className="flowbite-layout-grid__example-label">
                {columnLabel(count)} · {g} ({GAP_PX[g]}px)
              </span>
              <ColumnGrid count={count} gap={g} />
            </div>
          ))}
        </section>
      </div>
    );
  }

  // Individual row display takes precedence over `section`.
  if (typeof rows === 'number') {
    const count = clamp(rows, 1, 6);
    const gaps = gapsFor(gap);
    return (
      <div className="flowbite-layout-grid">
        <section className="flowbite-layout-grid__section">
          {gaps.map((g) => (
            <div className="flowbite-layout-grid__example" key={g}>
              <span className="flowbite-layout-grid__example-label">
                grid-rows-{count} · {g} ({GAP_PX[g]}px)
              </span>
              <RowGrid count={count} gap={g} />
            </div>
          ))}
        </section>
      </div>
    );
  }

  const showColumns = section === 'columns' || section === 'all';
  const showRows = section === 'rows' || section === 'all';
  const showContainers = section === 'containers' || section === 'all';

  return (
    <div className="flowbite-layout-grid">
      {showColumns && (
        <section className="flowbite-layout-grid__section">
          <h3 className="flowbite-layout-grid__section-title">Column Grids</h3>
          <div className="flowbite-layout-grid__grid-list">
            {COLUMN_COUNTS.map((count) =>
              gapsFor(gap).map((g) => (
                <div
                  className="flowbite-layout-grid__example"
                  key={`c-${count}-${g}`}
                >
                  <span className="flowbite-layout-grid__example-label">
                    {columnLabel(count)} · {g} ({GAP_PX[g]}px)
                  </span>
                  <ColumnGrid count={count} gap={g} />
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {showRows && (
        <section className="flowbite-layout-grid__section">
          <h3 className="flowbite-layout-grid__section-title">Row Grids</h3>
          <div className="flowbite-layout-grid__grid-list">
            {ROW_COUNTS.map((count) =>
              gapsFor(gap).map((g) => (
                <div
                  className="flowbite-layout-grid__example"
                  key={`r-${count}-${g}`}
                >
                  <span className="flowbite-layout-grid__example-label">
                    grid-rows-{count} · {g} ({GAP_PX[g]}px)
                  </span>
                  <RowGrid count={count} gap={g} />
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {showContainers && (
        <section className="flowbite-layout-grid__section">
          <h3 className="flowbite-layout-grid__section-title">Containers</h3>
          <div className="flowbite-layout-grid__containers">
            {CONTAINERS.map((c) => (
              <div className="flowbite-layout-grid__container-item" key={c.name}>
                <span className="flowbite-layout-grid__container-label">
                  {c.name}
                </span>
                <div
                  className="flowbite-layout-grid__container"
                  style={{ width: c.maxWidth }}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default LayoutGrid;
