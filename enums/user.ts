/**
 * 性别枚举
 */
export enum GenderType {
  MALE = 'male',
  FEMALE = 'female'
}

const GenderMap = {
  [GenderType.MALE]: '男',
  [GenderType.FEMALE]: '女'
};

export function displayGender(gender: GenderType | null | undefined) {
  return gender ? GenderMap[gender] : '未知';
}
