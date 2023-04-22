export function setCookie(name: string, value: string) {
  let expires = "";
  const date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/";
}

export function getCookie(name: string) {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : null;
}

const mornThenOne = (number: number) => {
  return number > 1 ? "s" : "";
};

export function diffInMonths(startDate?: string, endDate?: string) {
  if (!startDate) {
    return "0";
  }
  const date1 = new Date(Date.parse(startDate));
  const date2 = endDate ? new Date(Date.parse(endDate)) : new Date();

  const yearDiff = date2.getFullYear() - date1.getFullYear();
  const monthDiff = date2.getMonth() - date1.getMonth();

  const diffInMonths = yearDiff * 12 + monthDiff;

  // Convert to years and months
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  const yearsString = years > 0 ? `${years} year${mornThenOne(years)}` : "";
  const monthsString =
    months > 0 ? `${months} month${mornThenOne(months)}` : "";

  return `${yearsString}${monthsString}`;
}
