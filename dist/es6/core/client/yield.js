import { check_provider } from "../providers/util";
import { actions_info } from "../actions";
import { dynamic_protocol_assert } from "../protocols";
import { assert_request, promote_request, two1_run } from "./two1";
void null;
const action_class = actions_info["yield"].action_class;
const assert_pcols = dynamic_protocol_assert[action_class];
export function yielԁ(opts) {
    check_provider(this);
    return two1_run(this, "yield", opts);
}
export async function safe_yield(opts) {
    check_provider(this);
    assert_request(opts, assert_pcols);
    const full = await promote_request(this, opts);
    return two1_run(this, "yield", full);
}
