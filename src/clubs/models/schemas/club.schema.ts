import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Organization } from "@organizations/models/schemas/organization.schema";
import mongoose from "mongoose";
import { Category } from "@categories/models/schema/category.schema";

@Schema({
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
        },
    },
})
export class Club {
    @Prop({
        type: String,
        required: true,
    })
    name: string;

    @Prop({
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
        },
    })
    organization?: Organization;

    @Prop({
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category',
            },
        ],
    })
    categories?: Category[];
}

export const ClubSchema = SchemaFactory.createForClass(Club);

export type ClubDocument = Club & Document;