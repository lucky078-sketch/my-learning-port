import { useState } from "react";

type Op = "+" | "-" | "×" | "÷";

export function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState<number | null>(null);
  const [op, setOp] = useState<Op | null>(null);
  const [resetNext, setResetNext] = useState(false);

  const inputDigit = (d: string) => {
    if (resetNext || display === "0") {
      setDisplay(d === "." ? "0." : d);
      setResetNext(false);
    } else if (d === "." && display.includes(".")) {
      return;
    } else {
      setDisplay(display + d);
    }
  };

  const compute = (a: number, b: number, o: Op) => {
    switch (o) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return b === 0 ? NaN : a / b;
    }
  };

  const chooseOp = (next: Op) => {
    const current = parseFloat(display);
    if (prev !== null && op && !resetNext) {
      const result = compute(prev, current, op);
      setPrev(result);
      setDisplay(String(result));
    } else {
      setPrev(current);
    }
    setOp(next);
    setResetNext(true);
  };

  const equals = () => {
    if (prev === null || op === null) return;
    const current = parseFloat(display);
    const result = compute(prev, current, op);
    setDisplay(Number.isFinite(result) ? String(result) : "Error");
    setPrev(null);
    setOp(null);
    setResetNext(true);
  };

  const clear = () => {
    setDisplay("0");
    setPrev(null);
    setOp(null);
    setResetNext(false);
  };

  const btn =
    "rounded-xl bg-card border border-border py-4 text-lg font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0";
  const opBtn =
    "rounded-xl bg-primary/10 border border-primary/20 py-4 text-lg font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/20";

  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-border bg-card p-5 shadow-xl">
      <div className="mb-4 rounded-2xl bg-secondary/60 p-5 text-right">
        <div className="min-h-5 text-xs text-muted-foreground">
          {prev !== null && op ? `${prev} ${op}` : "\u00A0"}
        </div>
        <div className="mt-1 truncate text-4xl font-bold text-foreground">
          {display}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button onClick={clear} className={`${opBtn} col-span-2`}>C</button>
        <button onClick={() => chooseOp("÷")} className={opBtn}>÷</button>
        <button onClick={() => chooseOp("×")} className={opBtn}>×</button>

        {["7", "8", "9"].map((d) => (
          <button key={d} onClick={() => inputDigit(d)} className={btn}>{d}</button>
        ))}
        <button onClick={() => chooseOp("-")} className={opBtn}>−</button>

        {["4", "5", "6"].map((d) => (
          <button key={d} onClick={() => inputDigit(d)} className={btn}>{d}</button>
        ))}
        <button onClick={() => chooseOp("+")} className={opBtn}>+</button>

        {["1", "2", "3"].map((d) => (
          <button key={d} onClick={() => inputDigit(d)} className={btn}>{d}</button>
        ))}
        <button
          onClick={equals}
          className="row-span-2 rounded-xl bg-primary py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          =
        </button>

        <button onClick={() => inputDigit("0")} className={`${btn} col-span-2`}>0</button>
        <button onClick={() => inputDigit(".")} className={btn}>.</button>
      </div>
    </div>
  );
}