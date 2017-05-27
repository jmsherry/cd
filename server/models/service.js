import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: { type: 'String', required: true },
  description: { type: 'String', required: true },
  cost: { type: 'Number', required: true },
});

serviceSchema.plugin(timestamps);

export default mongoose.model('Post', serviceSchema);
