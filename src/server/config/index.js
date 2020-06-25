import dotenv from 'dotenv';

dotenv.config();

const { ENV, PORT } = process.env;

const THIRTY_DAYS_IN_SEC = 259200000;

const TWO_HOURS_IN_SEC = 7200000;

export default {
  ENV,
  PORT,
  TWO_HOURS_IN_SEC,
  THIRTY_DAYS_IN_SEC,
};
