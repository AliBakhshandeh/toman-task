const createDateFormatter = (locale: string = 'en-US') => {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };
  
const formatDate = (date: string | Date, locale: string = 'en-US'): string => {
    const formatter = createDateFormatter(locale);
    return formatter.format(new Date(date));
  };

  export default formatDate;