type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassArray
  | ClassObject;
interface ClassObject {
  [key: string]: any;
}
interface ClassArray extends Array<ClassValue> {}

function clsx(...args: ClassValue[]): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;

    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = clsx(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (typeof arg === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (const key in arg) {
          if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  });

  return classes.join(" ");
}

export default clsx;
