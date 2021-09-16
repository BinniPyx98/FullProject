
///////////Post Handler
import logger from '../../logger/logger.js';
import {checkUserAuthorizationData} from "./authorization.js";

type AuthResult = string | {token:string} //string if error
let authResult: AuthResult

export  function postHandler(request: any ) {

    let authData=request.body
    console.log(authData)
    logger.info('uploadImage data:'+JSON.stringify(authData))
    authResult=checkUserAuthorizationData( authData)
    return JSON.stringify(authResult)
}