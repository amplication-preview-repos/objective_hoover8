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
import { InvestmentWhereInput } from "./InvestmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InvestmentOrderByInput } from "./InvestmentOrderByInput";

@ArgsType()
class InvestmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InvestmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InvestmentWhereInput, { nullable: true })
  @Type(() => InvestmentWhereInput)
  where?: InvestmentWhereInput;

  @ApiProperty({
    required: false,
    type: [InvestmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InvestmentOrderByInput], { nullable: true })
  @Type(() => InvestmentOrderByInput)
  orderBy?: Array<InvestmentOrderByInput>;

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

export { InvestmentFindManyArgs as InvestmentFindManyArgs };
