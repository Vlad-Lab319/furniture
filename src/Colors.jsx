export default function Colors(props) {
  const color = props.color;
  const setColor = props.setColor;

  const COLORS = ["#545c5c", "#385480", "#ad9a89", "#c8c3bd", "#615043"];

  return (
    <div
      className="colors"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        {COLORS.map((c) => {
          return (
            <button
              style={{
                height: "27px",
                border: "1px solid #b4b1ff",
                verticalAlign: "top",
                borderRadius: "12px",
              }}
              className="color-button"
              key={c}
              value={c}
              style={{ backgroundColor: c }}
              onClick={(e) => setColor(e.target.value)}
            >
              {c}
            </button>
          );
        })}
      </div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      ></input>
    </div>
  );
}
