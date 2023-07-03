"use client";

interface coreValuesProps {
  name: string;
  symbol: string;
}

export default function CoreValues({ name, symbol }): coreValuesProps {
  return (
    <div>
      <p>{name}</p>
      <p>{symbol}</p>
    </div>
  );
}
