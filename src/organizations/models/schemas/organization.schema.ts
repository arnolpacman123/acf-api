import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Club } from "@clubs/models/schemas/club.schema";
import { BadRequestException } from "@nestjs/common";

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
export class Organization {
    @Prop({
        type: String,
        required: true,
    })
    name: string;

    @Prop({
        type: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Club",
        } ],
    })
    clubs?: Club[];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

export type OrganizationDocument = Organization & Document;

OrganizationSchema.pre("findOneAndUpdate", async function (next) {
    const organizationId = this.getFilter()["_id"];

    const clubs = this.getUpdate()["$set"].clubs;
    const foundOrganization = await this.model.findOne({
        clubs: {
            $in: clubs,
        },
    });

    if (foundOrganization) {
        if (foundOrganization._id.toString() !== organizationId) {
            return next(
                new BadRequestException("Club already exists in another organization.")
            );
        }
    }
    next();
});


