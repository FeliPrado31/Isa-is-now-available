import CountdownComponent from "./presentation/components/CountdownComponent";

export default function Home() {
  const targetDate = new Date("2024-10-13T00:00:00").toLocaleString("en-US", {
    timeZone: "America/Bogota",
  });
  const targetDateInMilliseconds = new Date(targetDate).getTime();

  return <CountdownComponent targetDate={targetDateInMilliseconds} />;
}
