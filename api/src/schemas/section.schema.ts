import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class Section {
    @Field()
    id: number;

    @Field()
    section: string;

    @Field()
    title: string;

    @Field()
    instructor: string;

    @Field()
    credits: number;

    @Field()
    current: number;

    @Field()
    max: number;

    @Field()
    status: string;

    @Field({ nullable: true })
    prereqs?: string;

    @Field({ nullable: true })
    coreqs?: string;

    @Field(() => [Meeting])
    meetings: Meeting[];
}

@ObjectType()
export class Meeting {
    @Field()
    room: string;

    @Field()
    building: string;

    @Field({ nullable: true })
    day?: string;

    @Field({ nullable: true })
    start?: string;

    @Field({ nullable: true })
    end?: string;
}

@ObjectType()
export class Course {
    @Field()
    name: String;

    @Field(() => [Int])
    sections: number[];
}
