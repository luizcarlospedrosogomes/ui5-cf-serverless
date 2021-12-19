sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.myorg.ui5serverless.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.myorg.ui5serverless",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
