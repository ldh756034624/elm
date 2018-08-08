import fetch from '../../config/fetch'

/**
 * 获取手机验证码
 * @returns {Promise<*>}
 */
export const mobileSendCode = () => fetch('/v1/verify-code')

/**
 * 图片验证码
 * @returns {Promise<*>}
 */
// export const getImgCode = () => fetch('http://localhost:8000/v1/captchas',{},'POST')
export const getImgCode = () => fetch('http://localhost:8000/v1/captchas', {}, 'POST')
