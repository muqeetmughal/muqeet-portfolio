const Container = ({ children, style }) => {
  return (
    <div
      className="container-fluid"
      style={{
        overflow: "hidden",
        padding: "0 30px",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
