const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-full flex justify-center items-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
