"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safe_unyield = exports.unyield = void 0;
const util_1 = require("../providers/util");
const actions_1 = require("../actions");
const protocols_1 = require("../protocols");
const two1_1 = require("./two1");
void null;
const action_class = actions_1.actions_info["unyield"].action_class;
const assert_pcols = protocols_1.dynamic_protocol_assert[action_class];
function unyield(opts) {
    (0, util_1.check_provider)(this);
    return (0, two1_1.two1_run)(this, "unyield", opts);
}
exports.unyield = unyield;
async function safe_unyield(opts) {
    (0, util_1.check_provider)(this);
    (0, two1_1.assert_request)(opts, assert_pcols);
    const full = await (0, two1_1.promote_request)(this, opts);
    return (0, two1_1.two1_run)(this, "unyield", full);
}
exports.safe_unyield = safe_unyield;
