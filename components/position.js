export default function Position({ title, company, date, children }) {
  return (
    <div className="flex flex-row items-center space-x-4">
      {children}
      <div>
        <h3 className="uppercase font-medium tracking-wide">{title}</h3>
        <h4>{company}</h4>
        <h4 className="italic">{date}</h4>
      </div>
    </div>
  );
}
