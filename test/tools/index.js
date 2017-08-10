/**
 * Created by 郭泽伟 on 2017/8/8.
 */
import app from '../../index'
import should from 'should'         //这里必须import
import mock from './mock'
import supertest from 'supertest';

const api = '/api/test/';

const request = supertest(app);
export {
    mock,
    request,
    api
}