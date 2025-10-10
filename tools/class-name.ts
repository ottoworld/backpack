export default function className(
  classNames: string,
  styles: { readonly [key: string]: string },
): string {
  let classes = "";
  classNames.split(" ").map((className) => {
    classes += " " + styles[className];
  });
  return classes;
}
