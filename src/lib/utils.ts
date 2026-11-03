export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function indexLabel(index: number) {
  return String(index + 1).padStart(2, "0");
}
