const FeedWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex-1 relative  pb-10">{children}</div>;
};

export default FeedWrapper;
