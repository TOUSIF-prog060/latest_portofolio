import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          borderRadius: 7,
          color: "#fff",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: -1,
        }}
      >
        <span style={{ display: "flex" }}>t</span>
        <span
          style={{
            display: "flex",
            width: 6,
            height: 6,
            marginLeft: 1,
            marginTop: 10,
            borderRadius: 3,
            background: "linear-gradient(120deg, #A78BFA, #22D3EE, #2DD4BF)",
          }}
        />
      </div>
    ),
    size
  );
}
