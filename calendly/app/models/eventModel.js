import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const calendlyEventModel = new Schema({
    title: { type: String },
    author: { type: String }
})

export default mongoose.model('books', bookModel)