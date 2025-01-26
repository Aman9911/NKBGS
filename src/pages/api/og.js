import conf from "@/conf/conf";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title") || "NKBGS | N.K Bagrodia Global School";
  const logoUrl = searchParams.get("logo") || `${conf.url}/logo.png`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          backgroundColor: "#BFDBFE",
          color: "#000000",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${conf.url}/images/heroBanner/building.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />

        {/* Logo */}
        <img
          src={logoUrl}
          alt="Logo"
          style={{
            width: "150px",
            height: "150px",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "50%",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            margin: 0,
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
