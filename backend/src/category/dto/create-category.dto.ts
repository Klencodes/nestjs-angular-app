import { IsIn, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { CategoryTypes } from '../category-types.enum';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  description: string;

  @IsIn([CategoryTypes.ELECTRONICS, CategoryTypes.HOME_AND_OFFICE, CategoryTypes.HEALTH_AND_BEAUTY, CategoryTypes.PHONES_AND_TABLETS,CategoryTypes.BABY_PRODUCTS, CategoryTypes.COMPUTING, CategoryTypes.STATIONARIES, CategoryTypes.GAMING, CategoryTypes.FITNESS_AND_SPORTS,  CategoryTypes.OTHER_CATEGORIES])
  type: CategoryTypes;
}
