import express from 'express';
import { type } from 'os';
import { Response, Request, Dictionary } from 'express-serve-static-core';
import { isNumber } from 'util';

type json = {
    [key: string]: string
}

type paramsCheckResult = {
    result: boolean,
    notIncluded: string[]
}

type param = {
    key: string,
    type?: 'string' | 'number' | 'boolean',
    required?: boolean
}

type requestType = Request<Dictionary<string>>;
type ResponseType = Response;

abstract class api {

    //extendable
    abstract params: param[];
    csrfCheck(req?: requestType): boolean {
        return true;
    };
    permissonCheck(req?: requestType): boolean {
        return true;
    }
    content(req?: requestType): json {
        return { msg: 'There is no content' }
    };

    //readonly
    readonly paramsCheck = (req: requestType): paramsCheckResult => {
        let keys: string[] = [];
        let result: paramsCheckResult;
        result = {
            result: true,
            notIncluded: []
        }

        for (const key in req.query) {
            keys = keys.concat(key);
        }

        for (const param of this.params) {
            if ((param.required) && !keys.includes(param.key)) {
                result.notIncluded = result.notIncluded.concat(param.key);
                result.result = false;
            }
        }

        return result;
    }

    readonly response = (req: requestType, res: ResponseType) => {
        if (!this.csrfCheck()) {
            res.status(401).json({
                status: 401,
                msg: 'Nonce not found!'
            })

            return;
        }

        if (!this.permissonCheck()) {
            res.status(401).json({
                status: 401,
                msg: 'Permission denied!'
            })

            return;
        }

        let paramsCheckResult: paramsCheckResult = this.paramsCheck(req);
        if(!paramsCheckResult.result){
            res.status(400).json({
                status: 400,
                msg: 'Params needed: '+paramsCheckResult.notIncluded.toString()
            })
            
            return;
        }

        res.json(this.content(req))
    }
}

export default api;