import mongoose from 'mongoose';
// import appConfig from './config';
mongoose.Promise = global.Promise;

export const connect = () => {
  return mongoose.connect('mongodb://localhost/jams', {
    useMongoClient: true
  });
};
