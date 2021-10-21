import {Then} from "@cucumber/cucumber";
const jp = require('jsonpath');
import { expect } from "chai";

Then('I expect the answer', function (dataTable) {
    const checks = dataTable.hashes()

    checks.forEach((check: any) => {
        let testedValue
        switch (check['Response part'].toLowerCase()) {
            case 'statuscode': testedValue = this.response.statusCode; break;
            case 'header': testedValue = this.response.headers[check['Path']]; break;
            case 'body': testedValue = jp.query(this.response.body, check['Path'])[0]; break;
            default: throw new Error(`There's no response part ${check['Response part']}`)
        }

        switch (check['Check type'].toLowerCase()) {
            case 'typeof': testedValue = typeof testedValue; break;
            case 'valueof': testedValue = testedValue.toString(); break;
            default: throw new Error(`There's no check type ${check['Check type']}`)
        }

        let compare = expect(testedValue).to
        switch (check['Compare type'].toLowerCase()) {
            case 'is':
                switch (check['Expected'].toLowerCase()) {
                    case 'notnull': compare.not.null; break;
                    case 'null': compare.null; break;
                    default: compare.eq(check['Expected']); break;
                }
                break;
            case 'contains': compare = compare.to.contains(check['Expected']); break;
            default: throw new Error(`There's no compare type ${check['Compare type']}`)
        }
    })
})

Then(/^I expect size of "(\S+)" equals to (\d+)$/, function (path: string, count: number) {
    expect(jp.query(this.response.body, path)[0].length).to.eq(count)
})