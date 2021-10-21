import {BeforeStep, AfterStep} from "@cucumber/cucumber"

BeforeStep(function () {
    this.previousResponse = this.response
})

AfterStep(function () {
    if (this.previousResponse != this.response) {
        this.attach(JSON.stringify(this.response.request, null, 4))
        this.log(JSON.stringify({
            statusCode: this.response.statusCode,
            headers: this.response.headers,
            body: this.response.body
        }, null, 4))
    }
})