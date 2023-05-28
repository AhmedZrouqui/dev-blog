import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="text-accent-7 text-xs md:text-sm">
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
};

export default DateFormatter;
