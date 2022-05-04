import { Schema } from "mongoose";

const ComentarioSchema = new Schema({
  autor: Mongoose.Id,

  respuestas: [ComentarioSchema],
  _id: ID_DE_COMENTARIO,
});
