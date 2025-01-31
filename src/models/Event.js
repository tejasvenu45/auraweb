import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    problemStatement: { type: String, required: true },
    systemArchiture: {type: String, required:true},
    docLink:{type:String,required:true},
    teamDetails: [
        {
            name: { type: String, required: true },
            email: { type: String, required: true },
            srn: { type: String, required: true },
            hostellite: { type: Boolean, required: true },
            parentsPhNo:{type:Number, required:true}
        }
    ],

});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
