const StickyWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="hidden   lg:block w-[360px] sticky self-start top-6 ">
      <div className="min-h-[calc(100vh - 48px)] sticky top-6 flex flex-col gap-y-4 ">
        {children}
      </div>
    </div>
  );
};

export default StickyWrapper;
