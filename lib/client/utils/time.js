import moment from 'moment';

export const calculateDiff = ({ end, start }) => moment(end).diff(moment(start));

export const calculatePiecesDiff = (pieces) => pieces.reduce((sum, piece) => calculateDiff(piece) + sum, 0);

export const formatDiff = (diff) => moment.utc(diff).format('HH:mm:ss');

export const fullRecordedTime = (pieces, piece) => {
  let sum = calculatePiecesDiff(pieces);
  if (piece) sum += calculateDiff(piece);
  return formatDiff(sum);
};