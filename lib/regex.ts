/** 简单邮箱校验 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 国内手机号 */
export const PHONE_REGEX = /^1[3-9]\d{9}$/;

/** 密码规则：6~20 位，必须包含字母和数字 */
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;

/** 验证码：6位数字 */
export const VERIFICATION_CODE_REGEX = /^\d{6}$/;

/** 用户名规则：允许中文、英文、数字，2~16位，允许中间有空格 */
export const USERNAME_REGEX = /^(?! )[ \u4e00-\u9fa5a-zA-Z0-9]{1,14}(?<! )$/;
