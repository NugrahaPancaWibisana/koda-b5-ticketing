function Card({ children, className = "" }) {
  return <article className={`grid w-full ${className}`}>{children}</article>;
}

function CardHeader({ children, className = "" }) {
  return <header className={`flex ${className}`}>{children}</header>;
}

function CardContent({ children, className = "" }) {
  return <section className={`flex w-full ${className}`}>{children}</section>;
}

function CardTitle({ children, className = "" }) {
  return (
    <h1 className={`font-bold text-gray-900 ${className}`}>
      {children}
    </h1>
  );
}

function CardDesc({ children, className = "" }) {
  return (
    <p
      className={`font-normal text-gray-600 text-[16px] leading-8 tracking-[0.75px] ${className}`}
    >
      {children}
    </p>
  );
}

export { Card, CardHeader, CardTitle, CardContent, CardDesc };
