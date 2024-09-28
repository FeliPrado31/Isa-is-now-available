import CountdownComponent from "./presentation/components/CountdownComponent";

export default function Home() {
  const targetDate = new Date("2024-10-13T00:00:00").getTime();

  return <CountdownComponent targetDate={targetDate} />;
}
