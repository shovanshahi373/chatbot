import moment from 'moment';

export const formateDate = (date: Date) => {
  return moment(date).format('MMM DD, HH:mm a');
};
