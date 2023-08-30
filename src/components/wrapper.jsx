export function MaxWidthWrapper({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1240px] w-full">{children}</div>
    </div>
  );
}
