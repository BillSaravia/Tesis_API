import mongoose,{ Schema } from "mongoose";

const HelpFormSchema = new Schema({
  user:{type:Schema.ObjectId,ref:'user', required:true},
  motivo: { type: String, maxlength: 250, required: true },
  descripcion: { type: String, maxlength: 250, required: false }
},{
  timestamps:true
});

const HelpForm = mongoose.model("help_form",HelpFormSchema);

export default HelpForm;
