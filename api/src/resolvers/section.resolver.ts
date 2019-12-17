import { Arg, Resolver, Query } from "type-graphql";
import { Section } from "../schemas/section.schema";

import { TEST_DATA } from '../data';

@Resolver(() => Section)
export class SectionResolver {
    @Query(() => [Section])
    async sections(
        @Arg("instructor", { nullable: true }) instructor: string
    ) {
        if (instructor)
            return await TEST_DATA.filter(data => data.instructor.toLowerCase().includes(instructor.toLowerCase()));
        return await TEST_DATA;
    }

    @Query(() => [String])
    async courses() {
        return await [...new Set(TEST_DATA.map(({ title }) => title))];
    }
}
