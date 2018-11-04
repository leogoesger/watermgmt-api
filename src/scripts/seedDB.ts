import * as mongoose from 'mongoose';
import * as db from '../models';
import { users, ccSites } from '../seeds';
import { resolve } from 'path';

(mongoose as any).Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI);

const promises = [];

promises.push(
    db.User.remove({})
        .then(() => db.User.collection.insertMany(users))
        .then(data => {
            console.log(data.insertedCount + ' records added!');
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        })
);

promises.push(
    db.CCSite.remove({})
        .then(() => db.CCSite.collection.insertMany(ccSites))
        .then(data => {
            console.log(data.insertedCount + ' records added!');
        })
        .catch(err => {
            console.log(err);
            process.exit(1);
        })
);

mongoose.Promise.all(promises).then(() => process.exit(0));
