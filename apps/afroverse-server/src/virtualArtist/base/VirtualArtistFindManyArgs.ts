/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VirtualArtistWhereInput } from "./VirtualArtistWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { VirtualArtistOrderByInput } from "./VirtualArtistOrderByInput";

@ArgsType()
class VirtualArtistFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VirtualArtistWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => VirtualArtistWhereInput, { nullable: true })
  @Type(() => VirtualArtistWhereInput)
  where?: VirtualArtistWhereInput;

  @ApiProperty({
    required: false,
    type: [VirtualArtistOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [VirtualArtistOrderByInput], { nullable: true })
  @Type(() => VirtualArtistOrderByInput)
  orderBy?: Array<VirtualArtistOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VirtualArtistFindManyArgs as VirtualArtistFindManyArgs };