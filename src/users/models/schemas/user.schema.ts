import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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
export class User {
    @Prop({
        required: true,
        type: String,
    })
    name: string;

    @Prop({
        required: true,
        type: String,
    })
    lastname: string;

    @Prop({
        required: true,
        type: String,
        unique: true,
    })
    ci: string;

    @Prop({
        required: true,
        type: String,
    })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;