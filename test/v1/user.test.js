/**
 * Created by 郭泽伟 on 2017/8/8.
 */

import {mock} from '../tools'
import Base from './base'

const {_get} = new Base({});
let user = {};

describe('USER LOGIN',  () => {

    it('创建一个新用户', (done) => {

        mock.create('student',function(doc){
            user = doc;
            _get('course/findGrade',{sno:doc.sno},200,done);

            // _post('user/login', {openid: user.openid}, 400,done);

        });

        // assert.equal(user, {"aaa"});
        // console.log(user);
        //
    });
});