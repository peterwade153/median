import { ApiProperty } from "@nestjs/swagger";

export class ArticleEntity {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty({required: false})
    description: string

    @ApiProperty()
    body: string

    @ApiProperty({required: false, default: false})
    published: boolean

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}
