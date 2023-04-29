import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            ret.start_date = ret.startDate;
            delete ret._id;
            delete ret.startDate;
        },
    },
})
export class Championship {
    @Prop({
        type: String,
        required: true,
    })
    name: string;

    @Prop({
        type: mongoose.Schema.Types.Date,
        required: true,
        name: "start_date",
    })
    startDate: Date;

    @Prop({
        type: String,
        required: true,
    })
    description: string;
}

export const ChampionshipSchema = SchemaFactory.createForClass(Championship);

export type ChampionshipDocument = Championship & Document;