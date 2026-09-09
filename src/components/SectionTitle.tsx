type SectionTitleProps = {
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ tag, title, subtitle, align = 'left' }: SectionTitleProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <span className="section-tag">{tag}</span>
      <h2 className="section-heading mt-5 text-balance">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
