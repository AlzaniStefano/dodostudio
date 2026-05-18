export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("it-IT").format(date);
};