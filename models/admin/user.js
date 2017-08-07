/**
 * Created by 郭泽伟 on 2017/7/31.
 */
import Base from '../base'

const User = new Base('User', {
    email: String,
    password: String,           //密码
});

export default User.methods;