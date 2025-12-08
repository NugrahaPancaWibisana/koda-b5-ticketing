function SectionContent({ className = "", children, ...props }) {
  return (
    <section
      className={`flex flex-col justify-start items-center gap-10 text-center ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export { SectionContent };
